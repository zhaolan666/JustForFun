// Simple highlight function without prismjs
import escapeHtml from 'escape-html'

export const highlight = (str: string, lang: string): string => {
  // Just escape HTML and wrap in pre/code tags
  // VitePress has built-in Shiki highlighting
  const escaped = escapeHtml(str)
  return `<pre v-pre><code class="language-${lang}">${escaped}</code></pre>`
}
