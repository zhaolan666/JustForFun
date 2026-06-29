const e=`<template>
  <div class="radio-demo">
    <div class="flex flex-col gap-3">
      <JffRadio v-model="selected" value="option1">Option 1</JffRadio>
      <JffRadio v-model="selected" value="option2">Option 2</JffRadio>
      <JffRadio v-model="selected" value="option3" disabled>Disabled Option</JffRadio>

      <p class="mt-2 text-sm text-gray-500">
        Selected: {{ selected }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import JffRadio from '@justforfun-ui/components/radio/src/radio.vue'

const selected = ref('option1')
<\/script>

<style scoped>
.radio-demo {
  padding: 20px;
}
</style>
`;export{e as default};
