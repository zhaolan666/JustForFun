import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)



import '@justforfun-ui/theme-chalk/src/index.scss'
import { JffButton } from '@justforfun-ui/componets'
app.use(JffButton)


app.mount('#app')
