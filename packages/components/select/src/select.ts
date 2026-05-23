import { buildProps } from '@justforfun-ui/utils'
import type { ExtractPropTypes } from 'vue'
import type Select from './select.vue'
import type Option from './option.vue'

export interface SelectOption {
  value: string | number
  label: string
  disabled?: boolean
}

export const selectProps = buildProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  placeholder: {
    type: String,
    default: '请选择',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
} as const)

export const optionProps = buildProps({
  value: {
    type: [String, Number],
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
} as const)

export type SelectProps = ExtractPropTypes<typeof selectProps>
export type OptionProps = ExtractPropTypes<typeof optionProps>
export type SelectInstance = InstanceType<typeof Select>
export type OptionInstance = InstanceType<typeof Option>
