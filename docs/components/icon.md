# Icon

Based on the UnoCSS icon system, providing a set of commonly used icons.

## Basic Usage

::: demo icon/basic :::

## Enhanced Examples

::: demo icon/enhanced :::

## API

<ComponentDoc
  component-name="Icon"
  description="基于 UnoCSS 的图标组件"
  :basic-usage="basicUsage"
  :examples="codeExamples"
  :attributes="iconAttributes"
  :slots="iconSlots"
/>

<script setup>
const basicUsage = {
  title: 'Basic Usage',
  description: '基础图标用法',
  code: '<template><span class="i-ri-search" /></template>',
  language: 'vue'
}

const codeExamples = []

const iconAttributes = [
  {
    name: 'class',
    description: 'UnoCSS icon class name',
    type: 'string',
    default: "''"
  }
]

const iconSlots = [
  {
    name: 'default',
    description: 'Custom icon content (SVG)'
  }
]
</script>
