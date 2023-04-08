// vitepress-theme-demoblock是vitepress的一个主题插件，可以去github查看
// 组件注册就和我们平时开发vue项目一样
import DefaultTheme from 'vitepress/theme'

import { JffButton } from '@justforfun-ui/components'
// @ts-ignore
import Layout from './Layout.vue'

import '@justforfun-ui/theme-chalk/src'

// enhanceApp方法传很多方法进来，感兴趣的可以去官网查看，比如app、router等，这里我们需要使用app实例来注册我们的组件
export default {
  ...DefaultTheme,
  Layout,
  NotFound: () => 'custom 404',
  enhanceApp({ app }) {
    app.use(JffButton)
    app.component("Layout", Layout);
  }
}












