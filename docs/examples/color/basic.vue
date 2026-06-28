<template>
  <div class="color-demo">
    <div class="color-section">
      <h4 class="section-title">Primary Colors</h4>
      <div class="color-grid">
        <div v-for="color in primaryColors" :key="color.name" class="color-item">
          <div class="color-block" :style="{ background: color.value }"></div>
          <div class="color-info">
            <span class="color-name">{{ color.name }}</span>
            <span class="color-value">{{ color.value }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="color-section">
      <h4 class="section-title">Status Colors</h4>
      <div class="flex flex-wrap gap-3 mt-3">
        <button
          v-for="status in statusColors"
          :key="status.name"
          class="px-4 py-2 rounded text-white font-medium"
          :style="{ background: status.value }"
        >
          {{ status.name }}
        </button>
      </div>
    </div>

    <div class="color-section">
      <h4 class="section-title">Text Colors</h4>
      <div class="flex flex-col gap-2 mt-3">
        <p :style="{ color: '#1A1A1A' }" class="text-lg font-semibold">Primary Text (#1A1A1A)</p>
        <p :style="{ color: '#666666' }">Secondary Text (#666666)</p>
        <p :style="{ color: '#999999' }" class="text-sm">Auxiliary Text (#999999)</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const primaryColors = [
  { name: 'Primary', value: '#845EC2' },
  { name: 'Light', value: '#BE93FD' },
  { name: 'Dark', value: '#593796' }
]

const statusColors = [
  { name: 'Success', value: '#6BCB77' },
  { name: 'Warning', value: '#FFE66D' },
  { name: 'Error', value: '#FF6B6B' },
  { name: 'Info', value: '#4D96FF' }
]
</script>

<style scoped>
.color-demo {
  padding: 24px;
}

.color-section {
  margin-bottom: 32px;
}

.section-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #333;
}

.color-grid {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}

.color-item {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.color-block {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.color-block:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.18);
}

.color-info {
  display: flex;
  flex-direction: column;
  font-size: 13px;
}

.color-name {
  font-weight: 600;
  color: #333;
}

.color-value {
  color: #666;
  font-family: monospace;
}
</style>
