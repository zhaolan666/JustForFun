import type { Plugin } from 'vite'

/**
 * Vite plugin to transform :::demo blocks in markdown.
 * This runs BEFORE markdown-it processes the file,
 * allowing us to preserve the original Vue template syntax.
 */
export function DemoTransformPlugin(): Plugin {
  return {
    name: 'vitepress-demo-transform',
    enforce: 'pre',
    transform(code, id) {
      if (!id.endsWith('.md')) return

      // Pattern to match :::demo blocks
      const demoBlockRegex = /:::demo\s*\n([\s\S]*?)\n:::/g

      let transformed = code.replace(demoBlockRegex, (match, content) => {
        // Parse the content - separate template from code block
        const lines = content.split('\n')
        const templateLines: string[] = []
        const codeLines: string[] = []
        let inCodeBlock = false

        for (const line of lines) {
          const trimmed = line.trim()
          if (trimmed.startsWith('```')) {
            inCodeBlock = !inCodeBlock
            continue
          }
          if (inCodeBlock) {
            codeLines.push(line)
          } else if (trimmed) {
            templateLines.push(line)
          }
        }

        const templateContent = templateLines.join('\n')

        // Create a wrapper that Vue will render
        // Use a special marker that we'll process in DemoBlock
        return `<DemoBlock>${templateContent}</DemoBlock>`
      })

      return transformed
    },
  }
}
