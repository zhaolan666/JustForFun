<template>
  <div class="flex flex-col gap-6">
    <div class="flex gap-4 flex-wrap items-center">
      <span class="text-sm text-gray-500">Basic Usage:</span>
      <JffButton type="primary" @click="visible1 = true">Open Dialog</JffButton>
      <JffDialog v-model:visible="visible1" title="Tip">
        <p>This is a message</p>
      </JffDialog>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const visible1 = ref(false)
</script>
