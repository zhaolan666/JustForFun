import { buildProps, definePropType } from '@justforfun-ui/utils'
import type { ExtractPropTypes } from 'vue'
import type Container from './container.vue'
import type Row from './row.vue'
import type Col from './col.vue'

export const containerProps = buildProps({
  tag: {
    type: String,
    default: 'div',
  },
  direction: {
    type: String,
    values: ['ltr', 'rtl'],
    default: 'ltr',
  },
} as const)

export const rowProps = buildProps({
  tag: {
    type: String,
    default: 'div',
  },
  gutter: {
    type: Number,
    default: 0,
  },
  justify: {
    type: String,
    values: ['start', 'end', 'center', 'space-around', 'space-between'],
    default: 'start',
  },
  align: {
    type: String,
    values: ['top', 'middle', 'bottom'],
    default: 'top',
  },
} as const)

export const colProps = buildProps({
  tag: {
    type: String,
    default: 'div',
  },
  span: {
    type: Number,
    default: 24,
  },
  offset: {
    type: Number,
    default: 0,
  },
  push: {
    type: Number,
    default: 0,
  },
  pull: {
    type: Number,
    default: 0,
  },
} as const)

export type ContainerProps = ExtractPropTypes<typeof containerProps>
export type RowProps = ExtractPropTypes<typeof rowProps>
export type ColProps = ExtractPropTypes<typeof colProps>
export type ContainerInstance = InstanceType<typeof Container>
export type RowInstance = InstanceType<typeof Row>
export type ColInstance = InstanceType<typeof Col>
