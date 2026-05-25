import type { ComponentResolver } from 'unplugin-vue-components'

export interface JustForFunResolverOptions {
  /**
   * 是否自动导入样式
   * @default true
   */
  importStyle?: boolean | 'scss' | 'css'
  
  /**
   * 组件前缀
   * @default 'Jff'
   */
  prefix?: string
}

// 组件名称映射表（处理特殊情况）
const componentMap: Record<string, string> = {
  JffButton: 'button',
  JffButtonGroup: 'button-group',
  JffIcon: 'icon',
  JffInput: 'input',
  JffBadge: 'badge',
  JffBorder: 'border',
  JffContainer: 'layout',
  JffHeader: 'layout',
  JffAside: 'layout',
  JffMain: 'layout',
  JffFooter: 'layout',
  JffRow: 'layout',
  JffCol: 'layout',
  JffForm: 'form',
  JffFormItem: 'form-item',
  JffCheckbox: 'checkbox',
  JffCheckboxGroup: 'checkbox',
  JffRadio: 'radio',
  JffRadioGroup: 'radio',
  JffSelect: 'select',
  JffOption: 'select',
  JffSwitch: 'switch',
  JffAvatar: 'avatar',
  JffCard: 'card',
  JffTag: 'tag',
  JffTabs: 'tabs',
  JffTabPane: 'tabs',
  JffDropdown: 'dropdown',
  JffDropdownItem: 'dropdown',
  JffMessage: 'message',
  JffLoading: 'loading',
  JffDialog: 'dialog',
  JffAlert: 'alert',
  JffConfigProvider: 'config-provider',
}

export function JustForFunResolver(
  options: JustForFunResolverOptions = {},
): ComponentResolver {
  const { importStyle = true, prefix = 'Jff' } = options

  return {
    type: 'component' as const,
    resolve: (name: string) => {
      // 匹配指定前缀的组件
      if (name.startsWith(prefix)) {
        // 获取组件对应的样式文件名
        const styleName = componentMap[name] || name.charAt(3).toLowerCase() + name.slice(4)
        
        const result: any = {
          name: name,
          from: '@justforfun-ui/components',
        }

        if (importStyle) {
          result.sideEffects = [
            importStyle === 'scss'
              ? `@justforfun-ui/theme-chalk/src/${styleName}.scss`
              : `@justforfun-ui/theme-chalk/${styleName}.css`
          ]
        }

        return result
      }
    },
  }
}

export default JustForFunResolver
