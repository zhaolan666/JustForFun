# Alert

Used to display important notification messages on the page.

## Basic Usage

::: demo alert/basic :::

## Enhanced Examples

::: demo alert/enhanced :::

## API

<ComponentDoc
  component-name="Alert"
  description="用于页面中显示重要的通知消息"
  :basic-usage="basicUsage"
  :examples="codeExamples"
  :attributes="alertAttributes"
  :events="alertEvents"
  :slots="alertSlots"
/>

<script setup>
const basicUsage = {
  title: 'Basic Usage',
  description: '基础提示用法',
  code: `<template><div class="flex flex-col gap-4"><JffAlert type="success" title="成功" description="这是一条成功消息" /><JffAlert type="warning" title="警告" description="这是一条警告消息" /><JffAlert type="danger" title="错误" description="这是一条错误消息" /><JffAlert type="info" title="信息" description="这是一条信息消息" /></div></template>`,
  language: 'vue'
}

const codeExamples = []

const alertAttributes = [
  {
    name: 'type',
    description: 'Component type',
    type: "'success' | 'warning' | 'danger' | 'info'",
    default: "'info'"
  },
  {
    name: 'title',
    description: 'Title text',
    type: 'string',
    default: "''"
  },
  {
    name: 'description',
    description: 'Descriptive text',
    type: 'string',
    default: "''"
  }
]

const alertEvents = [
  {
    name: 'close',
    description: 'Callback when Alert is closed',
    parameters: '-'
  }
]

const alertSlots = [
  {
    name: 'default',
    description: 'Description content'
  },
  {
    name: 'title',
    description: 'Title content'
  }
]
</script>
