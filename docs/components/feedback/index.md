# Dialog

Dialog component for displaying important information or requiring user interaction.

## Basic Usage

::: demo dialog/basic :::

## API

<ComponentDoc
  component-name="Dialog"
  description="对话框组件，用于显示重要信息或需要用户交互的场景"
  :basic-usage="basicUsage"
  :examples="codeExamples"
  :attributes="dialogAttributes"
  :events="dialogEvents"
  :slots="dialogSlots"
/>

<script setup>
const basicUsage = {
  title: 'Basic Usage',
  description: '基础对话框用法',
  code: '<template><JffButton @click="visible = true">打开</JffButton><JffDialog v-model="visible" title="提示">内容</JffDialog></template>',
  language: 'vue'
}

const codeExamples = []

const dialogAttributes = [
  {
    name: 'v-model',
    description: 'Whether Dialog is visible',
    type: 'boolean',
    default: 'false'
  },
  {
    name: 'title',
    description: 'Title of Dialog',
    type: 'string',
    default: "''"
  },
  {
    name: 'width',
    description: 'Width of Dialog',
    type: 'string',
    default: "'50%'"
  }
]

const dialogEvents = [
  {
    name: 'open',
    description: 'Callback when Dialog opens',
    parameters: '-'
  },
  {
    name: 'close',
    description: 'Callback when Dialog closes',
    parameters: '-'
  }
]

const dialogSlots = [
  {
    name: 'default',
    description: 'Content of Dialog'
  },
  {
    name: 'header',
    description: 'Header content of Dialog'
  }
]
</script>
