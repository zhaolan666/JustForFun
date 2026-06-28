/**
 * Select Component API Definition
 * 
 * This file contains all API documentation for the Select component.
 * It's separated from the markdown file for better maintainability.
 * 
 * @description Data-driven approach for component documentation
 * @author JustForFun Team
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
  subProps?: string  // Optional: describe slot props
}

export interface ApiMethod {
  name: string
  description: string
  parameters: string
}

// ========== Attributes ==========
export const selectAttributes: ApiAttribute[] = [
  {
    name: 'model-value / v-model',
    description: 'Binding value of selected option',
    type: 'string | number | boolean | object | Array',
    required: false,
  },
  {
    name: 'multiple',
    description: 'Whether to support multiple selection',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'disabled',
    description: 'Whether to be disabled',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'value-key',
    description: 'Property name used as unique identifier for value (required when binding value is an object)',
    type: 'string',
    default: 'value',
  },
  {
    name: 'size',
    description: 'Input box size',
    type: 'large | default | small',
    default: 'default',
  },
  {
    name: 'clearable',
    description: 'Whether to be clearable',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'placeholder',
    description: 'Placeholder text',
    type: 'string',
    default: 'Please select',
  },
  {
    name: 'filterable',
    description: 'Whether to be searchable',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'allow-create',
    description: 'Whether to allow user to create new entries (must be used with filterable)',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'remote',
    description: 'Whether to use remote search',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'loading',
    description: 'Whether data is being loaded remotely',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'loading-text',
    description: 'Text to display during remote loading',
    type: 'string',
    default: 'Loading',
  },
  {
    name: 'no-match-text',
    description: 'Text to display when search has no matches',
    type: 'string',
    default: 'No matching data',
  },
  {
    name: 'no-data-text',
    description: 'Text to display when there are no options',
    type: 'string',
    default: 'No data',
  },
  {
    name: 'popper-class',
    description: 'Class name for the dropdown',
    type: 'string',
    default: '-',
  },
  {
    name: 'reserve-keyword',
    description: 'Whether to keep the current search keyword after selecting an option (multiple + filterable mode only)',
    type: 'boolean',
    default: 'true',
  },
  {
    name: 'default-first-option',
    description: 'Whether to select the first matching option when pressing Enter',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'automatic-dropdown',
    description: 'Whether to automatically show dropdown when input gets focus (non-filterable only)',
    type: 'boolean',
    default: 'false',
  },
]

// ========== Events ==========
export const selectEvents: ApiEvent[] = [
  {
    name: 'change',
    description: 'Triggered when the selected value changes',
    parameters: '(value: string | number | object)',
  },
  {
    name: 'visible-change',
    description: 'Triggered when dropdown shows/hides',
    parameters: '(visible: boolean)',
  },
  {
    name: 'remove-tag',
    description: 'Triggered when tag is removed in multiple selection mode',
    parameters: '(tagValue: any)',
  },
  {
    name: 'clear',
    description: 'Triggered when user clicks the clear button',
    parameters: '-',
  },
  {
    name: 'blur',
    description: 'Triggered when input loses focus',
    parameters: '(event: FocusEvent)',
  },
  {
    name: 'focus',
    description: 'Triggered when input gains focus',
    parameters: '(event: FocusEvent)',
  },
]

// ========== Slots ==========
export const selectSlots: ApiSlot[] = [
  {
    name: 'default',
    description: 'Option component list',
    subProps: 'JffOption components',
  },
  {
    name: 'prefix',
    description: 'Select component header content',
  },
  {
    name: 'empty',
    description: 'Content when there are no options',
  },
  {
    name: 'loading',
    description: 'Content during remote loading',
  },
]

// ========== Option Attributes (Sub-component) ==========
export const optionAttributes: ApiAttribute[] = [
  {
    name: 'value',
    description: 'Option value',
    type: 'string | number | boolean | object',
    required: true,
  },
  {
    name: 'label',
    description: 'Option label (defaults to value if not set)',
    type: 'string | number',
  },
  {
    name: 'disabled',
    description: 'Whether to disable this option',
    type: 'boolean',
    default: 'false',
  },
]
