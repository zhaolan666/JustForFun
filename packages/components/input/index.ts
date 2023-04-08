import { withInstall } from '@justforfun-ui/utils'
import Input from './src/input.vue'

// 通过 withInstall 方法给 Input 添加了一个 install 方法
export const JffInput = withInstall(Input)
// 可以通过 app.use 来使用，也可以通过 import 方式单独使用
export default JffInput
export * from './src/input'
