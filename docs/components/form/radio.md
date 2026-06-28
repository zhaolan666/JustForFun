# Radio

Set of radio controls for selecting one option from a set.

## Basic Usage

::: demo radio/basic :::

## Enhanced Examples

::: demo radio/enhanced :::

## API

<ComponentDoc
  component-name="Radio"
  description="Set of radio controls for selecting one option from a set"
  :attributes="radioAttributes"
  :events="radioEvents"
  :slots="radioSlots"
/>

<script setup>
const radioAttributes = [
  {
    name: 'model-value / v-model',
    description: 'Binding value',
    type: 'string / number / boolean',
    default: "''"
  },
  {
    name: 'label',
    description: 'Value of Radio when used inside RadioGroup',
    type: 'string / number / boolean',
    default: "''"
  },
  {
    name: 'disabled',
    description: 'Whether Radio is disabled',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'border',
    description: 'Whether Radio shows with border',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'size',
    description: 'Size of Radio, only works when border is true',
    type: "'large' | 'default' | 'small'",
    value: "'default'"
  },
  {
    name: 'name',
    description: 'Native \'name\' attribute',
    type: 'string',
    default: "''"
  }
]

const radioEvents = [
  {
    name: 'change',
    description: 'Triggers when the binding value changes',
    parameters: '(value: string | number | boolean)'
  },
  {
    name: 'input',
    description: 'Triggers when the input value changes (deprecated, use change instead)',
    parameters: '(value: string | number | boolean)'
  }
]

const radioSlots = [
  {
    name: 'default',
    description: 'Custom content'
  }
]
</script>
