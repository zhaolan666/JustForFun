<template>
  <div class="alert-demo-enhanced">
    <!-- 基础用法 -->
    <div class="demo-section">
      <h4 class="section-title">Basic Alerts</h4>
      <div class="flex flex-col gap-4">
        <JffAlert type="success" title="Success" description="This is a success message." />
        <JffAlert type="warning" title="Warning" description="This is a warning message." />
        <JffAlert type="danger" title="Error" description="This is an error message." />
        <JffAlert type="info" title="Info" description="This is an info message." />
      </div>
    </div>

    <!-- 可关闭的 Alert -->
    <div class="demo-section">
      <h4 class="section-title">Closable Alerts</h4>
      <div class="flex flex-col gap-4">
        <JffAlert type="success" title="Closable Success" description="Click the close button to dismiss." closable @close="handleClose('success')" />
        <JffAlert type="warning" title="Closable Warning" description="You can close this alert." closable />
      </div>

      <div v-if="closedAlerts.length > 0" class="mt-3 p-3 bg-gray-100 rounded text-sm text-gray-600">
        Closed: {{ closedAlerts.join(', ') }}
      </div>
    </div>

    <!-- 带图标的 Alert -->
    <div class="demo-section">
      <h4 class="section-title">Alerts with Icons</h4>
      <div class="flex flex-col gap-4">
        <JffAlert type="success" title="With Icon" description="Shows icon on the left side." show-icon />
        <JffAlert type="danger" title="Error Icon" description="Error with icon display." show-icon />
      </div>
    </div>

    <!-- 不同主题色 -->
    <div class="demo-section">
      <h4 class="section-title">Theme Variations</h4>
      <div class="grid grid-cols-2 gap-4">
        <JffAlert type="info" :title="'Light Theme'" effect="light" />
        <JffAlert type="warning" :title="'Dark Theme'" effect="dark" />
      </div>
    </div>

    <!-- 自定义内容 -->
    <div class="demo-section">
      <h4 class="section-title">Custom Content</h4>
      <JffAlert type="info" title="Slot Usage">
        <template #default>
          <p>This is custom content using the default slot.</p>
          <button class="mt-2 px-3 py-1 bg-blue-500 text-white rounded text-sm">Action Button</button>
        </template>
      </JffAlert>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import JffAlert from '@justforfun-ui/components/alert/src/alert.vue'

const closedAlerts = ref<string[]>([])

function handleClose(type: string) {
  closedAlerts.value.push(type)
}
</script>

<style scoped>
.alert-demo-enhanced {
  padding: 24px;
}

.demo-section {
  margin-bottom: 32px;
}

.section-title {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #333;
}
</style>
