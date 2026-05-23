import { buildProps } from '@justforfun-ui/utils'
import type { ExtractPropTypes } from 'vue'
import type Alert from './alert.vue'

export const alertProps = buildProps({
  type: {
    type: String,
    default: 'info',
    validator: (val: string) => ['success', 'warning', 'danger', 'info'].includes(val),
  },
  title: {
    type: String,
    default: '',
  },
  closable: {
    type: Boolean,
    default: true,
  },
  showIcon: {
    type: Boolean,
    default: true,
  },
  effect: {
    type: String,
    default: 'light',
    validator: (val: string) => ['light', 'dark'].includes(val),
  },
} as const)

export type AlertProps = ExtractPropTypes<typeof alertProps>
export type AlertInstance = InstanceType<typeof Alert>
