import { buildProps } from '@justforfun-ui/utils'
import type { ExtractPropTypes } from 'vue'
import type Dialog from './dialog.vue'

export const dialogProps = buildProps({
  visible: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '',
  },
  width: {
    type: [String, Number],
    default: '50%',
  },
  top: {
    type: String,
    default: '15vh',
  },
  modal: {
    type: Boolean,
    default: true,
  },
  closeOnClickModal: {
    type: Boolean,
    default: true,
  },
  closeOnPressEscape: {
    type: Boolean,
    default: true,
  },
  showClose: {
    type: Boolean,
    default: true,
  },
} as const)

export type DialogProps = ExtractPropTypes<typeof dialogProps>
export type DialogInstance = InstanceType<typeof Dialog>
