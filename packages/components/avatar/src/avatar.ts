import { buildProps } from '@justforfun-ui/utils'
import type { ExtractPropTypes } from 'vue'
import type Avatar from './avatar.vue'

export const avatarProps = buildProps({
  icon: {
    type: String,
    default: '',
  },
  src: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: '',
  },
  size: {
    type: [String, Number],
    default: 'default',
    validator: (val: string | number) => {
      const sizes = ['large', 'default', 'small']
      if (typeof val === 'string') {
        return sizes.includes(val)
      }
      return typeof val === 'number'
    },
  },
  shape: {
    type: String,
    default: 'circle',
    validator: (val: string) => ['circle', 'square'].includes(val),
  },
} as const)

export type AvatarProps = ExtractPropTypes<typeof avatarProps>
export type AvatarInstance = InstanceType<typeof Avatar>
