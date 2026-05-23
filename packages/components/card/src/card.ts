import { buildProps } from '@justforfun-ui/utils'
import type { ExtractPropTypes } from 'vue'
import type Card from './card.vue'

export const cardProps = buildProps({
  header: {
    type: String,
    default: '',
  },
  bodyStyle: {
    type: Object,
    default: () => ({}),
  },
  shadow: {
    type: String,
    default: 'default',
    validator: (val: string) => ['always', 'hover', 'never', 'default'].includes(val),
  },
  bordered: {
    type: Boolean,
    default: true,
  },
} as const)

export type CardProps = ExtractPropTypes<typeof cardProps>
export type CardInstance = InstanceType<typeof Card>
