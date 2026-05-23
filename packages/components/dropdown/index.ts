import { withInstall } from '@justforfun-ui/utils'
import Dropdown from './src/dropdown.vue'
import DropdownItem from './src/dropdown-item.vue'

export const JffDropdown = withInstall(Dropdown)
export const JffDropdownItem = withInstall(DropdownItem)

export default JffDropdown

export * from './src/dropdown'
