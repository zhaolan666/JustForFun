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
    nav: nav(),

    // sidebar以对象的形式配置的话每个sidebar都是独立的 如果以数组的形式配置那么侧边栏是公共的 进入其他子页面都可以看到
    sidebar: {
      '/guide/': sidebarGuide(),
      '/config/': sidebarConfig()
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
    link: '/guide/example/',
    activeMatch: '/guide/'
  },
  {
    text: 'Configs',
    link: '/config/cofig/',
    activeMatch: '/config/'
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

function sidebarGuide() {
  return [{
    text: 'Basic',
    collapsed: false,
    items: [{
      text: 'Button',
      link: '/guide/example/',
    },
    {
      text: 'Border',
      link: '/guide/getting-started/'
    },
    {
      text: 'Color',
      link: '/guide/configuration/'
    },
    {
      text: 'Icon',
      link: '/guide/deploying/'
    },
    {
      text: 'Layout',
      link: '/guide/i18n/'
    }
    ]
  },
  {
    text: 'Configuration',
    collapsed: false,
    items: [{
      text: 'Config Provider',
      link: '/guide/markdown/'
    }]
  },
  {
    text: 'From',
    collapsed: false,
    items: [{
      text: 'Checkbox',
      link: '/guide/theme-introduction/'
    },
    {
      text: 'Color Picker',
      link: '/guide/theme-nav/'
    },
    {
      text: 'Date Picker',
      link: '/guide/theme-sidebar/'
    },
    {
      text: 'Date Time Picker',
      link: '/guide/theme-prev-next-link/'
    },
    {
      text: 'From',
      link: '/guide/theme-edit-link/'
    },
    {
      text: 'Input',
      link: '/guide/theme-last-updated/'
    },
    {
      text: 'Rido',
      link: '/guide/theme-layout/'
    },
    {
      text: 'Select',
      link: '/guide/theme-home-page/'
    },
    {
      text: 'Switch',
      link: '/guide/theme-team-page/'
    },
    {
      text: 'Upload',
      link: '/guide/theme-badge/'
    },
    ]
  },
  {
    text: 'Data',
    collapsed: false,
    items: [{
      text: 'Avatar',
      link: '/guide/migration-from-vuepress'
    },
    {
      text: 'Card',
      link: '/guide/migration-from-vuepress'
    },
    {
      text: 'Image',
      link: '/guide/migration-from-vitepress-0'
    },
    {
      text: 'Tag',
      link: '/guide/migration-from-vitepress-0'
    }
    ]
  },
  {
    text: 'Navigation',
    collapsed: false,
    items: [{
      text: 'Dropdown',
      link: '/guide/migration-from-vuepress'
    },
    {
      text: 'Menu',
      link: '/guide/migration-from-vuepress'
    },
    {
      text: 'Steps',
      link: '/guide/migration-from-vitepress-0'
    },
    {
      text: 'Tabs',
      link: '/guide/migration-from-vitepress-0'
    }
    ]
  },
  {
    text: 'Feedback',
    collapsed: false,
    items: [{
      text: 'Alert',
      link: '/guide/migration-from-vuepress'
    },
    {
      text: 'Dialog',
      link: '/guide/migration-from-vuepress'
    },
    {
      text: 'Loading',
      link: '/guide/migration-from-vitepress-0'
    },
    {
      text: 'Message',
      link: '/guide/migration-from-vitepress-0'
    }
    ]
  },
  {
    text: 'Others',
    collapsed: false,
    items: [{
      text: 'Diver',
      link: '/guide/migration-from-vuepress'
    }]
  }
  ]
}


function sidebarConfig() {
  return [{
    text: 'Config',
    items: [{
      text: 'Introduction',
      link: '/config/introduction'
    },
    {
      text: 'App Configs',
      link: '/config/app-configs'
    },
    {
      text: 'Theme Configs',
      link: '/config/theme-configs'
    },
    {
      text: 'Frontmatter Configs',
      link: '/config/frontmatter-configs'
    }
    ]
  }]
}
