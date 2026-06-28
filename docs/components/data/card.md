# Card

Card component for information grouping and display.

## Basic Usage

::: demo card/basic :::

## Enhanced Examples

::: demo card/enhanced :::

## API

<ComponentDoc
  component-name="Card"
  description="Card component for information grouping and display"
  :attributes="cardAttributes"
  :slots="cardSlots"
/>

<script setup>
const cardAttributes = [
  {
    name: 'header',
    description: 'Card title',
    type: 'string',
    default: "''"
  },
  {
    name: 'shadow',
    description: 'Display shadow',
    type: "'always' | 'hover' | 'never'",
    default: "'always'"
  }
]

const cardSlots = [
  {
    name: 'default',
    description: 'Card content'
  },
  {
    name: 'header',
    description: 'Card header content'
  }
]
</script>
