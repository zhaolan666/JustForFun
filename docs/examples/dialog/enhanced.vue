<template>
  <div class="dialog-demo-enhanced">
    <div class="demo-section">
      <h4 class="section-title">Basic Dialog</h4>
      <button class="px-4 py-2 bg-blue-500 text-white rounded" @click="visible1 = true">Open Basic Dialog</button>

      <JffDialog v-model="visible1" title="Basic Dialog" width="50%">
        <p>This is a basic dialog content.</p>
        <p>You can place any information here.</p>
        <template #footer>
          <div class="flex justify-end gap-2">
            <button class="px-4 py-2 bg-gray-500 text-white rounded" @click="visible1 = false">Cancel</button>
            <button class="px-4 py-2 bg-blue-500 text-white rounded" @click="visible1 = false">Confirm</button>
          </div>
        </template>
      </JffDialog>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import JffDialog from '@justforfun-ui/components/dialog/src/dialog.vue'

const visible1 = ref(false)
</script>

<style scoped>
.dialog-demo-enhanced {
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

.flex {
  display: flex;
}

.justify-end {
  justify-content: flex-end;
}

.gap-2 {
  gap: 8px;
}

.px-4 {
  padding-left: 16px;
  padding-right: 16px;
}

.py-2 {
  padding-top: 8px;
  padding-bottom: 8px;
}

.rounded {
  border-radius: 4px;
}

.text-white {
  color: white;
}

.bg-blue-500 {
  background-color: #409eff;
}

.bg-gray-500 {
  background-color: #909399;
}
</style>
