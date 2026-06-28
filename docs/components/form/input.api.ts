/**
 * Input Component API Definition
 *
 * @component Input
 * @description Enter text content via input
 * @category Form Components
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
export const inputAttributes: ApiAttribute[] = [
  {
    name: 'modelValue / v-model',
    description: 'Binding value',
    type: 'string | number',
    default: "''",
  },
  {
    name: 'type',
    description: 'Type of input component',
    type: 'text | textarea',
    default: "'text'",
  },
  {
    name: 'placeholder',
    description: 'Placeholder of Input',
    type: 'string',
    default: '—',
  },
  {
    name: 'disabled',
    description: 'Whether Input is disabled',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'readonly',
    description: 'Whether Input is readonly',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'clearable',
    description: 'Whether to show clear button',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'showPassword',
    description: 'Whether to show password toggle',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'showWordLimit',
    description: 'Whether to show word count',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'size',
    description: 'Size of Input',
    type: 'large | default | small',
    default: "'default'",
  },
  {
    name: 'prefixIcon',
    description: 'Prefix icon class or component',
    type: 'string | Component',
  },
  {
    name: 'suffixIcon',
    description: 'Suffix icon class or component',
    type: 'string | Component',
  },
  {
    name: 'rows',
    description: 'Number of rows (textarea only)',
    type: 'number',
    default: '2',
  },
  {
    name: 'autosize',
    description: 'Whether textarea has adaptive height',
    type: 'boolean | object',
    default: 'false',
  },
  {
    name: 'autocomplete',
    description: 'Same as native autocomplete attribute',
    type: 'string',
    default: "'off'",
  },
  {
    name: 'name',
    description: 'Same as native name attribute',
    type: 'string',
  },
  {
    name: 'maxlength',
    description: 'Maximum input length',
    type: 'number',
  },
  {
    name: 'minlength',
    description: 'Minimum input length',
    type: 'number',
  },
  {
    name: 'max',
    description: 'Same as native max attribute',
    type: 'number | string',
  },
  {
    name: 'min',
    description: 'Same as native min attribute',
    type: 'number | string',
  },
  {
    name: 'step',
    description: 'Same as native step attribute',
    type: 'number | string',
  },
  {
    name: 'resize',
    description: 'Resizable for textarea',
    type: 'none | both | horizontal | vertical',
  },
  {
    name: 'autofocus',
    description: 'Same as native autofocus attribute',
    type: 'boolean',
    default: 'false',
  },
  {
    name: 'form',
    description: 'Same as native form attribute',
    type: 'string',
  },
  {
    name: 'label',
    description: 'Label text',
    type: 'string',
  },
  {
    name: 'tabindex',
    description: 'Tabindex of input element',
    type: 'string | number',
  },
  {
    name: 'validateEvent',
    description: 'Whether to trigger form validation',
    type: 'boolean',
    default: 'true',
  },
]

// ========== Events ==========
export const inputEvents: ApiEvent[] = [
  {
    name: 'blur',
    description: 'Triggered when Input loses focus',
    parameters: '(event: FocusEvent)',
  },
  {
    name: 'focus',
    description: 'Triggered when Input gains focus',
    parameters: '(event: FocusEvent)',
  },
  {
    name: 'change',
    description: 'Only triggered when input box loses focus or user presses Enter',
    parameters: '(value: string | number)',
  },
  {
    name: 'input',
    description: 'Triggered when Input value changes (v-model event)',
    parameters: '(value: string | number)',
  },
  {
    name: 'clear',
    description: 'Triggered when clear icon is clicked',
    parameters: '—',
  },
  {
    name: 'keydown',
    description: 'Triggered when keyboard key is pressed',
    parameters: '(event: KeyboardEvent)',
  },
  {
    name: 'keyup',
    description: 'Triggered when keyboard key is released',
    parameters: '(event: KeyboardEvent)',
  },
  {
    name: 'compositionstart',
    description: 'Triggered when IME composition starts',
    parameters: '(event: CompositionEvent)',
  },
  {
    name: 'compositionupdate',
    description: 'Triggered during IME composition',
    parameters: '(event: CompositionEvent)',
  },
  {
    name: 'compositionend',
    description: 'Triggered when IME composition ends',
    parameters: '(event: CompositionEvent)',
  },
]

// ========== Slots ==========
export const inputSlots: ApiSlot[] = [
  {
    name: 'prefix',
    description: 'Content before input (e.g., icon, label)',
  },
  {
    name: 'suffix',
    description: 'Content after input (e.g., icon, button)',
  },
  {
    name: 'prepend',
    description: 'Prepend content before input element',
  },
  {
    name: 'append',
    description: 'Append content after input element',
  },
  {
    name: 'prefixIcon',
    description: 'Custom prefix icon content',
  },
  {
    name: 'suffixIcon',
    description: 'Custom suffix icon content',
  },
]

// ========== Methods ==========
export const inputExposes: ApiExpose[] = [
  {
    name: 'ref',
    description: 'Input element reference (HTMLInputElement or HTMLTextAreaElement)',
    type: 'HTMLInputElement | HTMLTextAreaElement',
  },
]
