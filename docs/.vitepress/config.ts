import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'JustForFun',
  base: '/',
  description: 'JustForFun UI 组件库文档',

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

  themeConfig: {
    logo: '/jffLogo.png',
    siteTitle: 'JustForFun',
    outline: 3,

    nav: [
      { text: '指南', link: '/guide/introduction' },
      { text: '组件', link: '/components/basic/button' },
      { text: 'GitHub', link: 'https://github.com/zhaolan666/JustForFun' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '介绍', link: '/guide/introduction' },
            { text: '安装', link: '/guide/install' },
            { text: '快速开始', link: '/guide/quickstart' }
          ]
        }
      ],
      '/components/': [
        {
          text: '基础组件',
          items: [
            { text: 'Button', link: '/components/basic/button' },
            { text: 'Border', link: '/components/border' },
            { text: 'Color', link: '/components/color' },
            { text: 'Icon', link: '/components/icon' },
            { text: 'Layout', link: '/components/layout' }
          ]
        },
        {
          text: '表单组件',
          items: [
            { text: 'Form', link: '/components/form/' },
            { text: 'Checkbox', link: '/components/form/checkbox' },
            { text: 'Radio', link: '/components/form/radio' },
            { text: 'Select', link: '/components/form/select' },
            { text: 'Switch', link: '/components/form/switch' }
          ]
        },
        {
          text: '数据展示',
          items: [
            { text: 'Badge', link: '/components/data/' },
            { text: 'Avatar', link: '/components/data/avatar' },
            { text: 'Card', link: '/components/data/card' },
            { text: 'Tag', link: '/components/data/tag' }
          ]
        },
        {
          text: '导航组件',
          items: [
            { text: 'Tabs', link: '/components/nav/' },
            { text: 'Dropdown', link: '/components/nav/dropdown' }
          ]
        },
        {
          text: '反馈组件',
          items: [
            { text: 'Message', link: '/components/feedback/' },
            { text: 'Dialog', link: '/components/feedback/dialog' },
            { text: 'Alert', link: '/components/feedback/alert' }
          ]
        }
      ]
    },

    editLink: {
      pattern: 'https://github.com/zhaolan666/JustForFun/issues',
      text: '在 GitHub 上编辑此页面'
    },

    socialLinks: [{
      icon: 'github',
      link: 'https://github.com/zhaolan666/JustForFun/tree/dev'
    }],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present mingdu'
    }
  }
})
