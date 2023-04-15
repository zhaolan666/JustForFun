// vitepress-theme-demoblock是vitepress的一个主题插件，可以去github查看
// 组件注册就和我们平时开发vue项目一样

// import { JffButton } from '@justforfun-ui/components'



// import VPApp, { NotFound, globals } from '../vitepress'
// import { define } from '../utils/types'
// import "uno.css"
// import './style.css'
// import type { Theme } from 'vitepress'

// // enhanceApp方法传很多方法进来，感兴趣的可以去官网查看，比如app、router等，这里我们需要使用app实例来注册我们的组件
// export default define<Theme>({
//   NotFound,
//   Layout: Layout,
//   enhanceApp: ({ app }) => {
//     app.use(JffButton)

//     globals.forEach(([name, Comp]) => {
//       app.component(name, Comp)
//     })
//   }
// })

import { JffButton } from "@justforfun-ui/components";
import '@justforfun-ui/theme-chalk/src'

export default ({
  Vue, options, router
}) => {
  Vue.use(JffButton)
}













