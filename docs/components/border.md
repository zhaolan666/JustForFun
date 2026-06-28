# Border

Provides border decoration component.

## Basic Usage

::: demo border/basic :::

## Border Type

::: demo border/type :::

## Border Color

::: demo border/color :::

## Border Direction

::: demo border/direction :::

## API

<ComponentDoc
  component-name="Border"
  description="Border decoration component"
  :attributes="borderAttributes"
/>

<script setup>
const borderAttributes = [
  {
    name: 'type',
    description: 'Border style type',
    type: "'solid' | 'dashed' | 'dotted' | 'double'",
    default: "'solid'"
  },
  {
    name: 'color',
    description: 'Border color',
    type: 'string',
    default: "''"
  },
  {
    name: 'direction',
    description: 'Border direction',
    type: "'all' | 'top' | 'bottom' | 'left' | 'right' | 'horizontal' | 'vertical'",
    default: "'all'"
  }
]
</script>
