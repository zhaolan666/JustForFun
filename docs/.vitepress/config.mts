import { defineConfig } from 'vitepress'
import { mdPlugin } from './config/plugins'

export default defineConfig({
  lang: 'en-US',
  title: 'JustForFun',
  base: '/',
  description: 'JustForFun UI Component Library Documentation',

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
        },
      },
    },
  },

  lastUpdated: true,
  cleanUrls: true,

  theme: './theme/index.ts',

  head: [
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
      },
    ],
    ['meta', { name: 'theme-color', content: '#845EC2' }],
    [
      'link',
      {
        rel: 'icon',
        href: 'jffLogo.png',
        type: 'image/png+xml',
      },
    ],
  ],

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
    config: (md) => {
      mdPlugin(md)
    },
  },

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      link: '/',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/guide/introduction' },
          { text: 'Components', link: '/components/basic/button' },
          { text: 'GitHub', link: 'https://github.com/zhaolan666/JustForFun' },
        ],
        sidebar: {
          '/guide/': [
            {
              text: 'Guide',
              items: [
                { text: 'Introduction', link: '/guide/introduction' },
                { text: 'Installation', link: '/guide/install' },
                { text: 'Quick Start', link: '/guide/quickstart' },
                { text: 'On-demand Import', link: '/guide/import' },
              ],
            },
          ],
          '/components/': [
            {
              text: 'Basic Components',
              items: [
                { text: 'Button', link: '/components/basic/button' },
                { text: 'Border', link: '/components/border' },
                { text: 'Color', link: '/components/color' },
                { text: 'Icon', link: '/components/icon' },
                { text: 'Layout', link: '/components/layout' },
              ],
            },
            {
              text: 'Form Components',
              items: [
                { text: 'Form', link: '/components/form/' },
                { text: 'Checkbox', link: '/components/form/checkbox' },
                { text: 'Radio', link: '/components/form/radio' },
                { text: 'Select', link: '/components/form/select' },
                { text: 'Switch', link: '/components/form/switch' },
              ],
            },
            {
              text: 'Data Display',
              items: [
                { text: 'Badge', link: '/components/data/' },
                { text: 'Avatar', link: '/components/data/avatar' },
                { text: 'Card', link: '/components/data/card' },
                { text: 'Tag', link: '/components/data/tag' },
              ],
            },
            {
              text: 'Navigation',
              items: [
                { text: 'Tabs', link: '/components/nav/' },
                { text: 'Dropdown', link: '/components/nav/dropdown' },
              ],
            },
            {
              text: 'Feedback Components',
              items: [
                { text: 'Message', link: '/components/feedback/' },
                { text: 'Dialog', link: '/components/feedback/dialog' },
                { text: 'Alert', link: '/components/feedback/alert' },
              ],
            },
          ],
        },
        editLink: {
          pattern: 'https://github.com/zhaolan666/JustForFun/issues',
          text: 'Edit this page on GitHub',
        },
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2023-present mingdu',
        },
      },
    },
    'zh-CN': {
      label: '中文',
      lang: 'zh-CN',
      link: '/zh-CN/',
      themeConfig: {
        nav: [
          { text: '指南', link: '/zh-CN/guide/introduction' },
          { text: '组件', link: '/zh-CN/components/basic/button' },
          { text: 'GitHub', link: 'https://github.com/zhaolan666/JustForFun' },
        ],
        sidebar: {
          '/zh-CN/guide/': [
            {
              text: '指南',
              items: [
                { text: '介绍', link: '/zh-CN/guide/introduction' },
                { text: '安装', link: '/zh-CN/guide/install' },
                { text: '快速开始', link: '/zh-CN/guide/quickstart' },
                { text: '按需导入', link: '/zh-CN/guide/import' },
              ],
            },
          ],
          '/zh-CN/components/': [
            {
              text: '基础组件',
              items: [
                { text: 'Button 按钮', link: '/zh-CN/components/basic/button' },
                { text: 'Border 边框', link: '/zh-CN/components/border' },
                { text: 'Color 色彩', link: '/zh-CN/components/color' },
                { text: 'Icon 图标', link: '/zh-CN/components/icon' },
                { text: 'Layout 布局', link: '/zh-CN/components/layout' },
              ],
            },
            {
              text: '表单组件',
              items: [
                { text: 'Form 表单', link: '/zh-CN/components/form/' },
                { text: 'Checkbox 复选框', link: '/zh-CN/components/form/checkbox' },
                { text: 'Radio 单选框', link: '/zh-CN/components/form/radio' },
                { text: 'Select 选择器', link: '/zh-CN/components/form/select' },
                { text: 'Switch 开关', link: '/zh-CN/components/form/switch' },
              ],
            },
            {
              text: '数据展示',
              items: [
                { text: 'Badge 徽章', link: '/zh-CN/components/data/' },
                { text: 'Avatar 头像', link: '/zh-CN/components/data/avatar' },
                { text: 'Card 卡片', link: '/zh-CN/components/data/card' },
                { text: 'Tag 标签', link: '/zh-CN/components/data/tag' },
              ],
            },
            {
              text: '导航组件',
              items: [
                { text: 'Tabs 标签页', link: '/zh-CN/components/nav/' },
                { text: 'Dropdown 下拉菜单', link: '/zh-CN/components/nav/dropdown' },
              ],
            },
            {
              text: '反馈组件',
              items: [
                { text: 'Message 消息提示', link: '/zh-CN/components/feedback/' },
                { text: 'Dialog 对话框', link: '/zh-CN/components/feedback/dialog' },
                { text: 'Alert 警告', link: '/zh-CN/components/feedback/alert' },
              ],
            },
          ],
        },
        editLink: {
          pattern: 'https://github.com/zhaolan666/JustForFun/issues',
          text: '在 GitHub 上编辑此页面',
        },
        footer: {
          message: '基于 MIT 许可证发布。',
          copyright: '版权所有 © 2023-present mingdu',
        },
      },
    },
  },

  themeConfig: {
    logo: '/jffLogo.png',
    siteTitle: 'JustForFun',
    outline: 3,

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/zhaolan666/JustForFun/tree/dev',
      },
    ],
  },
})
