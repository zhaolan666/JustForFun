<template>
  <div class="switch-demo-enhanced">
    <!-- 基础用法 -->
    <div class="demo-section">
      <h4 class="section-title">Basic Switch</h4>
      <div class="flex flex-col gap-4">
        <JffSwitch v-model="value1" />
        <p class="text-sm text-gray-600">Value: {{ value1 }}</p>
      </div>
    </div>

    <!-- 文字描述 -->
    <div class="demo-section">
      <h4 class="section-title">With Text Description</h4>
      <div class="flex flex-col gap-6">
        <div class="flex items-center gap-3">
          <JffSwitch
            v-model="value2"
            active-text="On"
            inactive-text="Off"
          />
          <span class="text-sm text-gray-600">{{ value2 ? 'Enabled' : 'Disabled' }}</span>
        </div>

        <div class="flex items-center gap-3">
          <JffSwitch
            v-model="value3"
            active-text="YES"
            inactive-text="NO"
            active-color="#13ce66"
            inactive-color="#ff4949"
          />
        </div>
      </div>
    </div>

    <!-- 不同颜色 -->
    <div class="demo-section">
      <h4 class="section-title">Custom Colors</h4>
      <div class="flex flex-wrap gap-8 items-center">
        <div class="flex flex-col gap-2">
          <JffSwitch v-model="color1" active-color="#409eff" />
          <span class="text-xs text-blue-500">Primary</span>
        </div>
        <div class="flex flex-col gap-2">
          <JffSwitch v-model="color2" active-color="#67c23a" />
          <span class="text-xs text-green-500">Success</span>
        </div>
        <div class="flex flex-col gap-2">
          <JffSwitch v-model="color3" active-color="#e6a23c" />
          <span class="text-xs text-yellow-500">Warning</span>
        </div>
        <div class="flex flex-col gap-2">
          <JffSwitch v-model="color4" active-color="#f56c6c" />
          <span class="text-xs text-red-500">Danger</span>
        </div>
        <div class="flex flex-col gap-2">
          <JffSwitch v-model="color5" active-color="#909399" />
          <span class="text-xs text-gray-500">Info</span>
        </div>
      </div>
    </div>

    <!-- 禁用状态 -->
    <div class="demo-section">
      <h4 class="section-title">Disabled State</h4>
      <div class="flex flex-col gap-4">
        <JffSwitch v-model="disabled1" disabled />
        <JffSwitch v-model="disabled2" disabled />

        <button
          class="mt-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded text-sm transition-colors"
          @click="disabled1 = !disabled1"
        >
          Toggle First Switch ({{ disabled1 ? 'ON' : 'OFF' }})
        </button>
      </div>
    </div>

    <!-- 尺寸变体 -->
    <div class="demo-section">
      <h4 class="section-title">Different Sizes</h4>
      <div class="flex items-end gap-6">
        <div class="flex flex-col gap-2">
          <JffSwitch v-model="sizeLarge" size="large" />
          <span class="text-xs text-gray-500">Large</span>
        </div>
        <div class="flex flex-col gap-2">
          <JffSwitch v-model="sizeDefault" />
          <span class="text-xs text-gray-500">Default</span>
        </div>
        <div class="flex flex-col gap-2">
          <JffSwitch v-model="sizeSmall" size="small" />
          <span class="text-xs text-gray-500">Small</span>
        </div>
      </div>
    </div>

    <!-- 加载状态 -->
    <div class="demo-section">
      <h4 class="section-title">Loading State</h4>
      <div class="flex flex-col gap-4">
        <JffSwitch v-model="loading1" loading />
        <p class="text-sm text-gray-600">
          Click to toggle (shows loading animation): {{ loading1 }}
        </p>
      </div>
    </div>

    <!-- 实际应用场景 -->
    <div class="demo-section">
      <h4 class="section-title">Real-world Usage Examples</h4>

      <!-- 设置面板 -->
      <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm max-w-md">
        <h5 class="font-semibold mb-4 text-lg">Settings Panel</h5>

        <div class="space-y-4">
          <div class="flex items-center justify-between py-3 border-b border-gray-100">
            <div>
              <p class="font-medium text-gray-800">Dark Mode</p>
              <p class="text-sm text-gray-500">Enable dark theme for the app</p>
            </div>
            <JffSwitch v-model="settings.darkMode" />
          </div>

          <div class="flex items-center justify-between py-3 border-b border-gray-100">
            <div>
              <p class="font-medium text-gray-800">Notifications</p>
              <p class="text-sm text-gray-500">Receive push notifications</p>
            </div>
            <JffSwitch v-model="settings.notifications" />
          </div>

          <div class="flex items-center justify-between py-3 border-b border-gray-100">
            <div>
              <p class="font-medium text-gray-800">Auto-save</p>
              <p class="text-sm text-gray-500">Automatically save changes</p>
            </div>
            <JffSwitch v-model="settings.autoSave" />
          </div>

          <div class="flex items-center justify-between py-3">
            <div>
              <p class="font-medium text-gray-800">Analytics</p>
              <p class="text-sm text-gray-500">Share usage data anonymously</p>
            </div>
            <JffSwitch v-model="settings.analytics" />
          </div>
        </div>

        <div class="mt-6 p-4 bg-gray-50 rounded-lg">
          <p class="text-xs font-semibold text-gray-700 mb-2">Current Settings:</p>
          <pre class="text-xs text-gray-600 whitespace-pre-wrap">{{ JSON.stringify(settings, null, 2) }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import JffSwitch from '@justforfun-ui/components/switch/src/switch.vue'

const value1 = ref(false)
const value2 = ref(true)
const value3 = ref(false)

const color1 = ref(true)
const color2 = ref(true)
const color3 = ref(false)
const color4 = ref(false)
const color5 = ref(true)

const disabled1 = ref(true)
const disabled2 = ref(false)

const sizeLarge = ref(true)
const sizeDefault = ref(false)
const sizeSmall = ref(true)

const loading1 = ref(false)

// 设置面板数据
const settings = reactive({
  darkMode: false,
  notifications: true,
  autoSave: true,
  analytics: false
})
</script>

<style scoped>
.switch-demo-enhanced {
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
