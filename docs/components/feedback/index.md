# Feedback 反馈

用于向用户提供操作反馈和提示信息。

## Message 消息提示

<demo-block>
<template #demo>
<div class="message-demo">
  <jff-button type="primary" @click="showMessage('success')">成功消息</jff-button>
  <jff-button type="warning" @click="showMessage('warning')">警告消息</jff-button>
  <jff-button type="danger" @click="showMessage('error')">错误消息</jff-button>
  <jff-button type="info" @click="showMessage('info')">信息消息</jff-button>
</div>
</template>
<template #code>
```vue
<div>
  <jff-button type="primary" @click="showMessage('success')">成功消息</jff-button>
  <jff-button type="warning" @click="showMessage('warning')">警告消息</jff-button>
  <jff-button type="danger" @click="showMessage('error')">错误消息</jff-button>
  <jff-button type="info" @click="showMessage('info')">信息消息</jff-button>
</div>

<script setup>
import { JffMessage } from '@justforfun-ui/components'

const showMessage = (type) => {
  JffMessage[type](`这是一条${type}消息`)
}
</script>
```
</template>
</demo-block>

## Message API

| 方法 | 说明 | 参数 |
|------|------|------|
| JffMessage.success | 显示成功消息 | message, options |
| JffMessage.warning | 显示警告消息 | message, options |
| JffMessage.error | 显示错误消息 | message, options |
| JffMessage.info | 显示信息消息 | message, options |
| JffMessage.closeAll | 关闭所有消息 | - |

## Message Options

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| duration | number | 3000 | 显示时长（毫秒） |
| showClose | boolean | false | 是否显示关闭按钮 |
| center | boolean | false | 是否居中显示 |

## Loading 加载（敬请期待）

<demo-block>
<template #demo>
<div class="loading-coming">
  <jff-border>
    <div style="padding: 20px; text-align: center;">
      <jff-icon name="loading" size="48" color="#909399" />
      <p style="margin-top: 10px; color: #909399;">Loading 组件开发中...</p>
    </div>
  </jff-border>
</div>
</template>
<template #code>
```vue
<!-- Loading 组件即将推出，敬请期待 -->
```
</template>
</demo-block>

## Dialog 对话框（敬请期待）

<demo-block>
<template #demo>
<div class="dialog-coming">
  <jff-border>
    <div style="padding: 20px; text-align: center;">
      <jff-icon name="dialog" size="48" color="#909399" />
      <p style="margin-top: 10px; color: #909399;">Dialog 组件开发中...</p>
    </div>
  </jff-border>
</div>
</template>
<template #code>
```vue
<!-- Dialog 组件即将推出，敬请期待 -->
```
</template>
</demo-block>

## Alert 警告（敬请期待）

<demo-block>
<template #demo>
<div class="alert-coming">
  <jff-border>
    <div style="padding: 20px; text-align: center;">
      <jff-icon name="alert" size="48" color="#909399" />
      <p style="margin-top: 10px; color: #909399;">Alert 组件开发中...</p>
    </div>
  </jff-border>
</div>
</template>
<template #code>
```vue
<!-- Alert 组件即将推出，敬请期待 -->
```
</template>
</demo-block>

<style scoped>
.message-demo {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}
</style>
