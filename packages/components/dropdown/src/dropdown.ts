import { buildProps } from '@justforfun-ui/utils'
import type { ExtractPropTypes } from 'vue'
import type Dropdown from './dropdown.vue'
import type DropdownItem from './dropdown-item.vue'

export const dropdownProps = buildProps({
  trigger: {
    type: String,
    default: 'click',
    validator: (val: string) => ['click', 'hover'].includes(val),
  },
  hideOnClick: {
    type: Boolean,
    default: true,
  },
} as const)

export const dropdownItemProps = buildProps({
  command: {
    type: [String, Number, Object],
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  divided: {
    type: Boolean,
    default: false,
  },
} as const)

export type DropdownProps = ExtractPropTypes<typeof dropdownProps>
export type DropdownItemProps = ExtractPropTypes<typeof dropdownItemProps>
export type DropdownInstance = InstanceType<typeof Dropdown>
export type DropdownItemInstance = InstanceType<typeof DropdownItem>
