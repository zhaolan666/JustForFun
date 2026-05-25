// CSS module declarations for @justforfun-ui/theme-chalk
declare module '@justforfun-ui/theme-chalk/jff-badge.css'
declare module '@justforfun-ui/theme-chalk/jff-base.css'
declare module '@justforfun-ui/theme-chalk/jff-button-group.css'
declare module '@justforfun-ui/theme-chalk/jff-button.css'
declare module '@justforfun-ui/theme-chalk/jff-config-provider.css'
declare module '@justforfun-ui/theme-chalk/jff-form-item.css'
declare module '@justforfun-ui/theme-chalk/jff-form.css'
declare module '@justforfun-ui/theme-chalk/jff-icon.css'
declare module '@justforfun-ui/theme-chalk/jff-input.css'
declare module '@justforfun-ui/theme-chalk/jff-loading.css'
declare module '@justforfun-ui/theme-chalk/jff-message.css'
declare module '@justforfun-ui/theme-chalk/base.css'
declare module '@justforfun-ui/theme-chalk/src/badge.scss'
declare module '@justforfun-ui/theme-chalk/src/base.scss'
declare module '@justforfun-ui/theme-chalk/src/button-group.scss'
declare module '@justforfun-ui/theme-chalk/src/button.scss'
declare module '@justforfun-ui/theme-chalk/src/config-provider.scss'
declare module '@justforfun-ui/theme-chalk/src/form-item.scss'
declare module '@justforfun-ui/theme-chalk/src/form.scss'
declare module '@justforfun-ui/theme-chalk/src/icon.scss'
declare module '@justforfun-ui/theme-chalk/src/input.scss'
declare module '@justforfun-ui/theme-chalk/src/loading.scss'
declare module '@justforfun-ui/theme-chalk/src/message.scss'

// @justforfun-ui/theme-chalk/*.css patterns
declare module '@justforfun-ui/theme-chalk/button.css'
declare module '@justforfun-ui/theme-chalk/icon.css'
declare module '@justforfun-ui/theme-chalk/input.css'
declare module '@justforfun-ui/theme-chalk/badge.css'
declare module '@justforfun-ui/theme-chalk/border.css'
declare module '@justforfun-ui/theme-chalk/layout.css'
declare module '@justforfun-ui/theme-chalk/form.css'
declare module '@justforfun-ui/theme-chalk/checkbox.css'
declare module '@justforfun-ui/theme-chalk/radio.css'
declare module '@justforfun-ui/theme-chalk/select.css'
declare module '@justforfun-ui/theme-chalk/switch.css'
declare module '@justforfun-ui/theme-chalk/avatar.css'
declare module '@justforfun-ui/theme-chalk/card.css'
declare module '@justforfun-ui/theme-chalk/tag.css'
declare module '@justforfun-ui/theme-chalk/tabs.css'
declare module '@justforfun-ui/theme-chalk/dropdown.css'
declare module '@justforfun-ui/theme-chalk/dialog.css'
declare module '@justforfun-ui/theme-chalk/alert.css'
declare module '@justforfun-ui/theme-chalk/message.css'

// justforfun-ui/theme-chalk/*.css (old package name)
declare module 'justforfun-ui/theme-chalk/button.css'
declare module 'justforfun-ui/theme-chalk/input.css'
declare module '@justforfun-ui/theme-chalk/src/button.scss'
declare module '@justforfun-ui/theme-chalk/src/input.scss'

// All CSS files - global declaration for side-effect imports
declare module '*.css'
declare module '*.scss'

// unplugin-vue-components type declaration
declare module 'unplugin-vue-components' {
  export interface ComponentResolver {
    type: 'component'
    resolve: (name: string) => {
      name: string
      from: string
      sideEffects?: string[]
    } | null
  }
}

// justforfun-ui package path declarations
declare module 'justforfun-ui/components/button'
declare module 'justforfun-ui/components/input'
declare module 'justforfun-ui/components'
declare module 'justforfun-ui/resolver'
declare module 'justforfun-ui/style-loader'

// LoadingParentElement for loading component
interface LoadingParentElement extends HTMLElement {
  vLoadingAddClassList?: () => void
}

// vue/compiler-sfc type augmentation for newer versions
declare module 'vue/compiler-sfc' {
  export interface SFCDescriptor {
    descriptor: {
      template?: { content: string; lang: string }
      script?: { content: string; lang: string; attrs: Record<string, string> }
      scriptSetup?: { content: string; lang: string; attrs: Record<string, string> }
      styles: Array<{ content: string; lang: string }>
      customBlocks: Array<{ type: string; content: string }>
    }
  }
  export function parse(source: string): SFCDescriptor
  export function compileScript(descriptor: any, options: { id: string }): { content: string }
}

// gulp type declarations
declare module 'gulp' {
  export interface TaskFunction {
    (cb: () => void): void | Promise<void>
  }
  export interface SeriesTask {
    (...fns: Array<TaskFunction>): TaskFunction
  }
  export interface ParallelTask {
    (...fns: Array<TaskFunction>): TaskFunction
  }
  export const series: SeriesTask
  export const parallel: ParallelTask
}
