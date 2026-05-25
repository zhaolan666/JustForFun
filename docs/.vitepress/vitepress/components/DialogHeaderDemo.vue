<template>
  <div class="flex flex-col gap-6">
    <div class="flex gap-4 flex-wrap items-center">
      <span class="text-sm text-gray-500">Custom Header:</span>
      <JffButton type="primary" @click="visible = true">Custom Header</JffButton>
      <JffDialog v-model:visible="visible">
        <template #header>
          <div class="custom-header">
            <span>Custom Title</span>
          </div>
        </template>
        <p>This is a dialog with custom header content</p>
      </JffDialog>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const visible = ref(false)
</script>

<style scoped>
.custom-header {
  font-size: 16px;
  font-weight: 600;
}
</style>
