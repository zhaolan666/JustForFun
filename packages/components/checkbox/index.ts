import { withInstall } from '@justforfun-ui/utils'
import Checkbox from './src/checkbox.vue'
import CheckboxGroup from './src/checkbox-group.vue'

export const JffCheckbox = withInstall(Checkbox)
export const JffCheckboxGroup = withInstall(CheckboxGroup)

export default JffCheckbox

export * from './src/checkbox'
