import type { Plugin } from 'vitepress'

/**
 * JustForFun UI Demo Block Plugin for VitePress
 *
 * Usage in Markdown:
 * ```markdown
 * :::: demo border/basic ::::
 * ```
 *
 * This will render the DemoBlock component with the specified example path.
 */
export function jffDemoPlugin(): Plugin {
  return {
    name: 'vitepress-plugin-jff-demo',

    extendMarkdown(md) {
      // 自定义容器语法解析器
      const defaultRender = md.renderer.rules.fence || function(tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options)
      }

      // 处理自定义 :::demo 容器
      md.use(require('markdown-it-container'), 'demo', {
        validate(params) {
          // 验证参数格式：demo path/to/example
          const path = params.trim()
          if (!path) {
            console.warn('Demo block requires a path parameter')
            return false
          }
          return true
        },

        render(tokens, idx) {
          if (tokens[idx].nesting === 1) {
            // 开始标签 - 提取路径参数
            let path = tokens[idx].info.trim().replace(/^demo\s+/, '')

            // 清理路径中的 ::: 标记和多余空格
            path = path
              .replace(/:::/g, '')  // 移除所有 :::
              .trim()               // 去除首尾空格

            // 返回 DemoBlock 组件的开始标签
            return `<DemoBlock path="${path}">\n`
          } else {
            // 结束标签
            return `</DemoBlock>\n`
          }
        }
      })

      // 备用方案：使用 fence 规则（代码块）处理 demo
      md.renderer.rules.fence = (tokens, idx, options, env, self) => {
        const token = tokens[idx]
        const info = token.info ? token.info.trim() : ''

        // 检查是否是 demo 代码块（语言标记为 'demo'）
        if (info === 'demo' || info.startsWith('demo ')) {
          let path = info.replace(/^demo\s*/, '')

          // 清理路径中的 ::: 标记和多余空格
          path = path
            .replace(/:::/g, '')  // 移除所有 :::
            .trim()               // 去除首尾空格

          if (path) {
            // 返回 DemoBlock 组件
            return `<DemoBlock path="${path}"></DemoBlock>`
          }
        }

        // 其他语言保持默认渲染
        return defaultRender(tokens, idx, options, env, self)
      }
    }
  }
}
