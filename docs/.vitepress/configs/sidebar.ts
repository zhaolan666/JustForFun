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
    text: 'Form',
    collapsed: false,
    items: [{
      text: 'Form',
      link: '/components/form/'
    },
    {
      text: 'Input',
      link: '/components/basic/input'
    },
    {
      text: 'Checkbox',
      link: '/components/form/checkbox'
    },
    {
      text: 'Radio',
      link: '/components/form/radio'
    },
    {
      text: 'Select',
      link: '/components/form/select'
    },
    {
      text: 'Switch',
      link: '/components/form/switch'
    },
    {
      text: 'Date Picker',
      link: '/components/form/date-picker'
    },
    {
      text: 'Color Picker',
      link: '/components/form/color-picker'
    },
    {
      text: 'Upload',
      link: '/components/form/upload'
    },
    ]
  },
  {
    text: 'Data',
    collapsed: false,
    items: [{
      text: 'Badge',
      link: '/components/data/'
    },
    {
      text: 'Avatar',
      link: '/components/data/avatar'
    },
    {
      text: 'Card',
      link: '/components/data/card'
    },
    {
      text: 'Image',
      link: '/components/data/image'
    },
    {
      text: 'Tag',
      link: '/components/data/tag'
    }
    ]
  },
  {
    text: 'Navigation',
    collapsed: false,
    items: [{
      text: 'Tabs',
      link: '/components/nav/'
    },
    {
      text: 'Menu',
      link: '/components/nav/menu'
    },
    {
      text: 'Dropdown',
      link: '/components/nav/dropdown'
    },
    {
      text: 'Steps',
      link: '/components/nav/steps'
    }
    ]
  },
  {
    text: 'Feedback',
    collapsed: false,
    items: [{
      text: 'Message',
      link: '/components/feedback/'
    },
    {
      text: 'Loading',
      link: '/components/feedback/loading'
    },
    {
      text: 'Dialog',
      link: '/components/feedback/dialog'
    },
    {
      text: 'Alert',
      link: '/components/feedback/alert'
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
      link: '/guide/introduction'
    },
    {
      text: 'Install',
      link: '/guide/install'
    },
    {
      text: 'Quick Start',
      link: '/guide/quickstart'
    }]
  }]
}
