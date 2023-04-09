
import pkg from '../config'
export default function nav() {
  return [{
    text: 'Guide',
    link: '/guide/introduction',
    activeMatch: '^/guide/'
  },
  {
    text: 'Components',
    link: '/components/basic/button',
    activeMatch: '^/components/'
  },
  {
    text: pkg?.version,
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
