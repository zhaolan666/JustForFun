const e=`<template>
  <div class="checkbox-demo">
    <div class="flex flex-col gap-3">
      <JffCheckbox v-model="checked1" value="Option A">Option A</JffCheckbox>
      <JffCheckbox v-model="checked2" value="Option B">Option B</JffCheckbox>
      <JffCheckbox v-model="checked3" disabled>Disabled Option</JffCheckbox>

      <div class="mt-4">
        <p class="text-sm text-gray-600 mb-2">Checkbox Group:</p>
        <JffCheckboxGroup v-model="groupValue">
          <JffCheckbox value="Apple">Apple</JffCheckbox>
          <JffCheckbox value="Banana">Banana</JffCheckbox>
          <JffCheckbox value="Orange">Orange</JffCheckbox>
        </JffCheckboxGroup>
      </div>

      <p class="mt-2 text-sm text-gray-500">
        Selected: {{ groupValue.join(', ') || 'None' }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import JffCheckbox from '@justforfun-ui/components/checkbox/src/checkbox.vue'
import JffCheckboxGroup from '@justforfun-ui/components/checkbox/src/checkbox-group.vue'

const checked1 = ref(false)
const checked2 = ref(true)
const checked3 = ref(false)
const groupValue = ref<string[]>(['Apple'])
<\/script>

<style scoped>
.checkbox-demo {
  padding: 20px;
}
</style>
`;export{e as default};
