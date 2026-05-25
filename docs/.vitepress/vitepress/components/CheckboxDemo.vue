<template>
  <div class="flex flex-col gap-8">
    <div class="flex flex-col gap-4">
      <h4 class="text-sm text-gray-500 font-medium">Basic Usage</h4>
      <div class="flex gap-4 items-center">
        <JffCheckbox v-model="checked1">Checkbox</JffCheckbox>
        <span class="text-sm text-gray-400">Value: {{ checked1 }}</span>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <h4 class="text-sm text-gray-500 font-medium">Disabled State</h4>
      <div class="flex gap-4 items-center">
        <JffCheckbox v-model="checked2" disabled>Disabled Unchecked</JffCheckbox>
        <JffCheckbox v-model="checked3" disabled>Disabled Checked</JffCheckbox>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <h4 class="text-sm text-gray-500 font-medium">Checkbox Group</h4>
      <JffCheckboxGroup v-model="groupChecked">
        <JffCheckbox label="Option 1" />
        <JffCheckbox label="Option 2" />
        <JffCheckbox label="Option 3" />
      </JffCheckboxGroup>
      <div class="text-sm text-gray-400">Selected: {{ groupChecked.join(", ") || "None" }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const checked1 = ref(true)
const checked2 = ref(false)
const checked3 = ref(true)
const groupChecked = ref(["Option 1", "Option 2"])
</script>
