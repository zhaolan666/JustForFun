# Feedback

Used to provide operation feedback and notification messages to users.

## Message

:::demo Click the button to see the message notification effect

<MessageDemo />

```vue
<template>
  <div class="message-demo">
    <JffButton type="primary" @click="showMessage('success')">Success Message</JffButton>
    <JffButton type="warning" @click="showMessage('warning')">Warning Message</JffButton>
    <JffButton type="danger" @click="showMessage('error')">Error Message</JffButton>
    <JffButton type="info" @click="showMessage('info')">Info Message</JffButton>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const JffMessage = inject('JffMessage')

const showMessage = (type) => {
  JffMessage[type](`This is a ${type} message`)
}
</script>
```

:::

## Message API

| Method | Description | Parameters |
|------|------|------|
| JffMessage.success | Show success message | message, options |
| JffMessage.warning | Show warning message | message, options |
| JffMessage.error | Show error message | message, options |
| JffMessage.info | Show info message | message, options |
| JffMessage.closeAll | Close all messages | - |

## Message Options

| Attribute | Type | Default | Description |
|------|------|--------|------|
| duration | number | 3000 | Display duration (milliseconds) |
| showClose | boolean | false | Whether to show close button |
| center | boolean | false | Whether to center display |

## Loading (Coming Soon)

:::demo

<div style="padding: 20px; text-align: center; color: #909399;">
  <span class="i-ri-loader-4-line text-4xl animate-spin" />
  <p style="margin-top: 10px;">Loading component in development...</p>
</div>

```vue
<template>
  <div class="loading-coming">
    <div style="padding: 20px; text-align: center; color: #909399;">
      <span class="i-ri-loader-4-line text-4xl animate-spin" />
      <p style="margin-top: 10px;">Loading component in development...</p>
    </div>
  </div>
</template>
```

:::

## Dialog

See [Dialog component](/components/feedback/dialog).

## Alert

See [Alert component](/components/feedback/alert).
