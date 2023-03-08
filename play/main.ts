import { createApp } from 'vue'
import JffIcon from '@justforfun-ui/components/icon'
import JffButton, { JffButtonGroup } from '@justforfun-ui/components/button'
import JffInput from '@justforfun-ui/components/input'
import '@justforfun-ui/theme-chalk/src/index.scss'
import App from './src/App.vue'

// console.log('JffButton', JffButton.ButtonGroup);

// 组件库
const components = [JffIcon, JffButton, JffButtonGroup, JffInput]
// 是否已安装标识
const INSTALLED_KEY = Symbol('INSTALLED_KEY')
// 组件库插件
const JffUI = {
  install(app: any) {
    // 如果该组件库已经安装过了，则不进行安装
    if (app[INSTALLED_KEY]) return
    // 将标识值设置为 true，表示已经安装了
    app[INSTALLED_KEY] = true
    // 循环组件库中的每个组件进行安装
    components.forEach((c) => app.use(c))
  },
}

const app = createApp(App)
// 安装组件库
app.use(JffUI)
app.mount('#app')
