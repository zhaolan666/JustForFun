// Button 组件 API 数据
// 根据 packages/components/button/src/button.ts 中的定义生成

export const buttonPropsApi = [
  {
    name: 'size',
    description: 'Button size',
    type: 'large | default | small',
    default: 'default',
  },
  {
    name: 'type',
    description: 'Button type',
    type: 'primary | success | warning | danger | info | text',
    default: 'default',
  },
  {
    name: 'nativeType',
    description: 'Native type attribute',
    type: 'button | submit | reset',
    default: 'button',
  },
  {
    name: 'icon',
    description: 'Icon component or icon name',
    type: 'string | Component',
    default: '—',
  },
  {
    name: 'loading',
    description: 'Whether loading state',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'loadingIcon',
    description: 'Loading icon component',
    type: 'Component',
    default: 'Loading',
  },
  {
    name: 'disabled',
    description: 'Whether disabled state',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'autofocus',
    description: 'Whether auto focus',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'round',
    description: 'Whether round corner button',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'plain',
    description: 'Whether plain button',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'text',
    description: 'Whether text button',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'link',
    description: 'Whether link button',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'bg',
    description: 'Whether show background color',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'circle',
    description: 'Whether circle button',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'color',
    description: 'Custom button color',
    type: 'string',
    default: '—',
  },
  {
    name: 'dark',
    description: 'Whether use in dark mode',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'autoInsertSpace',
    description: 'Whether auto insert space between two Chinese characters',
    type: 'boolean',
    default: 'undefined',
  },
  {
    name: 'tag',
    description: 'Custom element tag',
    type: 'string | Component',
    default: 'button',
  },
]

export const buttonEmitsApi = [
  {
    name: 'click',
    description: 'Trigger when button clicked',
    type: '(e: MouseEvent) => void',
  },
]

export const buttonSlotsApi = [
  {
    name: 'default',
    description: 'Button content',
    type: '—',
  },
  {
    name: 'icon',
    description: 'Custom icon',
    type: '—',
  },
  {
    name: 'loading',
    description: 'Custom loading icon',
    type: '—',
  },
]

export const buttonExposeApi = [
  {
    name: 'ref',
    description: 'Button element reference',
    type: 'HTMLButtonElement',
  },
  {
    name: 'size',
    description: 'Button size',
    type: 'string',
  },
  {
    name: 'type',
    description: 'Button type',
    type: 'string',
  },
  {
    name: 'disabled',
    description: 'Whether disabled',
    type: 'boolean',
  },
  {
    name: 'shouldAddSpace',
    description: 'Whether should add space',
    type: 'boolean',
  },
]
