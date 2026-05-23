import { buildProps } from '@justforfun-ui/utils'
import type { ExtractPropTypes } from 'vue'
import type Checkbox from './checkbox.vue'
import type CheckboxGroup from './checkbox-group.vue'

export const checkboxProps = buildProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  checked: {
    type: Boolean,
    default: false,
  },
  indeterminate: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: '',
  },
  border: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    default: '',
  },
  value: {
    type: [String, Number, Boolean],
    default: '',
  },
} as const)

export const checkboxGroupProps = buildProps({
  modelValue: {
    type: Array,
    default: () => [],
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  min: {
    type: Number,
  },
  max: {
    type: Number,
  },
} as const)

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>
export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>
export type CheckboxInstance = InstanceType<typeof Checkbox>
export type CheckboxGroupInstance = InstanceType<typeof CheckboxGroup>
