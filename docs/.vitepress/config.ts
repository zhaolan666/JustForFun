import {
  createRequire
} from 'module'
import {
  defineConfig
} from 'vitepress'

const require = createRequire(
  import.meta.url)
const pkg = require('vitepress/package.json')

export default defineConfig({
  lang: 'en-US',
  title: 'JustForFun',
  base: '/JustForFun/',
  description: 'JustForFun is a simple UI framework',

  lastUpdated: true,
  cleanUrls: true,

  head: [
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
    }
  },

  themeConfig: {
    logo: '/jffLogo.png',
    siteTitle: 'JustForFun',
    outline: 3,

    nav: nav(),

    // sidebar以对象的形式配置的话每个sidebar都是独立的 如果以数组的形式配置那么侧边栏是公共的 进入其他子页面都可以看到
    sidebar: {
      '/guide': sidebarGuide(),
      '/components': sidebarComponents()
    },

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

function nav() {
  return [{
    text: 'Guide',
    link: '/guide/',
    activeMatch: '/guide/'
  },
  {
    text: 'Components',
    link: '/components/basic1',
    activeMatch: '/components/'
  },
  {
    text: pkg.version,
    items: [{
      text: '中文文档',
      link: 'https://github.com/zhaolan666/JustForFun/blob/dev/README.zh-CN.md'
    },
    {
      text: '英文文档',
      link: 'https://github.com/zhaolan666/JustForFun/blob/dev/README.md'
    }
    ]
  }
  ]
}

function sidebarComponents() {
  return [{
    text: 'Basic',
    collapsed: false,
    items: [{
      text: 'Button',
      link: '/components/button',
    },
    {
      text: 'Border',
      link: '/components/border'
    },
    {
      text: 'Color',
      link: '/components/color'
    },
    {
      text: 'Icon',
      link: '/components/icon'
    },
    {
      text: 'Layout',
      link: '/components/layout'
    }
    ]
  },
  {
    text: 'Configuration',
    collapsed: false,
    items: [{
      text: 'Config Provider',
      link: '/components/markdown/'
    }]
  },
  {
    text: 'From',
    collapsed: false,
    items: [{
      text: 'Checkbox',
      link: '/components/theme-introduction/'
    },
    {
      text: 'Color Picker',
      link: '/components/theme-nav/'
    },
    {
      text: 'Date Picker',
      link: '/components/theme-sidebar/'
    },
    {
      text: 'Date Time Picker',
      link: '/components/theme-prev-next-link/'
    },
    {
      text: 'From',
      link: '/components/theme-edit-link/'
    },
    {
      text: 'Input',
      link: '/components/theme-last-updated/'
    },
    {
      text: 'Rido',
      link: '/components/theme-layout/'
    },
    {
      text: 'Select',
      link: '/components/theme-home-page/'
    },
    {
      text: 'Switch',
      link: '/components/theme-team-page/'
    },
    {
      text: 'Upload',
      link: '/components/theme-badge'
    },
    ]
  },
  {
    text: 'Data',
    collapsed: false,
    items: [{
      text: 'Avatar',
      link: '/components/migration-from-vuepress'
    },
    {
      text: 'Card',
      link: '/components/migration-from-vuepress'
    },
    {
      text: 'Image',
      link: '/components/migration-from-vitepress-0'
    },
    {
      text: 'Tag',
      link: '/components/migration-from-vitepress-0'
    }
    ]
  },
  {
    text: 'Navigation',
    collapsed: false,
    items: [{
      text: 'Dropdown',
      link: '/components/migration-from-vuepress'
    },
    {
      text: 'Menu',
      link: '/components/migration-from-vuepress'
    },
    {
      text: 'Steps',
      link: '/components/migration-from-vitepress-0'
    },
    {
      text: 'Tabs',
      link: '/components/migration-from-vitepress-0'
    }
    ]
  },
  {
    text: 'Feedback',
    collapsed: false,
    items: [{
      text: 'Alert',
      link: '/components/migration-from-vuepress'
    },
    {
      text: 'Dialog',
      link: '/components/migration-from-vuepress'
    },
    {
      text: 'Loading',
      link: '/components/migration-from-vitepress-0'
    },
    {
      text: 'Message',
      link: '/components/migration-from-vitepress-0'
    }
    ]
  },
  {
    text: 'Others',
    collapsed: false,
    items: [{
      text: 'Diver',
      link: '/components/migration-from-vuepress'
    }]
  }
  ]
}


function sidebarGuide() {
  return [{
    text: 'Guide',
    items: [{
      text: 'Introduction',
      link: '/guide/'
    },
    {
      text: 'Quick Start',
      link: '/guide/quickstart'
    }]
  }]
}
