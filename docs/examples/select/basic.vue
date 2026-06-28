<template>
  <div class="select-demo">
    <div class="flex flex-col gap-4">
      <div>
        <label class="block text-sm text-gray-600 mb-2">Basic Select:</label>
        <JffSelect v-model="value1" placeholder="Please select" style="width: 240px;">
          <JffOption label="Option A" value="a" />
          <JffOption label="Option B" value="b" />
          <JffOption label="Option C" value="c" disabled />
          <JffOption label="Option D" value="d" />
        </JffSelect>
      </div>

      <div>
        <label class="block text-sm text-gray-600 mb-2">Disabled Select:</label>
        <JffSelect v-model="value2" disabled style="width: 240px;">
          <JffOption label="Option A" value="a" />
          <JffOption label="Option B" value="b" />
        </JffSelect>
      </div>

      <p class="text-sm text-gray-500 mt-2">
        Selected: {{ value1 || 'None' }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import JffSelect from '@justforfun-ui/components/select/src/select.vue'
import JffOption from '@justforfun-ui/components/select/src/option.vue'

const value1 = ref('')
const value2 = ref('a')
</script>

<style scoped>
.select-demo {
  padding: 20px;
}
</style>
