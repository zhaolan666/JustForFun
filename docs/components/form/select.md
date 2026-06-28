# Select

Select component for selecting one option from a set.

## Basic Usage

::: demo select/basic :::

## Enhanced Examples

::: demo select/enhanced :::

## API

<ComponentDoc
  component-name="Select"
  description="Select component for selecting one option from a set"
  :attributes="selectAttributes"
  :events="selectEvents"
  :slots="selectSlots"
/>

<script setup>
const selectAttributes = [
  {
    name: 'model-value / v-model',
    description: 'Binding value',
    type: 'string / number / boolean / object / array',
    default: "''"
  },
  {
    name: 'multiple',
    description: 'Whether multiple-select is enabled',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'disabled',
    description: 'Whether Select is disabled',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'value-key',
    description: 'Unique identity key name for value, required when value is an object',
    type: 'string',
    default: "'value'"
  },
  {
    name: 'size',
    description: 'Size of Input',
    type: "'large' | 'default' | 'small'",
    value: "'default'"
  },
  {
    name: 'clearable',
    description: 'Whether single select can be cleared',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'collapse-tags',
    description: 'Whether to collapse tags to a text when selecting multiple',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'collapse-tags-tooltip',
    description: 'When collapse-tags enabled, use tooltip to display the remaining selected values when hover over the collapsed text',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'multiple-limit',
    description: 'Limitation of maximum options user can select when multiple is true. No limitation when set to 0',
    type: 'number',
    default: '0'
  },
  {
    name: 'name',
    description: 'Name attribute for native input element',
    type: 'string',
    default: "''"
  },
  {
    name: 'effect',
    description: 'Tooltip theme, built-in theme: dark/light',
    type: 'string',
    default: "'light'"
  },
  {
    name: 'autocomplete',
    description: 'Same as autocomplete attribute for native input',
    type: 'string',
    default: "'off'"
  },
  {
    name: 'placeholder',
    description: 'Placeholder text',
    type: 'string',
    default: "'Please select'"
  },
  {
    name: 'filterable',
    description: 'Whether Select is filterable',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'allow-create',
    description: 'Whether creating new items is allowed. To use this, filterable must be true',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'filter-method',
    description: 'Custom filtering method',
    type: 'function',
    default: '—'
  },
  {
    name: 'remote',
    description: 'Whether data is fetched from server',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'remote-method',
    description: 'Custom remote search method',
    type: 'function',
    default: '—'
  },
  {
    name: 'loading',
    description: 'Whether Select is loading data from server',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'loading-text',
    description: 'Displayed text when loading data from server',
    type: 'string',
    default: "'Loading...'"
  },
  {
    name: 'no-match-text',
    description: 'Displayed text when no data matches the filtering query',
    type: 'string',
    default: "'No matching data'"
  },
  {
    name: 'no-data-text',
    description: 'Displayed text when no data',
    type: 'string',
    default: "'No data'"
  },
  {
    name: 'popper-class',
    description: 'Custom class name for Select dropdown',
    type: 'string',
    default: "''"
  },
  {
    name: 'reserve-keyword',
    description: 'Whether to reserve keyword after selecting an option when filterable is true',
    type: 'boolean',
    default: 'true'
  },
  {
    name: 'default-first-option',
    description: 'Input the first matching option on enter key when using filterable and remote-search',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'popper-append-to-body',
    description: 'Whether to append popper menu to body. If the positioning of the popup is wrong, try setting this prop to false',
    type: 'boolean',
    default: 'true (under SSR is false)'
  },
  {
    name: 'automatic-dropdown',
    description: 'For non-filterable Select, this prop decides if the option menu pops up when the input is focused or the arrow icon is clicked',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'clear-icon',
    description: 'Custom clear icon component',
    type: 'string / Component',
    default: "'CircleClose'"
  },
  {
    name: 'fit-input-width',
    description: 'Whether the width of the dropdown is the same as the input',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'tag-type',
    description: 'Tag type when in multiple mode, fails if tag is not assigned',
    type: 'string',
    default: "'info'"
  },
  {
    name: 'validate-event',
    description: 'Whether to trigger form validation after selecting a value',
    type: 'boolean',
    default: 'true'
  },
  {
    name: 'persistent',
    description: 'When select dropdown exists and it does not hide after clicking elsewhere',
    type: 'boolean',
    default: 'true'
  }
]

const selectEvents = [
  {
    name: 'change',
    description: 'Triggers when the selected value changes',
    parameters: '(val: string | number | boolean | object)'
  },
  {
    name: 'visible-change',
    description: 'Triggers when the dropdown appears/disappears',
    parameters: '(val: boolean)'
  },
  {
    name: 'remove-tag',
    description: 'Triggers when a tag is removed in multiple mode',
    parameters: '(val: string | number | boolean | object)'
  },
  {
    name: 'clear',
    description: 'Triggers when the clear icon is clicked',
    parameters: '—'
  },
  {
    name: 'blur',
    description: 'Triggers when Input blurs',
    parameters: '(event: FocusEvent)'
  },
  {
    name: 'focus',
    description: 'Triggers when Input focuses',
    parameters: '(event: FocusEvent)'
  }
]

const selectSlots = [
  {
    name: 'default',
    description: 'Options content of Select'
  },
  {
    name: 'prefix',
    description: 'Prefix content of Input'
  },
  {
    name: 'empty',
    description: 'Content when there is no options'
  }
]
</script>
