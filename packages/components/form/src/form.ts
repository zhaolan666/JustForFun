import { componentSizes } from '@justforfun-ui/constants'
import {
  buildProps,
  definePropType,
  isArray,
  isBoolean,
  isString,
} from '@justforfun-ui/utils'

import type { ExtractPropTypes } from 'vue'
import type { FormItemProp } from './form-item'
import type { FormRules } from './types'

const formMetaProps = buildProps({
  size: {
    type: String,
    values: componentSizes,
  },
  disabled: Boolean,
} as const)

export const formProps = buildProps({
  ...formMetaProps,
  model: Object,
  rules: {
    type: definePropType<FormRules>(Object),
  },
  labelPosition: {
    type: String,
    values: ['left', 'right', 'top'],
    default: 'right',
  },
  requireAsteriskPosition: {
    type: String,
    values: ['left', 'right'],
    default: 'left',
  },
  labelWidth: {
    type: [String, Number],
    default: '',
  },
  labelSuffix: {
    type: String,
    default: '',
  },
  inline: Boolean,
  inlineMessage: Boolean,
  statusIcon: Boolean,
  showMessage: {
    type: Boolean,
    default: true,
  },
  validateOnRuleChange: {
    type: Boolean,
    default: true,
  },
  hideRequiredAsterisk: {
    type: Boolean,
    default: false,
  },
  scrollToError: Boolean,
  scrollIntoViewOptions: {
    type: [Object, Boolean],
  },
} as const)
export type FormProps = ExtractPropTypes<typeof formProps>
export type FormMetaProps = ExtractPropTypes<typeof formMetaProps>

export const formEmits = {
  validate: (prop: FormItemProp, isValid: boolean, message: string) =>
    (isArray(prop) || isString(prop)) &&
    isBoolean(isValid) &&
    isString(message),
}
export type FormEmits = typeof formEmits
