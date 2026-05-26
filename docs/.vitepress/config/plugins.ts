import type MarkdownIt from 'markdown-it'
import container from 'markdown-it-container'

/**
 * VitePress Demo Plugin
 * 
 * Registers the :::demo container for markdown-it.
 * Wraps content in ClientOnly to prevent SSR issues.
 */
export const mdPlugin = (md: MarkdownIt) => {
  md.use(container, 'demo', {
    validate(params: string) {
      return params.trim().match(/^demo\s*(.*)$/) !== null
    },
    render(tokens: any[], idx: number) {
      const token = tokens[idx]

      if (token.nesting === 1) {
        // Opening tag - wrap in ClientOnly to prevent SSR issues
        // Use v-pre to prevent markdown from processing the content
        return `<ClientOnly><div v-pre class="demo-block"><div class="demo-block__demo">\n`
      } else {
        // Closing tag
        return `</div></div></ClientOnly>\n`
      }
    },
  })
}

/**
 * VitePress Tip/Warning/Danger containers
 * These are built into VitePress but we can configure them here
 */
export const containerPlugin = (md: MarkdownIt) => {
  // tip, warning, danger, info, details are built into VitePress markdown
  // No custom configuration needed
}
