import { createApp } from 'vue'
import JffIcon from '@justforfun-ui/components/icon'
import JffButton, { JffButtonGroup } from '@justforfun-ui/components/button'
import JffInput from '@justforfun-ui/components/input'
import { JffContainer, JffHeader, JffMain, JffFooter, JffRow, JffCol } from '@justforfun-ui/components/layout'
import JffBorder from '@justforfun-ui/components/border'
import '@justforfun-ui/theme-chalk/src/index.scss'
console.log('Styles loaded')
import App from './src/App.vue'

// console.log('JffButton', JffButton.ButtonGroup);

const app = createApp(App)

// 直接注册组件
app.use(JffIcon)
app.use(JffButton)
app.use(JffButtonGroup)
app.use(JffInput)
app.component('JffContainer', JffContainer)
app.component('JffHeader', JffHeader)
app.component('JffMain', JffMain)
app.component('JffFooter', JffFooter)
app.component('JffRow', JffRow)
app.component('JffCol', JffCol)
app.use(JffBorder)

console.log('Components registered:', app._componentMap)

app.mount('#app')


