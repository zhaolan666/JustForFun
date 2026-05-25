<template>
  <div class="flex flex-col gap-6">
    <div class="flex gap-4 flex-wrap items-center">
      <span class="text-sm text-gray-500">Nested Form:</span>
      <JffButton type="primary" @click="visible = true">Open Dialog with Form</JffButton>
      <JffDialog v-model:visible="visible" title="Shipping Address" width="500px">
        <p>Form content area</p>
        <template #footer>
          <span class="dialog-footer">
            <JffButton @click="visible = false">Cancel</JffButton>
            <JffButton type="primary" @click="visible = false">Confirm</JffButton>
          </span>
        </template>
      </JffDialog>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const visible = ref(false)
</script>

<style scoped>
.dialog-footer {
  display: flex;
  gap: 12px;
  justify-content: flex-end;
}
</style>
