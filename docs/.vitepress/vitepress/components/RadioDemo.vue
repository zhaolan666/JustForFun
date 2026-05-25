<template>
  <div class="flex flex-col gap-8">
    <div class="flex flex-col gap-4">
      <h4 class="text-sm text-gray-500 font-medium">Basic Usage</h4>
      <JffRadioGroup v-model="radio1">
        <JffRadio label="Option 1" />
        <JffRadio label="Option 2" />
      </JffRadioGroup>
      <div class="text-sm text-gray-400">Selected: {{ radio1 }}</div>
    </div>
    <div class="flex flex-col gap-4">
      <h4 class="text-sm text-gray-500 font-medium">Disabled State</h4>
      <div class="flex gap-4 items-center">
        <JffRadio v-model="radio2" label="Disabled" disabled>Disabled</JffRadio>
        <JffRadio v-model="radio3" label="Checked & Disabled" disabled>Checked & Disabled</JffRadio>
      </div>
    </div>
    <div class="flex flex-col gap-4">
      <h4 class="text-sm text-gray-500 font-medium">Radio Group</h4>
      <JffRadioGroup v-model="radioGroup">
        <JffRadio label="Option 1" />
        <JffRadio label="Option 2" />
        <JffRadio label="Option 3" />
      </JffRadioGroup>
      <div class="text-sm text-gray-400">Selected: {{ radioGroup }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const radio1 = ref("Option 1")
const radio2 = ref("")
const radio3 = ref("Checked & Disabled")
const radioGroup = ref("Option 2")
</script>
