const e=`<template>
  <div class="switch-demo">
    <div class="flex flex-col gap-4">
      <div class="flex items-center gap-4">
        <JffSwitch v-model="value1" />
        <span class="text-sm">{{ value1 ? 'ON' : 'OFF' }}</span>
      </div>

      <div class="flex items-center gap-4">
        <JffSwitch v-model="value2" disabled />
        <span class="text-sm text-gray-400">{{ value2 ? 'ON' : 'OFF' }} (Disabled)</span>
      </div>

      <div class="flex items-center gap-4">
        <JffSwitch v-model="value3" active-text="Yes" inactive-text="No" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import JffSwitch from '@justforfun-ui/components/switch/src/switch.vue'

const value1 = ref(true)
const value2 = ref(false)
const value3 = ref(false)
<\/script>

<style scoped>
.switch-demo {
  padding: 20px;
}
</style>
`;export{e as default};
