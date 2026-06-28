import { withNoopInstall } from '@justforfun-ui/utils'
import Button from './src/button.vue'
import ButtonGroup from './src/button-group.vue'

// 导出原始 Button 组件（这是标准的 Vue SFC）
// Button 组件已经有 defineOptions({ name: 'JffButton' })
export const JffButton = withNoopInstall(Button)

// 导出 ButtonGroup
export const JffButtonGroup = withNoopInstall(ButtonGroup)

// 默认导出（兼容 app.use()）
export default {
  install(app: any) {
    app.component('JffButton', Button)
    app.component('JffButtonGroup', ButtonGroup)
  }
}

export * from './src/button'
export * from './src/constants'
export type { ButtonInstance, ButtonGroupInstance } from './src/instance'
