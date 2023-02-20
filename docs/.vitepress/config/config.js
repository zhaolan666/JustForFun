import {createRequire} from 'module'
import {defineConfig} from 'vitepress'

const require = createRequire(import.meta.url)
const pck = require('@justforfun-ui/package.json')


export default defineConfig({
  lang:'en-US',
  title: 'JustForFun-UI',
  description: 'JustForFun-UI is a simple, quick and easy to use Vue3 combined UI framework',
  lastUpdated: true, // 记录更新最后一次的事件
  cleanUrls: true, // 美化url 将.html的后缀去除

  head: [['meta',{ name: 'theme-color', content: '#5f4b8b'}]], // 通用元信息

  markdown: {  // 更灵活的 markdown 渲染
    headers: {
      level: [0,0]
    }
  },
  themeConfig: {
    nav: nav(),

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Example', link: '/example' },
          { text: 'Foo', link: '/foo' },
        ]
      }
    ]
  }
})



function nav() {
  return [
    {
      text: 'Guide',
      link: '/guide/what-is-justforfun-ui',
      activeMath: '/guide/'  // 此API 匹配时只能是字符串，并不是真正意义上的Regx
    },
    {
      text: 'Configs',
      link: '/config/introduction',
      activeMath: '/config/'
    },
    {
      text: package.version,
      items: [
        { text: 'Item A', link: '/item/button'},
        { text: 'Item B', link: '/item/tab'},
        { text: 'Item C', link: '/item/date'},
      ]
    }
  ]
}
