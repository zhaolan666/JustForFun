import type { ConfigProviderProps } from '@justforfun-ui/components/config-provider'
import type { InjectionKey, Ref } from 'vue'

export type ConfigProviderContext = Partial<ConfigProviderProps>

export const configProviderContextKey: InjectionKey<
  Ref<ConfigProviderContext>
> = Symbol()
