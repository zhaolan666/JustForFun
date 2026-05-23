import { buildProps } from '@justforfun-ui/utils'
import type { ExtractPropTypes } from 'vue'
import type Tabs from './tabs.vue'
import type TabPane from './tab-pane.vue'

export const tabsProps = buildProps({
  modelValue: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'card',
    validator: (val: string) => ['card', 'border-card'].includes(val),
  },
  closable: {
    type: Boolean,
    default: false,
  },
} as const)

export const tabPaneProps = buildProps({
  label: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  closable: {
    type: Boolean,
    default: false,
  },
} as const)

export type TabsProps = ExtractPropTypes<typeof tabsProps>
export type TabPaneProps = ExtractPropTypes<typeof tabPaneProps>
export type TabsInstance = InstanceType<typeof Tabs>
export type TabPaneInstance = InstanceType<typeof TabPane>
