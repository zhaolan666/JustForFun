import DefaultTheme from 'vitepress/theme'
import './style/var.css'
import '@justforfun-ui/theme-chalk/src/index.scss'
import JffUI from '@justforfun-ui/components'

export default {
  ...DefaultTheme,
  enhanceApp: async ({app, router, siteData}) => {
    app.use(JffUI)
  }
}
