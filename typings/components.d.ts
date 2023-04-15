// For this project development
import '@vue/runtime-core'

declare module '@vue/runtime-core' { // Vue 3
  // declare module 'vue' {   // Vue 2.7
  // declare module '@vue/runtime-dom' {  // Vue <= 2.6.14

  // GlobalComponents for Volar
  export interface GlobalComponents {
    JffIcon: typeof import('../packages/justforfun-ui')['JffIcon']
    JffButton: typeof import('../packages/justforfun-ui')['JffButton']
    JffButtonGroup: typeof import('../packages/justforfun-ui')['JffButtonGroup']
    JffInput: typeof import('../packages/justforfun-ui')['JffIcon']
    JffBadge: typeof import('../packages/justforfun-ui')['JffBadge']
    JffConfigProvider: typeof import('../packages/justforfun-ui')['JffConfigProvider']
    JffForm: typeof import('../packages/justforfun-ui')['JffForm']
    JffFormItem: typeof import('../packages/justforfun-ui')['JffFormItem']
  }

  interface ComponentCustomProperties {
    $message: typeof import('../packages/justforfun-ui')['JffMessage']
    $loading: typeof import('../packages/justforfun-ui')['JffLoadingService']
  }
}

export { }
/** 当我们的 tsconfig.json 中的 isolatedModules 设置为 true 时，如果某个 ts 文件中没有一个
import or export 时，ts 则认为这个模块不是一个 ES Module 模块，它被认为是一个全局的脚本，
这个时候在文件中添加任意一个 import or export 都可以解决这个问题。
**/

