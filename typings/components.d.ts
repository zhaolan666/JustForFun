// For this project development
import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  // Vue 3
  // declare module 'vue' {   // Vue 2.7
  // declare module '@vue/runtime-dom' {  // Vue <= 2.6.14

  // GlobalComponents for Volar
  export interface GlobalComponents {
    JffIcon: {
      new (): {
        $props: {
          name?: string
          size?: string | number
        }
      }
    }
    JffButton: {
      new (): {
        $props: {
          size?: string
          type?: string
          disabled?: boolean
        }
      }
    }
    JffButtonGroup: {
      new (): {
        $props: {
          size?: string
          type?: string
        }
      }
    }
    JffInput: {
      new (): {
        $props: {
          modelValue?: string | number
          placeholder?: string
          disabled?: boolean
        }
      }
    }
    JffBadge: {
      new (): {
        $props: {
          value?: string | number
        }
      }
    }
    JffConfigProvider: {
      new (): {
        $props: {
          locale?: any
        }
      }
    }
    JffForm: {
      new (): {
        $props: {
          model?: Record<string, any>
        }
      }
    }
    JffFormItem: {
      new (): {
        $props: {
          label?: string
          prop?: string
        }
      }
    }
  }

  interface ComponentCustomProperties {
    $message: {
      (options: any): any
    } & {
      success(msg: string): void
      error(msg: string): void
      warning(msg: string): void
    }
    $loading: {
      (options: any): { close: () => void }
    }
  }
}

export {}
/** 当我们的 tsconfig.json 中的 isolatedModules 设置为 true 时，如果某个 ts 文件中没有一个
import or export 时，ts 则认为这个模块不是一个 ES Module 模块，它被认为是一个全局的脚本，
这个时候在文件中添加任意一个 import or export 都可以解决这个问题。
**/
