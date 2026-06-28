import type { Plugin } from 'vite'

type Append = Record<'headers' | 'footers' | 'scriptSetups', string[]>

export function MarkdownTransform(): Plugin {
  return {
    name: 'jff-md-transform',
    enforce: 'pre',
    async transform(code, id) {
      if (!id.endsWith('.md')) return

      const append: Append = {
        headers: [],
        footers: [],
        scriptSetups: [],
      }

      // Transform vp-script setup blocks if any
      code = transformVpScriptSetup(code, append)

      return combineMarkdown(
        code,
        append.scriptSetups,
        append.headers,
        append.footers,
      )
    },
  }
}

// Matches existing <script setup> blocks (with optional attributes like lang="ts")
const scriptSetupRE = /<script\s+setup(?:\s+[^>]*)?>([\s\S]*?)<\/script>/

const combineMarkdown = (
  code: string,
  scriptSetups: string[],
  headers: string[],
  footers: string[],
) => {
  const frontmatterEnds = code.indexOf('---\n\n')
  const firstHeader = code.search(/\n#{1,6}\s.+/)
  const sliceIndex =
    firstHeader < 0
      ? frontmatterEnds < 0
        ? 0
        : frontmatterEnds + 4
      : firstHeader

  if (scriptSetups.length > 0) {
    const existing = code.match(scriptSetupRE)
    if (existing) {
      // Merge into existing <script setup>
      const existingContent = existing[1]
      const newContent = existingContent + '\n' + scriptSetups.join('\n')
      code = code.replace(
        scriptSetupRE,
        `<script setup>\n${newContent}\n</script>`
      )
    } else {
      // Insert a new <script setup> before first header / frontmatter
      const scriptBlock = `\n<script setup>\n${scriptSetups.join('\n')}\n</script>\n`
      code = code.slice(0, sliceIndex) + scriptBlock + code.slice(sliceIndex)
    }
  }

  if (headers.length > 0)
    code = code.slice(0, sliceIndex) + headers.join('\n') + code.slice(sliceIndex)
  code += footers.join('\n')

  return `${code}\n`
}

const vpScriptSetupRE = /<vp-script\s(.*\s)?setup(\s.*)?>([\s\S]*)<\/vp-script>/

const transformVpScriptSetup = (code: string, append: Append) => {
  const matches = code.match(vpScriptSetupRE)
  if (matches) code = code.replace(matches[0], '')
  const scriptSetup = matches?.[3] ?? ''
  if (scriptSetup) append.scriptSetups.push(scriptSetup)
  return code
}
