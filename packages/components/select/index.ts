import { withInstall } from '@justforfun-ui/utils'
import Select from './src/select.vue'
import Option from './src/option.vue'

export const JffSelect = withInstall(Select)
export const JffOption = withInstall(Option)

export default JffSelect

export * from './src/select'
