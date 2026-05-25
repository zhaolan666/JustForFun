<template>
  <div class="flex gap-4 flex-wrap">
    <JffButton type="primary" @click="showMessage('success')">Success Message</JffButton>
    <JffButton type="warning" @click="showMessage('warning')">Warning Message</JffButton>
    <JffButton type="danger" @click="showMessage('error')">Error Message</JffButton>
    <JffButton type="info" @click="showMessage('info')">Info Message</JffButton>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import type { Message } from '@justforfun-ui/components/message'

const JffMessage = inject<Message>('JffMessage')

const showMessage = (type: 'success' | 'warning' | 'error' | 'info') => {
  if (JffMessage) {
    const messages = {
      success: 'This is a success message',
      warning: 'This is a warning message',
      error: 'This is an error message',
      info: 'This is an info message'
    }
    JffMessage[type](messages[type])
  }
}
</script>
