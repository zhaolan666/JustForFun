<template>
  <div class="icon-demo-enhanced">
    <!-- 基础图标 -->
    <div class="demo-section">
      <h4 class="section-title">Basic Icons (UnoCSS)</h4>
      <div class="grid grid-cols-8 gap-4">
        <div v-for="icon in basicIcons" :key="icon" class="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer group">
          <div :class="icon" class="text-2xl text-gray-700 group-hover:text-blue-500 transition-colors"></div>
          <span class="text-xs text-gray-500 group-hover:text-blue-600">{{ icon.replace('i-', '') }}</span>
        </div>
      </div>
    </div>

    <!-- 不同尺寸 -->
    <div class="demo-section">
      <h4 class="section-title">Icon Sizes</h4>
      <div class="flex items-end gap-6 p-6 bg-white border border-gray-200 rounded-lg">
        <div class="flex flex-col items-center gap-2">
          <span class="i-ri-search-line text-sm"></span>
          <span class="text-xs text-gray-500">sm</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <span class="i-ri-search-line text-base"></span>
          <span class="text-xs text-gray-500">base</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <span class="i-ri-search-line text-lg"></span>
          <span class="text-xs text-gray-500">lg</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <span class="i-ri-search-line text-xl"></span>
          <span class="text-xs text-gray-500">xl</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <span class="i-ri-search-line text-2xl"></span>
          <span class="text-xs text-gray-500">2xl</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <span class="i-ri-search-line text-3xl"></span>
          <span class="text-xs text-gray-500">3xl</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <span class="i-ri-search-line text-4xl"></span>
          <span class="text-xs text-gray-500">4xl</span>
        </div>
      </div>
    </div>

    <!-- 颜色变体 -->
    <div class="demo-section">
      <h4 class="section-title">Color Variants</h4>
      <div class="flex flex-wrap gap-6 items-center">
        <div v-for="color in iconColors" :key="color.class" class="flex flex-col items-center gap-2 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <span :class="['i-ri-heart-fill', color.class]" class="text-3xl"></span>
          <span class="text-xs font-medium" :class="color.textClass">{{ color.label }}</span>
        </div>
      </div>
    </div>

    <!-- 图标按钮 -->
    <div class="demo-section">
      <h4 class="section-title">Icon Buttons</h4>
      <div class="flex flex-wrap gap-3 items-center">
        <!-- 实心图标按钮 -->
        <button class="p-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:scale-95 transition-all">
          <span class="i-ri-add-line text-xl"></span>
        </button>
        <button class="p-2.5 bg-green-500 text-white rounded-lg hover:bg-green-600 active:scale-95 transition-all">
          <span class="i-ri-check-line text-xl"></span>
        </button>
        <button class="p-2.5 bg-red-500 text-white rounded-lg hover:bg-red-600 active:scale-95 transition-all">
          <span class="i-ri-delete-bin-line text-xl"></span>
        </button>
        <button class="p-2.5 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 active:scale-95 transition-all">
          <span class="i-ri-edit-line text-xl"></span>
        </button>

        <!-- 分隔线 -->
        <div class="w-px h-8 bg-gray-300 mx-2"></div>

        <!-- 描边图标按钮 -->
        <button class="p-2.5 border-2 border-gray-300 text-gray-600 rounded-lg hover:border-blue-400 hover:text-blue-500 active:scale-95 transition-all">
          <span class="i-ri-settings-3-line text-xl"></span>
        </button>
        <button class="p-2.5 border-2 border-gray-300 text-gray-600 rounded-lg hover:border-blue-400 hover:text-blue-500 active:scale-95 transition-all">
          <span class="i-ri-share-line text-xl"></span>
        </button>
        <button class="p-2.5 border-2 border-gray-300 text-gray-600 rounded-lg hover:border-blue-400 hover:text-blue-500 active:scale-95 transition-all">
          <span class="i-ri-download-line text-xl"></span>
        </button>
      </div>
    </div>

    <!-- 图标 + 文字组合 -->
    <div class="demo-section">
      <h4 class="section-title">Icon with Text</h4>
      <div class="space-y-3">
        <div class="flex items-center gap-3 p-3 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
          <span class="i-ri-checkbox-circle-fill text-2xl text-green-500"></span>
          <div>
            <p class="font-medium text-green-800">Success Message</p>
            <p class="text-sm text-green-600">Your action was completed successfully.</p>
          </div>
        </div>

        <div class="flex items-center gap-3 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg">
          <span class="i-ri-alert-fill text-2xl text-yellow-500"></span>
          <div>
            <p class="font-medium text-yellow-800">Warning Notice</p>
            <p class="text-sm text-yellow-600">Please review before proceeding.</p>
          </div>
        </div>

        <div class="flex items-center gap-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
          <span class="i-ri-information-fill text-2xl text-blue-500"></span>
          <div>
            <p class="font-medium text-blue-800">Information</p>
            <p class="text-sm text-blue-600">Here's some helpful information.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 动画图标 -->
    <div class="demo-section">
      <h4 class="section-title">Animated Icons</h4>
      <div class="grid grid-cols-4 gap-6">
        <div class="flex flex-col items-center gap-3 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
          <span class="i-ri-loader-4-line text-4xl text-purple-500 animate-spin"></span>
          <span class="text-xs text-purple-700 font-medium">Loading</span>
        </div>

        <div class="flex flex-col items-center gap-3 p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg cursor-pointer group">
          <span class="i-ri-download-cloud-2-line text-4xl text-blue-500 group-hover:-translate-y-1 transition-transform duration-300"></span>
          <span class="text-xs text-blue-700 font-medium">Download</span>
        </div>

        <div class="flex flex-col items-center gap-3 p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg cursor-pointer group">
          <span class="i-ri-heart-fill text-4xl text-green-500 group-hover:scale-125 transition-transform duration-300"></span>
          <span class="text-xs text-green-700 font-medium">Like</span>
        </div>

        <div class="flex flex-col items-center gap-3 p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg cursor-pointer group">
          <span class="i-ri-notification-3-line text-4xl text-orange-500 animate-bounce"></span>
          <span class="text-xs text-orange-700 font-medium">Notify</span>
        </div>
      </div>
    </div>

    <!-- 图标搜索/筛选 -->
    <div class="demo-section">
      <h4 class="section-title">Interactive Icon Browser</h4>
      <div class="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div class="p-4 bg-gray-50 border-b border-gray-200">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search icons... (e.g., home, user, settings)"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div class="p-4 grid grid-cols-10 gap-3 max-h-64 overflow-y-auto">
          <div
            v-for="icon in filteredIcons"
            :key="icon"
            class="flex flex-col items-center justify-center p-2 hover:bg-blue-50 rounded cursor-pointer transition-colors"
            @click="copyToClipboard(icon)"
            :title="`Click to copy: ${icon}`"
          >
            <span :class="icon" class="text-xl text-gray-700"></span>
          </div>
        </div>

        <div v-if="filteredIcons.length === 0" class="p-8 text-center text-gray-400">
          No icons found for "{{ searchQuery }}"
        </div>
      </div>

      <div v-if="copiedIcon" class="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg text-sm text-green-700">
        ✓ Copied to clipboard: {{ copiedIcon }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const searchQuery = ref('')
const copiedIcon = ref('')

const basicIcons = [
  'i-ri-home-line',
  'i-ri-user-line',
  'i-ri-settings-3-line',
  'i-ri-search-line',
  'i-ri-heart-line',
  'i-ri-star-line',
  'i-ri-notification-line',
  'i-ri-mail-line',
  'i-ri-calendar-line',
  'i-ri-time-line',
  'i-ri-folder-line',
  'i-ri-file-text-line',
  'i-ri-image-line',
  'i-ri-video-line',
  'i-ri-music-line',
  'i-ri-download-line'
]

const iconColors = [
  { class: 'text-primary', label: 'Primary', textClass: 'text-blue-600' },
  { class: 'text-success', label: 'Success', textClass: 'text-green-600' },
  { class: 'text-warning', label: 'Warning', textClass: 'text-yellow-600' },
  { class: 'text-danger', label: 'Danger', textClass: 'text-red-600' },
  { class: 'text-info', label: 'Info', textClass: 'text-cyan-600' }
]

// 扩展图标列表用于搜索
const allIcons = [
  ...basicIcons,
  'i-ri-dashboard-line',
  'i-ri-bar-chart-box-line',
  'i-ri-line-chart-line',
  'i-ri-pie-chart-line',
  'i-ri-global-line',
  'i-ri-shield-check-line',
  'i-ri-lock-line',
  'i-ri-unlock-line',
  'i-ri-key-line',
  'i-ri-eye-line',
  'i-ri-eye-off-line',
  'i-ri-edit-2-line',
  'i-ri-delete-bin-7-line',
  'i-ri-add-circle-line',
  'i-ri-subtract-line',
  'i-ri-close-circle-line',
  'i-ri-checkbox-circle-line',
  'i-ri-arrow-left-right-line',
  'i-ri-arrow-up-down-line',
  'i-ri-refresh-line'
]

const filteredIcons = computed(() => {
  if (!searchQuery.value) return allIcons.slice(0, 30)

  const query = searchQuery.value.toLowerCase()
  return allIcons.filter(icon =>
    icon.toLowerCase().includes(query)
  )
})

function copyToClipboard(icon: string) {
  navigator.clipboard.writeText(icon)
  copiedIcon.value = icon

  setTimeout(() => {
    copiedIcon.value = ''
  }, 2000)
}
</script>

<style scoped>
.icon-demo-enhanced {
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

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

.animate-bounce {
  animation: bounce 1s infinite;
}
</style>
