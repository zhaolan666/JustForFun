import { buildProps } from '@justforfun-ui/utils'
import type { ExtractPropTypes } from 'vue'
import type Switch from './switch.vue'

export const switchProps = buildProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  width: {
    type: Number,
    default: 40,
  },
  activeText: {
    type: String,
    default: '',
  },
  inactiveText: {
    type: String,
    default: '',
  },
  activeColor: {
    type: String,
    default: '',
  },
  inactiveColor: {
    type: String,
    default: '',
  },
  activeValue: {
    type: [String, Number, Boolean],
    default: true,
  },
  inactiveValue: {
    type: [String, Number, Boolean],
    default: false,
  },
} as const)

export type SwitchProps = ExtractPropTypes<typeof switchProps>
export type SwitchInstance = InstanceType<typeof Switch>
