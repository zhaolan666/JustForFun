# Layout

Layout component for quickly building basic page structure.

## Basic Usage

::: demo layout/basic :::

## Enhanced Examples

::: demo layout/enhanced :::

## API

<ComponentDoc
  component-name="Layout"
  description="布局组件，用于快速构建页面结构"
  :basic-usage="basicUsage"
  :examples="codeExamples"
  :attributes="layoutAttributes"
  :slots="layoutSlots"
/>

<script setup>
import ComponentDoc from '../.vitepress/vitepress/components/ComponentDoc.vue'

const basicUsage = {
  title: 'Basic Usage',
  description: '基础布局用法',
  code: '// Layout example code',
  language: 'javascript'
}

const codeExamples = []

const layoutAttributes = [
  {
    name: 'direction',
    description: 'Layout direction for child elements',
    type: "'horizontal' | 'vertical'",
    default: "'horizontal'",
  },
]

const layoutSlots = [
  {
    name: 'default',
    description: 'Default slot content',
  }
]
</script>

## Container Attributes

| Attribute | Description | Type | Default |
|---------|-------------|------|--------|
| direction | Layout direction for child elements | horizontal / vertical | horizontal |

## Header Attributes

| Attribute | Description | Type | Default |
|---------|-------------|------|--------|
| height | Height of header | string | 60px |

## Aside Attributes

| Attribute | Description | Type | Default |
|---------|-------------|------|--------|
| width | Width of aside | string | 300px |

## Footer Attributes

| Attribute | Description | Type | Default |
|---------|-------------|------|--------|
| height | Height of footer | string | 60px |

## Row Attributes

| Attribute | Description | Type | Default |
|---------|-------------|------|--------|
| gutter | Grid spacing | number / object | 0 |
| justify | Horizontal alignment of flex layout | start / end / center / space-around / space-between / space-evenly | start |
| align | Vertical alignment of flex layout | top / middle / bottom | top |
| tag | Custom element tag | string | div |

## Col Attributes

| Attribute | Description | Type | Default |
|---------|-------------|------|--------|
| span | Number of column the grid spans | number | 24 |
| offset | Number of spacing on the left side of the grid | number | 0 |
| push | Number of columns that grid moves to the right | number | 0 |
| pull | Number of columns that grid moves to the left | number | 0 |
| tag | Custom element tag | string | div |
| xs | Responsive layout for screens <768px | number / object (e.g. { span: 24, offset: 0 }) | — |
| sm | Responsive layout for screens ≥768px | number / object | — |
| md | Responsive layout for screens ≥992px | number / object | — |
| lg | Responsive layout for screens ≥1200px | number / object | — |
| xl | Responsive layout for screens ≥1920px | number / object | — |
