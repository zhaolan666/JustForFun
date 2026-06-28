# Tag

Tag component for categorizing and markup.

## Basic Usage

::: demo tag/basic :::

## Enhanced Examples

::: demo tag/enhanced :::

## API

<ComponentDoc
  component-name="Tag"
  description="Tag component for categorizing and markup"
  :attributes="tagAttributes"
  :events="tagEvents"
  :slots="tagSlots"
/>

<script setup>
const tagAttributes = [
  {
    name: 'type',
    description: 'Tag type',
    type: "'success' | 'warning' | 'danger' | 'info' | 'primary'",
    default: "'primary'"
  },
  {
    name: 'closable',
    description: 'Whether Tag can be removed',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'disable-transitions',
    description: 'Whether to disable animations',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'hit',
    description: 'Whether Tag has a highlighted border',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'color',
    description: 'Background color of the Tag',
    type: 'string',
    default: "''"
  },
  {
    name: 'size',
    description: 'Size of Tag',
    type: "'large' | 'default' | 'small'",
    value: "'default'"
  },
  {
    name: 'effect',
    description: 'Theme of Tag',
    type: "'dark' | 'light' | 'plain'",
    default: "'light'"
  },
  {
    name: 'round',
    description: 'Whether border is round',
    type: 'boolean',
    default: 'false'
  }
]

const tagEvents = [
  {
    name: 'close',
    description: 'Triggers when Tag is closed',
    parameters: '(event: MouseEvent)'
  },
  {
    name: 'click',
    description: 'Triggers when Tag is clicked',
    parameters: '(event: MouseEvent)'
  }
]

const tagSlots = [
  {
    name: 'default',
    description: 'Custom default content'
  }
]
</script>
