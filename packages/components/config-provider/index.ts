import { withInstall } from '@justforfun-ui/utils'

import ConfigProvider from './src/config-provider'

export const JffConfigProvider = withInstall(ConfigProvider)
export default JffConfigProvider

export * from './src/config-provider'
export * from './src/config-provider-props'
export * from './src/constants'
export * from './src/hooks/use-global-config'
