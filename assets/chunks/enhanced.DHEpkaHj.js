const n=`<template>
  <div class="radio-demo-enhanced">
    <div class="demo-section">
      <h4 class="section-title">Basic Radio</h4>
      <div class="flex flex-col gap-3">
        <JffRadio v-model="radio1" value="option1">Option A</JffRadio>
        <JffRadio v-model="radio1" value="option2">Option B</JffRadio>
        <JffRadio v-model="radio1" value="option3" disabled>Disabled Option</JffRadio>
      </div>

      <p class="mt-3 text-sm text-gray-600">
        Selected: <span class="font-medium text-blue-600">{{ radio1 || 'None' }}</span>
      </p>
    </div>

    <div class="demo-section">
      <h4 class="section-title">Radio Group</h4>
      <JffRadioGroup v-model="radioGroup">
        <JffRadio value="vue">Vue.js</JffRadio>
        <JffRadio value="react">React</JffRadio>
        <JffRadio value="angular">Angular</JffRadio>
        <JffRadio value="svelte">Svelte</JffRadio>
      </JffRadioGroup>

      <p class="mt-3 text-sm text-gray-600">
        Chosen framework: <span class="font-semibold">{{ radioGroup.toUpperCase() }}</span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import JffRadio from '@justforfun-ui/components/radio/src/radio.vue'
import JffRadioGroup from '@justforfun-ui/components/radio/src/radio-group.vue'

const radio1 = ref('option1')
const radioGroup = ref('vue')
<\/script>

<style scoped>
.radio-demo-enhanced {
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

.flex-col {
  flex-direction: column;
}

.gap-3 {
  gap: 12px;
}

.mt-3 {
  margin-top: 12px;
}

.text-sm {
  font-size: 14px;
}

.text-gray-600 {
  color: #606266;
}

.font-medium {
  font-weight: 500;
}

.text-blue-600 {
  color: #409eff;
}

.font-semibold {
  font-weight: 600;
}
</style>
`;export{n as default};
