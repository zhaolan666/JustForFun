const n=`<template>
  <div class="checkbox-demo-enhanced">
    <div class="demo-section">
      <h4 class="section-title">Basic Checkboxes</h4>
      <div class="flex flex-col gap-3">
        <JffCheckbox v-model="checked1">Option A</JffCheckbox>
        <JffCheckbox v-model="checked2">Option B</JffCheckbox>
        <JffCheckbox v-model="checked3" disabled>Disabled Option</JffCheckbox>
      </div>
    </div>

    <div class="demo-section">
      <h4 class="section-title">Checkbox Group</h4>
      <JffCheckboxGroup v-model="groupValue">
        <JffCheckbox value="vue">Vue.js</JffCheckbox>
        <JffCheckbox value="react">React</JffCheckbox>
        <JffCheckbox value="angular">Angular</JffCheckbox>
        <JffCheckbox value="svelte">Svelte</JffCheckbox>
      </JffCheckboxGroup>

      <p class="mt-3 text-sm text-gray-600">
        Selected frameworks: {{ groupValue.join(', ') || 'None' }}
      </p>
    </div>

    <div class="demo-section">
      <h4 class="section-title">Indeterminate State</h4>
      <div class="bg-white border border-gray-200 rounded-lg p-4 max-w-sm">
        <JffCheckbox
          v-model="checkAll"
          :indeterminate="isIndeterminate"
          @change="handleCheckAllChange"
        >
          Select all fruits
        </JffCheckbox>

        <div class="mt-3 pl-6 space-y-2">
          <JffCheckbox
            v-for="fruit in fruits"
            :key="fruit.value"
            v-model="checkedFruits"
            :value="fruit.value"
            @change="handleCheckedFruitsChange"
          >
            {{ fruit.label }}
          </JffCheckbox>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import JffCheckbox from '@justforfun-ui/components/checkbox/src/checkbox.vue'
import JffCheckboxGroup from '@justforfun-ui/components/checkbox/src/checkbox-group.vue'

const checked1 = ref(false)
const checked2 = ref(true)
const checked3 = ref(false)

const groupValue = ref<string[]>(['vue', 'react'])

const checkAll = ref(false)
const checkedFruits = ref<string[]>([])
const fruits = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Orange', value: 'orange' }
]

const isIndeterminate = computed(() => {
  return checkedFruits.value.length > 0 && checkedFruits.value.length < fruits.length
})

function handleCheckAllChange(val: boolean) {
  checkedFruits.value = val ? fruits.map(f => f.value) : []
}

function handleCheckedFruitsChange(value: string[]) {
  checkAll.value = value.length === fruits.length
}
<\/script>

<style scoped>
.checkbox-demo-enhanced {
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

.pl-6 {
  padding-left: 24px;
}

.space-y-2 > * + * {
  margin-top: 8px;
}

.bg-white {
  background-color: white;
}

.border {
  border: 1px solid;
}

.border-gray-200 {
  border-color: #e4e7ed;
}

.rounded-lg {
  border-radius: 8px;
}

.p-4 {
  padding: 16px;
}

.max-w-sm {
  max-width: 384px;
}
</style>
`;export{n as default};
