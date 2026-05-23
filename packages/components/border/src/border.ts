import { buildProps, definePropType } from '@justforfun-ui/utils'
import type { ExtractPropTypes } from 'vue'
import type Border from './border.vue'

export const borderProps = buildProps({
  tag: {
    type: String,
    default: 'div',
  },
  type: {
    type: String,
    values: ['solid', 'dashed', 'dotted', 'double'],
    default: 'solid',
  },
  color: {
    type: String,
    default: '#d9d9d9',
  },
  width: {
    type: [Number, String],
    default: 1,
  },
  radius: {
    type: [Number, String],
    default: 0,
  },
  direction: {
    type: String,
    values: ['all', 'top', 'right', 'bottom', 'left', 'horizontal', 'vertical'],
    default: 'all',
  },
} as const)

export type BorderProps = ExtractPropTypes<typeof borderProps>
export type BorderInstance = InstanceType<typeof Border>
