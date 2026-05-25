<template>
  <div class="flex flex-col gap-6">
    <div class="flex gap-4 flex-wrap items-center">
      <span class="text-sm text-gray-500">Center Layout:</span>
      <JffButton type="primary" @click="visible = true">Centered Dialog</JffButton>
      <JffDialog v-model:visible="visible" title="Tip" align-center width="400px">
        <p style="text-align: center;">Are you sure you want to delete this record?</p>
        <template #footer>
          <div style="display: flex; justify-content: center; gap: 12px;">
            <JffButton @click="visible = false">Cancel</JffButton>
            <JffButton type="primary" @click="visible = false">Confirm</JffButton>
          </div>
        </template>
      </JffDialog>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const visible = ref(false)
</script>
