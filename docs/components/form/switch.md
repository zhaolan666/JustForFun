# Switch

Switch is used for switching between two opposing states.

## Basic Usage

::: demo switch/basic :::

## Enhanced Examples

::: demo switch/enhanced :::

## API

<ComponentDoc
  component-name="Switch"
  description="Switch is used for switching between two opposing states"
  :attributes="switchAttributes"
  :events="switchEvents"
  :slots="switchSlots"
/>

<script setup>
const switchAttributes = [
  {
    name: 'model-value / v-model',
    description: 'Binding value',
    type: 'boolean / string / number',
    default: 'false'
  },
  {
    name: 'disabled',
    description: 'Whether Switch is disabled',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'loading',
    description: 'Whether Switch is in loading state',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'size',
    description: 'Size of Switch',
    type: "'large' | 'default' | 'small'",
    value: "'default'"
  },
  {
    name: 'width',
    description: 'Width of Switch (px)',
    type: 'number',
    default: '—'
  },
  {
    name: 'inline-prompt',
    description: 'Whether to display icon when active/inactive state, or text when text attributes are set',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'active-icon',
    description: 'Icon component when active state is set',
    type: 'string / Component',
    default: "''"
  },
  {
    name: 'inactive-icon',
    description: 'Icon component when inactive state is set',
    type: 'string / Component',
    default: "''"
  },
  {
    name: 'active-text',
    description: 'Text displayed when active state is set',
    type: 'string',
    default: "''"
  },
  {
    name: 'inactive-text',
    description: 'Text displayed when inactive state is set',
    type: 'string',
    default: "''"
  },
  {
    name: 'active-value',
    description: 'Value when switch is on',
    type: 'boolean / string / number',
    default: 'true'
  },
  {
    name: 'inactive-value',
    description: 'Value when switch is off',
    type: 'boolean / string / number',
    default: 'false'
  },
  {
    name: 'active-color',
    description: 'Background color when active state is set',
    type: 'string',
    default: "''"
  },
  {
    name: 'inactive-color',
    description: 'Background color when inactive state is set',
    type: 'string',
    default: "''"
  },
  {
    name: 'border-color',
    description: 'Border color of the switch',
    type: 'string',
    default: "''"
  },
  {
    name: 'id',
    description: 'Same as id in native input',
    type: 'string',
    default: "''"
  },
  {
    name: 'name',
    description: 'Same as name in native input',
    type: 'string',
    default: "''"
  },
  {
    name: 'validate-event',
    description: 'Whether to trigger form validation after value change',
    type: 'boolean',
    default: 'true'
  },
  {
    name: 'before-change',
    description: 'Hook function before switching state. Return false or Promise rejecting to prevent switching',
    type: 'function',
    default: '—'
  },
  {
    name: 'action-icon',
    description: 'Show icon component when action is set. This prop is available since version 2.4.0',
    type: 'string / Component',
    default: "—"
  },
  {
    name: 'action-text',
    description: 'Show text when action is set. This prop is available since version 2.4.0',
    type: 'string',
    default: "—"
  }
]

const switchEvents = [
  {
    name: 'change',
    description: 'Triggers when the binding value changes',
    parameters: '(val: boolean | string | number)'
  },
  {
    name: 'input',
    description: 'Triggers when the input value changes (deprecated, use change instead)',
    parameters: '(value: boolean | string | number)'
  }
]

const switchSlots = [
  {
    name: 'default',
    description: 'Custom content displayed when active/inactive state is set'
  },
  {
    name: 'active-icon',
    description: 'Icon component when active state is set'
  },
  {
    name: 'inactive-icon',
    description: 'Icon component when inactive state is set'
  },
  {
    name: 'active-text',
    description: 'Content when active state is set'
  },
  {
    name: 'inactive-text',
    description: 'Content when inactive state is set'
  },
  {
    name: 'action-icon',
    description: 'Action content when action is set. Available since 2.4.0'
  },
  {
    name: 'action-text',
    description: 'Action text when action is set. Available since 2.4.0'
  }
]
</script>
