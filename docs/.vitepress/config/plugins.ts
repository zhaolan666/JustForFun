import type MarkdownIt from 'markdown-it'
import container from 'markdown-it-container'

export const mdPlugin = (md: MarkdownIt) => {
  // 注册 demo 容器
  md.use(container, 'demo', {
    validate(params: string) {
      return params.trim().match(/^demo\s*(.*)$/) !== null
    },
    render(tokens: any[], idx: number) {
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
      const description = m && m.length > 1 ? m[1] : ''

      if (tokens[idx].nesting === 1) {
        // 容器开始 - 只返回组件开始标签，内容让 markdown-it 正常渲染
        return `<JffDemoContainer code-title="${description || 'Example Code'}">`
      } else {
        // 容器结束
        return '</JffDemoContainer>'
      }
    },
  })
}
