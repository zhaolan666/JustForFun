import type { MarkdownRenderer } from 'vitepress'

export default function apiTablePlugin(md: MarkdownRenderer) {
  md.use((md) => {
    // 添加 :::api-table 容器支持
    md.renderer.rules['container_api-table'] = (tokens, idx, options, env, self) => {
      const token = tokens[idx]
      if (token.nesting === 1) {
        // 开始标签
        return `<div class="api-table-wrapper">\n`
      } else {
        // 结束标签
        return `</div>\n`
      }
    }
  })
}
