import {
  createRequire
} from 'module'
import {
  defineConfig
} from 'vitepress'
const require = createRequire(
  import.meta.url)
export const pkg = require('vitepress/package.json')
// const base = process.env.BASE || '/'

import nav from './configs/nav'
import sidebar from './configs/sidebar'

export default defineConfig({
  lang: 'en-US',
  title: 'JustForFun',
  // base: base,
  base: '/JustForFun/',
  description: 'JustForFun is a simple UI framework',

  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no' }],
    ['meta', { name: 'theme-color', content: '#845EC2' }],
    ['link', {
      rel: 'icon',
      href: 'jffLogo.png',
      type: 'image/png+xml'
    }]
  ],

  markdown: {
    headers: {
      level: [0, 0]
    },
    config: (md) => {
      // 添加DemoBlock插槽
      const { demoBlockPlugin } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin, {
        customClass: 'demoblock-custom'
      })
    }
  },
  locales: {
    roots: {
      label: 'English',
      lang: 'en'
    },
    zh: {
      label: '中文',
      lang: 'zh', // optional, will be added  as `lang` attribute on `html` tag
      link: '/zh/guide'
    }
  },

  themeConfig: {
    logo: '/jffLogo.png',
    siteTitle: 'JustForFun',
    outline: 3,

    nav: nav(),

    // sidebar以对象的形式配置的话每个sidebar都是独立的 如果以数组的形式配置那么侧边栏是公共的 进入其他子页面都可以看到
    sidebar: sidebar(),

    editLink: {
      pattern: 'https://github.com/zhaolan666/JustForFun/issues',
      text: 'Edit this page on GitHub'
    },

    socialLinks: [{
      icon: 'github',
      link: 'https://github.com/zhaolan666/JustForFun/tree/dev'
    }],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present  mingdu'
    },
    algolia: {
      appId: '8J64VVRP8K',
      apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
      indexName: 'vitepress'
    },

    carbonAds: {
      code: 'CEBDT27Y',
      placement: 'vuejsorg'
    }
  }
})

