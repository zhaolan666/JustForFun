# Checkbox

Set of checkable controls for selecting options.

## Basic Usage

::: demo checkbox/basic :::

## Enhanced Examples

::: demo checkbox/enhanced :::

## API

<ComponentDoc
  component-name="Checkbox"
  description="Set of checkable controls for selecting options"
  :attributes="checkboxAttributes"
  :events="checkboxEvents"
  :slots="checkboxSlots"
/>

<script setup>
const checkboxAttributes = [
  {
    name: 'model-value / v-model',
    description: 'Binding value when used inside CheckboxGroup',
    type: 'string / number / boolean / array',
    default: "''"
  },
  {
    name: 'label',
    description: 'Value of the checkbox when used inside a CheckboxGroup',
    type: 'string / number / boolean',
    default: "''"
  },
  {
    name: 'true-label',
    description: 'Value if the checkbox is checked (only works when model is string or number)',
    type: 'string / number',
    default: "''"
  },
  {
    name: 'false-label',
    description: 'Value if the checkbox is unchecked (only works when model is string or number)',
    type: 'string / number',
    default: "''"
  },
  {
    name: 'disabled',
    description: 'Whether the checkbox is disabled',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'border',
    description: 'Whether Checkbox shows with border',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'size',
    description: 'Size of the Checkbox, only works when border is true',
    type: "'large' | 'default' | 'small'",
    value: "'default'"
  },
  {
    name: 'name',
    description: 'Native \'name\' attribute',
    type: 'string',
    default: "''"
  },
  {
    name: 'checked',
    description: 'If the checkbox is checked (non-controlled mode)',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'indeterminate',
    description: 'Same as indeterminate attribute in native checkbox, which determines whether the checkbox is displayed in indeterminate state, which overrides the value of checked property in visual display',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'validate-event',
    description: 'Whether to trigger form validation after value change',
    type: 'boolean',
    default: 'true'
  },
  {
    name: 'id',
    description: 'Same as \'id\' in native input',
    type: 'string',
    default: "''"
  }
]

const checkboxEvents = [
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

const checkboxSlots = [
  {
    name: 'default',
    description: 'Custom content'
  }
]
</script>
