import { buildProps } from '@justforfun-ui/utils'
import type { ExtractPropTypes } from 'vue'
import type Radio from './radio.vue'
import type RadioGroup from './radio-group.vue'

export const radioProps = buildProps({
  modelValue: {
    type: [String, Number, Boolean],
    default: '',
  },
  label: {
    type: [String, Number, Boolean],
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    default: '',
  },
  border: {
    type: Boolean,
    default: false,
  },
} as const)

export const radioGroupProps = buildProps({
  modelValue: {
    type: [String, Number, Boolean],
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
} as const)

export type RadioProps = ExtractPropTypes<typeof radioProps>
export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>
export type RadioInstance = InstanceType<typeof Radio>
export type RadioGroupInstance = InstanceType<typeof RadioGroup>
