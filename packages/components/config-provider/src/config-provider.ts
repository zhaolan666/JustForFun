import { defineComponent, renderSlot, watch } from 'vue'
import { buildProps, definePropType } from '@justforfun-ui/utils'
import { provideGlobalConfig, useSizeProp } from '@justforfun-ui//hooks'

import type { ExtractPropTypes } from 'vue'
import type { ButtonConfigContext } from '@justforfun-ui//components/button'
import type { MessageConfigContext } from '@justforfun-ui//components/message'

export const messageConfig: MessageConfigContext = {}

export const configProviderProps = buildProps({
  a11y: {
    type: Boolean,
    default: true,
  },
  size: useSizeProp,
  button: {
    type: definePropType<ButtonConfigContext>(Object),
  },
  keyboardNavigation: {
    type: Boolean,
    default: true,
  },
  message: {
    type: definePropType<MessageConfigContext>(Object),
  },
  zIndex: Number,
  
  namespace: {
    type: String,
    default: 'el',
  },
} as const)
export type ConfigProviderProps = ExtractPropTypes<typeof configProviderProps>

const ConfigProvider = defineComponent({
  name: 'ElConfigProvider',
  props: configProviderProps,

  setup(props, { slots }) {
    watch(
      () => props.message,
      (val) => {
        Object.assign(messageConfig, val ?? {})
      },
      { immediate: true, deep: true }
    )
    const config = provideGlobalConfig(props)
    return () => renderSlot(slots, 'default', { config: config?.value })
  },
})
export type ConfigProviderInstance = InstanceType<typeof ConfigProvider>

export default ConfigProvider
