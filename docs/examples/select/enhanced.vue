<template>
  <div class="select-demo-enhanced">
    <div class="demo-section">
      <h4 class="section-title">Basic Select</h4>
      <div class="flex flex-col gap-6 max-w-md">
        <JffSelect v-model="value1" placeholder="Please select">
          <JffOption label="Option A" value="a" />
          <JffOption label="Option B" value="b" />
          <JffOption label="Option C" value="c" />
        </JffSelect>

        <p class="text-sm text-gray-600">Selected: {{ value1 || 'None' }}</p>
      </div>
    </div>

    <div class="demo-section">
      <h4 class="section-title">Disabled State</h4>
      <div class="flex gap-6 max-w-md">
        <JffSelect v-model="value2" disabled placeholder="Disabled select">
          <JffOption label="Option 1" value="1" />
          <JffOption label="Option 2" value="2" />
        </JffSelect>

        <JffSelect v-model="value3" placeholder="Normal select">
          <JffOption label="Option 1" value="1" :disabled="true" />
          <JffOption label="Option 2" value="2" />
        </JffSelect>
      </div>
    </div>

    <div class="demo-section">
      <h4 class="section-title">Multiple Select</h4>
      <div class="flex flex-col gap-4 max-w-md">
        <JffSelect
          v-model="multipleValue"
          multiple
          placeholder="Select multiple options"
        >
          <JffOption label="Vue.js" value="vue" />
          <JffOption label="React" value="react" />
          <JffOption label="Angular" value="angular" />
          <JffOption label="Svelte" value="svelte" />
        </JffSelect>

        <div class="p-3 bg-gray-50 rounded text-sm">
          <span class="font-medium">Selected:</span> {{ multipleValue.join(', ') || 'None' }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import JffSelect from '@justforfun-ui/components/select/src/select.vue'
import JffOption from '@justforfun-ui/components/select/src/option.vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const multipleValue = ref<string[]>([])
</script>

<style scoped>
.select-demo-enhanced {
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

.gap-4 {
  gap: 16px;
}

.gap-6 {
  gap: 24px;
}

.max-w-md {
  max-width: 384px;
}

.text-sm {
  font-size: 14px;
}

.text-gray-600 {
  color: #606266;
}

.p-3 {
  padding: 12px;
}

.bg-gray-50 {
  background-color: #f5f7fa;
}

.rounded {
  border-radius: 4px;
}

.font-medium {
  font-weight: 500;
}
</style>
