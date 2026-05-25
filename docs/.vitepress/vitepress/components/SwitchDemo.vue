<template>
  <div class="flex flex-col gap-8">
    <div class="flex flex-col gap-4">
      <h4 class="text-sm text-gray-500 font-medium">Basic Usage</h4>
      <div class="flex gap-4 items-center">
        <JffSwitch v-model="value1" />
        <JffSwitch v-model="value2" />
        <span class="text-sm text-gray-400">Value: {{ value1 }}, {{ value2 }}</span>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <h4 class="text-sm text-gray-500 font-medium">Size</h4>
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-3">
          <JffSwitch v-model="sizeValue" size="large" />
          <span class="text-sm">large</span>
        </div>
        <div class="flex items-center gap-3">
          <JffSwitch v-model="sizeValue" />
          <span class="text-sm">default</span>
        </div>
        <div class="flex items-center gap-3">
          <JffSwitch v-model="sizeValue" size="small" />
          <span class="text-sm">small</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const value1 = ref(true)
const value2 = ref(false)
const sizeValue = ref(true)
</script>
