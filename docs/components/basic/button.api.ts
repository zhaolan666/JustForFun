/**
 * Button Component API Definition
 *
 * @component Button
 * @description Commonly used operation buttons
 * @category Basic Components
 * @since 1.0.0
 */

// ========== Type Definitions ==========
export interface ApiAttribute {
  name: string
  description: string
  type: string
  default?: string
  required?: boolean
  version?: string
}

export interface ApiEvent {
  name: string
  description: string
  parameters: string
}

export interface ApiSlot {
  name: string
  description: string
}

export interface ApiExpose {
  name: string
  description: string
  type: string
}

// ========== Attributes ==========
export const buttonAttributes: ApiAttribute[] = [
  {
    name: 'size',
    description: 'Button size',
    type: 'large | default | small',
    default: 'default',
  },
  {
    name: 'type',
    description: 'Button type',
    type: 'primary | success | warning | danger | info | default',
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
    description: 'Whether text button (no background/border)',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'link',
    description: 'Whether link button (no background, looks like link)',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'bg',
    description: 'Whether show background color for text button',
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
    description: 'Custom button color (overrides type)',
    type: 'string',
  },
  {
    name: 'dark',
    description: 'Whether use dark mode variant',
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
    description: 'Custom element tag to render as',
    type: 'string | Component',
    default: 'button',
  },
]

// ========== Events ==========
export const buttonEvents: ApiEvent[] = [
  {
    name: 'click',
    description: 'Triggered when button is clicked',
    parameters: '(e: MouseEvent) => void',
  },
]

// ========== Slots ==========
export const buttonSlots: ApiSlot[] = [
  {
    name: 'default',
    description: 'Button content (text or other elements)',
  },
  {
    name: 'icon',
    description: 'Custom icon content (overrides icon prop)',
  },
  {
    name: 'loading',
    description: 'Custom loading indicator content',
  },
]

// ========== Exposes ==========
export const buttonExposes: ApiExpose[] = [
  {
    name: 'ref',
    description: 'Button element reference (HTMLButtonElement)',
    type: 'HTMLButtonElement',
  },
  {
    name: 'size',
    description: 'Current size prop value',
    type: 'string',
  },
  {
    name: 'type',
    description: 'Current type prop value',
    type: 'string',
  },
  {
    name: 'disabled',
    description: 'Current disabled state',
    type: 'boolean',
  },
  {
    name: 'shouldAddSpace',
    description: 'Internal: Whether should add space between CJK characters',
    type: 'boolean',
  },
]
