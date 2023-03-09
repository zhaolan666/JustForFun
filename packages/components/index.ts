import type { App } from 'vue'
import * as components from './components'
import { version } from './package.json'
import Message from './message'


const install = (app: App) => {
  Object.entries(components).forEach(([key, value]) => {
    app.component(key, value)
    app.config.globalProperties.$message = Message
  })
}


export * from './components'
export default {
  install,
  version
}



















