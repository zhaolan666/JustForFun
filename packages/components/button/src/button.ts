import { useSizeProp } from '@justforfun-ui/hooks'
import { buildProps, definePropType, iconPropType } from '@justforfun-ui/utils'
import { Loading } from '@element-plus/icons-vue'
import type { ExtractPropTypes, Component } from 'vue'


// 使用 type 来定义按钮的样式
export const buttonTypes = [
  'default',
  'primary',
  'success',
  'warning',
  'info',
  'danger',
  'text',
  '',
] as const
export const buttonNativeTypes = ['button', 'submit', 'reset'] as const



// 定义 props
export const buttonProps = buildProps({
  size: useSizeProp,
  type: {
    type: String,
    values: buttonTypes,
    default: "",
  },
  nativeType: {
    type: String,
    values: buttonNativeTypes,
    default: 'button',
  },
  icon: {
    type: iconPropType
  },
  loading: Boolean,
  loadingIcon: {
    type: iconPropType,
    default: () => Loading,
  },
  disabled: Boolean,
  autofocus: Boolean,
  round: Boolean,
  plain: Boolean,
  text: Boolean,
  link: Boolean,
  bg: Boolean,
  circle: Boolean,
  color: String,
  dark: Boolean,
  autoInsertSpace: {
    type: Boolean,
    default: undefined,
  },
  tag: {
    type: definePropType<string | Component>([String, Object]),
    default: 'button',
  }
} as const)

// 事件
export const buttonEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
export type ButtonEmits = typeof buttonEmits
// Props 类型
export type ButtonProps = ExtractPropTypes<typeof buttonProps>


export type ButtonType = ButtonProps['type']
export type ButtonNativeType = ButtonProps['nativeType']

export interface ButtonConfigContext {
  autoInsertSpace?: boolean
}


