import { buildProps, definePropType } from '@justforfun-ui/utils'
import { useSizeProp } from '@justforfun-ui/hooks'

import type { ExtractPropTypes } from 'vue'
import type { Language } from '@justforfun-ui/locale'
import type { ButtonConfigContext } from '@justforfun-ui/components/button'
import type { MessageConfigContext } from '@justforfun-ui/components/message'


export type ExperimentalFeatures = {
  // TO BE Defined
}

export const configProviderProps = buildProps({
  a11y: {
    type: Boolean,
    default: true,
  },
  locale: {
    type: definePropType<Language>(Object),
  },
  size: useSizeProp,
  button: {
    type: definePropType<ButtonConfigContext>(Object),
  },
  experimentalFeatures: {
    type: definePropType<ExperimentalFeatures>(Object),
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
    default: 'jff',
  },
} as const)
export type ConfigProviderProps = ExtractPropTypes<typeof configProviderProps>
