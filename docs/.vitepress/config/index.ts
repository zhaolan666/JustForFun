import { defineConfig } from 'vitepress'
import { mdPlugin } from './plugins'
import { MarkdownTransform } from '../plugins/markdown-transform'
import { resolve } from 'path'

const docsRoot = resolve(__dirname, '../..')
const projRoot = resolve(docsRoot, '..')

export default defineConfig({
  lang: 'en-US',
  title: 'JustForFun',
  base: '/',
  description: 'JustForFun UI Component Library Documentation',

  vite: {
    plugins: [MarkdownTransform()],
    resolve: {
      alias: [
        { find: '@jff', replacement: docsRoot },
        { find: '@jff/components', replacement: resolve(docsRoot, 'examples') },
        { find: '@jff/examples', replacement: resolve(docsRoot, 'examples') },
        { find: '@jff/utils', replacement: resolve(docsRoot, 'utils') },

        { find: '@justforfun-ui/components', replacement: resolve(projRoot, 'packages/components') },
        { find: '@justforfun-ui/theme-chalk', replacement: resolve(projRoot, 'packages/theme-chalk') },
        { find: '@justforfun-ui/hooks', replacement: resolve(projRoot, 'packages/hooks') },
        { find: '@justforfun-ui/utils', replacement: resolve(projRoot, 'packages/utils') },
        { find: '@justforfun-ui/constants', replacement: resolve(projRoot, 'packages/constants') },
        { find: '@justforfun-ui/locale', replacement: resolve(projRoot, 'packages/locale') },
        { find: '@justforfun-ui', replacement: resolve(projRoot, 'packages/justforfun-ui') },
      ],
    },
    css: {
      preprocessorOptions: {
        scss: {},
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
        socialLinks: [{ icon: 'github', link: 'https://github.com/zhaolan666/JustForFun' }],
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
                { text: '按需引入', link: '/zh-CN/guide/import' },
              ],
            },
          ],
          '/zh-CN/components/': [
            {
              text: 'Basic Components',
              items: [
                { text: 'Button', link: '/zh-CN/components/basic/button' },
                { text: 'Border', link: '/zh-CN/components/border' },
                { text: 'Color', link: '/zh-CN/components/color' },
                { text: 'Icon', link: '/zh-CN/components/icon' },
                { text: 'Layout', link: '/zh-CN/components/layout' },
              ],
            },
            {
              text: 'Form Components',
              items: [
                { text: 'Form', link: '/zh-CN/components/form/' },
                { text: 'Checkbox', link: '/zh-CN/components/form/checkbox' },
                { text: 'Radio', link: '/zh-CN/components/form/radio' },
                { text: 'Select', link: '/zh-CN/components/form/select' },
                { text: 'Switch', link: '/zh-CN/components/form/switch' },
              ],
            },
            {
              text: 'Data Display',
              items: [
                { text: 'Badge', link: '/zh-CN/components/data/' },
                { text: 'Avatar', link: '/zh-CN/components/data/avatar' },
                { text: 'Card', link: '/zh-CN/components/data/card' },
                { text: 'Tag', link: '/zh-CN/components/data/tag' },
              ],
            },
            {
              text: 'Navigation',
              items: [
                { text: 'Tabs', link: '/zh-CN/components/nav/' },
                { text: 'Dropdown', link: '/zh-CN/components/nav/dropdown' },
              ],
            },
            {
              text: 'Feedback Components',
              items: [
                { text: 'Message', link: '/zh-CN/components/feedback/' },
                { text: 'Dialog', link: '/zh-CN/components/feedback/dialog' },
                { text: 'Alert', link: '/zh-CN/components/feedback/alert' },
              ],
            },
          ],
        },
        socialLinks: [{ icon: 'github', link: 'https://github.com/zhaolan666/JustForFun' }],
        editLink: {
          pattern: 'https://github.com/zhaolan666/JustForFun/issues',
          text: '在 GitHub 上编辑此页',
        },
        footer: {
          message: '基于 MIT 许可发布',
          copyright: '版权所有 © 2023-至今 mingdu',
        },
      },
    },
  },
})
