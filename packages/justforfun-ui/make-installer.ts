import { provideGlobalConfig } from '@justforfun-ui/components/config-provider'
import { INSTALLED_KEY } from '@justforfun-ui/constants'
import { version } from 'vue'

import type { App, Plugin } from '@vue/runtime-core'
import type { ConfigProviderContext } from '@justforfun-ui/components/config-provider'

export const makeInstaller = (component: Plugin[] = []) => {
  const install = (app: App, options?: ConfigProviderContext) => {
    if (app[INSTALLED_KEY]) return

    app[INSTALLED_KEY] = true

    component.forEach((c) => app.use(c))

    if (options) provideGlobalConfig(options, app, true)
  }

  return {
    version,
    install
  }
}

