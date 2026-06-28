<template>
  <div class="badge-demo-enhanced">
    <!-- 基础用法 -->
    <div class="demo-section">
      <h4 class="section-title">Basic Badges</h4>
      <div class="flex flex-wrap gap-8 items-center">
        <div class="relative inline-block">
          <button class="px-4 py-2 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors">
            Messages
          </button>
          <JffBadge :value="12" />
        </div>

        <div class="relative inline-block">
          <button class="px-4 py-2 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors">
            Notifications
          </button>
          <JffBadge :value="3" type="primary" />
        </div>

        <div class="relative inline-block">
          <button class="px-4 py-2 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors">
            Tasks
          </button>
          <JffBadge :value="99" type="danger" :max="99" />
        </div>
      </div>
    </div>

    <!-- 小圆点 -->
    <div class="demo-section">
      <h4 class="section-title">Dot Badges</h4>
      <div class="flex flex-wrap gap-8 items-center">
        <div class="relative inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full">
          <span class="w-2 h-2 bg-green-500 rounded-full"></span>
          Online
          <JffBadge is-dot />
        </div>

        <div class="relative inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full">
          <span class="w-2 h-2 bg-yellow-500 rounded-full"></span>
          Away
          <JffBadge is-dot type="warning" />
        </div>

        <div class="relative inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full">
          <span class="w-2 h-2 bg-red-500 rounded-full"></span>
          Busy
          <JffBadge is-dot type="danger" />
        </div>
      </div>
    </div>

    <!-- 自定义内容 -->
    <div class="demo-section">
      <h4 class="section-title">Custom Content</h4>
      <div class="flex flex-wrap gap-6 items-center">
        <div class="relative inline-block">
          <div class="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center text-white font-bold text-xl cursor-pointer hover:scale-105 transition-transform">
            JD
          </div>
          <JffBadge value="NEW" type="danger" />
        </div>

        <div class="relative inline-block">
          <img src="https://via.placeholder.com/64x64/845EC2/FFFFFF?text=IMG" alt="Avatar" class="w-16 h-16 rounded-lg object-cover" />
          <JffBadge value="VIP" type="warning" />
        </div>
      </div>
    </div>

    <!-- 最大值限制 -->
    <div class="demo-section">
      <h4 class="section-title">Max Value</h4>
      <div class="flex flex-wrap gap-6 items-center">
        <div class="relative inline-block p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
          <p class="text-sm text-gray-600 mb-2">Notifications</p>
          <p class="text-2xl font-bold text-gray-800">{{ count }}</p>
          <JffBadge :value="count" :max="maxValue" class="absolute -top-2 -right-2" />

          <div class="mt-3 flex gap-2">
            <button
              class="px-2 py-1 bg-blue-500 text-white rounded text-xs hover:bg-blue-600"
              @click="count++"
            >
              +1
            </button>
            <button
              class="px-2 py-1 bg-red-500 text-white rounded text-xs hover:bg-red-600"
              @click="count = Math.max(0, count - 1)"
            >
              -1
            </button>
            <button
              class="px-2 py-1 bg-gray-500 text-white rounded text-xs hover:bg-gray-600"
              @click="count = 0"
            >
              Reset
            </button>
          </div>
        </div>

        <div class="p-4 bg-blue-50 rounded-lg">
          <p class="text-xs text-blue-600 mb-1">Max Value Setting:</p>
          <p class="text-lg font-semibold text-blue-800">{{ maxValue }}</p>
          <p class="text-xs text-blue-500 mt-1">Shows "{{ maxValue }}+" when exceeded</p>
        </div>
      </div>
    </div>

    <!-- 不同类型 -->
    <div class="demo-section">
      <h4 class="section-title">Type Variations</h4>
      <div class="grid grid-cols-4 gap-4">
        <div v-for="type in badgeTypes" :key="type.value" class="text-center">
          <div class="relative inline-block mb-2">
            <div class="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
              <span class="text-2xl">📦</span>
            </div>
            <JffBadge :value="type.count" :type="type.value" />
          </div>
          <p class="text-xs text-gray-600 capitalize">{{ type.label }}</p>
        </div>
      </div>
    </div>

    <!-- 隐藏为零时 -->
    <div class="demo-section">
      <h4 class="section-title">Hide When Zero</h4>
      <div class="flex flex-wrap gap-6 items-center">
        <div class="relative inline-block">
          <button class="px-4 py-2 bg-white border border-gray-300 rounded">
            Inbox ({{ zeroCount }})
          </button>
          <JffBadge :value="zeroCount" :hidden="zeroCount === 0" />
        </div>

        <button
          class="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600"
          @click="zeroCount++"
        >
          Add Message
        </button>
        <button
          class="px-3 py-1 bg-orange-500 text-white rounded text-sm hover:bg-orange-600"
          @click="zeroCount = Math.max(0, zeroCount - 1)"
        >
          Remove Message
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import JffBadge from '@justforfun-ui/components/badge/src/badge.vue'

const count = ref(56)
const maxValue = ref(99)
const zeroCount = ref(0)

const badgeTypes = [
  { label: 'Primary', value: 'primary' as const, count: 10 },
  { label: 'Success', value: 'success' as const, count: 25 },
  { label: 'Warning', value: 'warning' as const, count: 7 },
  { label: 'Danger', value: 'danger' as const, count: 99 }
]
</script>

<style scoped>
.badge-demo-enhanced {
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
