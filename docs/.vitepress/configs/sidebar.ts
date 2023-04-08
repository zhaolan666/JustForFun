export default function sidebar() {
  return {
    '/guide': sidebarGuide(),
    '/components': sidebarComponents()
  }
}

function sidebarComponents() {
  return [{
    text: 'Basic',
    search: true,
    collapsed: false,
    items: [{
      text: 'Button',
      link: '/components/basic/button',
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
