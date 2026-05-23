import { buildProps } from '@justforfun-ui/utils'
import type { ExtractPropTypes } from 'vue'
import type Tag from './tag.vue'

export const tagProps = buildProps({
  type: {
    type: String,
    default: 'info',
    validator: (val: string) => ['primary', 'success', 'warning', 'danger', 'info'].includes(val),
  },
  closable: {
    type: Boolean,
    default: false,
  },
  disableTransitions: {
    type: Boolean,
    default: false,
  },
  hit: {
    type: Boolean,
    default: false,
  },
} as const)

export type TagProps = ExtractPropTypes<typeof tagProps>
export type TagInstance = InstanceType<typeof Tag>
