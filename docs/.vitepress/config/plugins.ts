import type MarkdownIt from 'markdown-it'
import container from 'markdown-it-container'

export const mdPlugin = (md: MarkdownIt) => {
  // 注册 demo 容器 - 使用 DemoBlock 组件
  md.use(container, 'demo', {
    validate(params: string) {
      return params.trim().match(/^demo\s*(.*)$/) !== null
    },
    render(tokens: any[], idx: number) {
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
      const description = m && m.length > 1 ? m[1] : ''

      if (tokens[idx].nesting === 1) {
        // 容器开始 - 使用 DemoBlock 组件
        return `<DemoBlock>\n<template #demo>`
      } else {
        // 容器结束
        return `</template>\n</DemoBlock>`
      }
    },
  })
}
