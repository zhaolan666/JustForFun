import { withInstall, withNoopInstall } from '@justforfun-ui/utils'
import Button from './src/button.vue'
import ButtonGroup from './src/button-group.vue'

// 通过 withInstall 方法给 Button 添加了一个 install 方法
export const JffButton = withInstall(Button, { ButtonGroup })

// 导出 ButtonGroup 组件
export const JffButtonGroup = withNoopInstall(ButtonGroup)
// 可以通过 app.use 来使用，也可以通过 import 方式单独使用
export default JffButton


export * from './src/button'
export * from './src/constants'
export type { ButtonInstance, ButtonGroupInstance } from './src/instance'
