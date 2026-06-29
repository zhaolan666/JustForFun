const e=`<template>
  <div class="input-basic-demo">
    <div class="space-y-4 max-w-md">
      <div>
        <p class="text-sm text-gray-600 mb-2">Basic Input:</p>
        <JffInput v-model="value1" placeholder="Please enter content" />
      </div>

      <div>
        <p class="text-sm text-gray-600 mb-2">Disabled Input:</p>
        <JffInput v-model="value2" disabled placeholder="Disabled" />
      </div>

      <div>
        <p class="text-sm text-gray-600 mb-2">Clearable Input:</p>
        <JffInput v-model="value3" clearable placeholder="Type to see clear button" />
      </div>

      <div>
        <p class="text-sm text-gray-600 mb-2">Password Input:</p>
        <JffInput v-model="value4" type="password" show-password placeholder="Password" />
      </div>

      <div>
        <p class="text-sm text-gray-600 mb-2">Textarea:</p>
        <JffInput v-model="value5" type="textarea" :rows="3" placeholder="Enter multiple lines..." />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { JffInput } from '@justforfun-ui/components/input'

const value1 = ref('')
const value2 = ref('Disabled value')
const value3 = ref('')
const value4 = ref('')
const value5 = ref('')
<\/script>

<style scoped>
.input-basic-demo {
  padding: 20px;
}
</style>
`;export{e as default};
