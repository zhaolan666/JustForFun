<template>
  <div class="form-demo">
    <JffForm :model="form" label-width="auto">
      <JffFormItem label="Activity name">
        <JffInput v-model="form.name" placeholder="Please input activity name" />
      </JffFormItem>
      <JffFormItem label="Activity zone">
        <JffInput v-model="form.zone" placeholder="Please input activity zone" />
      </JffFormItem>
      <JffFormItem label="Instant delivery">
        <JffSwitch v-model="form.delivery" />
      </JffFormItem>
      <JffFormItem label="Activity type">
        <JffCheckboxGroup v-model="form.type">
          <JffCheckbox value="Online activities">Online activities</JffCheckbox>
          <JffCheckbox value="Promotion">Promotion</JffCheckbox>
          <JffCheckbox value="Offline">Offline</JffCheckbox>
        </JffCheckboxGroup>
      </JffFormItem>
      <JffFormItem>
        <button class="px-4 py-2 bg-blue-500 text-white rounded mr-2" @click="onSubmit">Create</button>
        <button class="px-4 py-2 bg-gray-500 text-white rounded" @click="onReset">Reset</button>
      </JffFormItem>
    </JffForm>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import JffForm from '@justforfun-ui/components/form/src/form.vue'
import JffFormItem from '@justforfun-ui/components/form/src/form-item.vue'
import JffInput from '@justforfun-ui/components/input/src/input.vue'
import JffSwitch from '@justforfun-ui/components/switch/src/switch.vue'
import JffCheckboxGroup from '@justforfun-ui/components/checkbox/src/checkbox-group.vue'
import JffCheckbox from '@justforfun-ui/components/checkbox/src/checkbox.vue'

const form = reactive({
  name: '',
  zone: '',
  delivery: false,
  type: [] as string[]
})

function onSubmit() {
  console.log('Form submitted:', form)
}

function onReset() {
  Object.assign(form, {
    name: '',
    zone: '',
    delivery: false,
    type: []
  })
}
</script>

<style scoped>
.form-demo {
  padding: 20px;
}

.px-4 {
  padding-left: 16px;
  padding-right: 16px;
}

.py-2 {
  padding-top: 8px;
  padding-bottom: 8px;
}

.rounded {
  border-radius: 4px;
}

.text-white {
  color: white;
}

.bg-blue-500 {
  background-color: #409eff;
}

.bg-gray-500 {
  background-color: #909399;
}

.mr-2 {
  margin-right: 8px;
}
</style>
