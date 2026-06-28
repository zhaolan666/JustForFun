import type MarkdownIt from 'markdown-it'
import container from 'markdown-it-container'

/**
 * VitePress Demo Plugin
 *
 * 使用 markdown-it-container 注册 :::demo 容器
 * 将内容转换为 <DemoBlock> 组件
 *
 * 源码加载由 DemoBlock 组件自身负责（通过 PathConfig）
 */
export const mdPlugin = (md: MarkdownIt) => {
  md.use(container, 'demo', {
    validate(params: string) {
      return !!params.trim().match(/^demo\s*(.*)$/)
    },
    render(tokens: Token[], idx: number) {
      const m = tokens[idx].info.trim().match(/^demo\s+(.*)$/)

      if (tokens[idx].nesting === 1) {
        let demoPath = m && m.length > 1 ? m[1] : ''
        demoPath = demoPath.replace(/:::/g, '').trim()
        return `<DemoBlock path="${demoPath}">\n`
      } else {
        return `</DemoBlock>\n`
      }
    },
  })
}
