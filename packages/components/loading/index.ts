import { Loading } from './src/service'
import { vLoading } from './src/directive'

import type { App } from 'vue'

// installer and everything in all
export const JffLoading = {
  install(app: App) {
    app.directive('loading', vLoading)
    app.config.globalProperties.$loading = Loading
  },
  directive: vLoading,
  service: Loading,
}

export default JffLoading
export { vLoading, vLoading as JffLoadingDirective, Loading as JffLoadingService }

export * from './src/types'
