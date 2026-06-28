/**
 * Dropdown Component API Definition
 *
 * @component Dropdown
 * @description Dropdown menu for displaying lists of options and commands
 * @category Navigation Components
 * @since 1.0.0
 */

// ========== Type Definitions ==========
export interface ApiAttribute {
  name: string
  description: string
  type: string
  default?: string
  required?: boolean
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

// ========== Attributes ==========
export const dropdownAttributes: ApiAttribute[] = [
  {
    name: 'type',
    description: 'Menu button type, same as Button component (only works when split-button is true)',
    type: 'string',
    default: '-',
  },
  {
    name: 'size',
    description: 'Menu size, also works on split-button',
    type: 'large | default | small',
    default: 'default',
  },
  {
    name: 'split-button',
    description: 'Whether to display a group of buttons',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'placement',
    description: 'Placement of dropdown menu',
    type: 'top | top-start | top-end | bottom | bottom-start | bottom-end',
    default: 'bottom-end',
  },
  {
    name: 'trigger',
    description: 'How to trigger dropdown',
    type: 'hover | click | contextmenu | manual',
    default: 'hover',
  },
  {
    name: 'hide-on-click',
    description: 'Whether to hide dropdown after clicking menu-item',
    type: 'boolean',
    default: 'true',
  },
  {
    name: 'show-timeout',
    description: 'Delay in ms before showing dropdown (only works when trigger is hover)',
    type: 'number',
    default: '250',
  },
  {
    name: 'hide-timeout',
    description: 'Delay in ms before hiding dropdown (only works when trigger is hover)',
    type: 'number',
    default: '150',
  },
  {
    name: 'tabindex',
    description: 'Tabindex of Dropdown',
    type: 'number',
    default: '0',
  },
  {
    name: 'disabled',
    description: 'Whether the dropdown is disabled',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'value / v-model',
    description: 'Command to be triggered when active (only works when split-button is true)',
    type: 'string | number | object',
  },
  {
    name: 'teleported',
    description: 'Whether dropdown is teleported to body, only works when append-to-body is false',
    type: 'boolean',
    default: 'true',
  },
  {
    name: 'popper-options',
    description: 'Parameters for popper.js, see popper.js docs',
    type: 'object',
    default: '{}',
  },
  {
    name: 'popper-class',
    description: 'Custom class name for dropdown popup',
    type: 'string',
  },
  {
    name: 'max-height',
    description: 'Max height of dropdown menu (px)',
    type: 'string | number',
  default: '-',
  },
]

// ========== Events ==========
export const dropdownEvents: ApiEvent[] = [
  {
    name: 'click',
    description: 'Triggered if split-button is true and button part is clicked',
    parameters: '(event: MouseEvent)',
  },
  {
    name: 'command',
    description: 'Triggered when a dropdown item is clicked',
    parameters: '(command: any)',
  },
  {
    name: 'visible-change',
    description: 'Triggered when dropdown appears/disappears',
    parameters: '(visible: boolean)',
  },
]

// ========== Slots ==========
export const dropdownSlots: ApiSlot[] = [
  {
    name: 'default',
    description: 'Content of Dropdown. Must be DropdownItem or DropdownMenu component',
  },
  {
    name: 'dropdown',
    description: 'Content of the Dropdown Menu, usually a <ul> with <li> elements',
  },
]

// ========== DropdownItem Attributes ==========
export const dropdownItemAttributes: ApiAttribute[] = [
  {
    name: 'command',
    description: 'Instruction to be dispatched to dropdown\'s command event',
    type: 'string | number | object',
  },
  {
    name: 'disabled',
    description: 'Whether the item is disabled',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'divided',
    description: 'Whether a divider is displayed below the item',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'icon',
    description: 'Icon class name',
    type: 'string',
  },
]
