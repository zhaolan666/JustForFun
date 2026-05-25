<template>
  <div class="flex flex-col gap-6">
    <div class="flex gap-4 flex-wrap items-center">
      <span class="text-sm text-gray-500">Fullscreen Dialog:</span>
      <JffButton type="primary" @click="visible = true">Fullscreen Dialog</JffButton>
      <JffDialog v-model:visible="visible" title="Fullscreen Dialog" fullscreen>
        <p>This is the content of the fullscreen dialog</p>
        <template #footer>
          <JffButton @click="visible = false">Close</JffButton>
        </template>
      </JffDialog>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const visible = ref(false)
</script>
