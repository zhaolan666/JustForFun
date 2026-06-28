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
import JffForm from '@justforfun-ui/components/form'
import JffFormItem from '@justforfun-ui/components/form'
import JffInput from '@justforfun-ui/components/input'
import JffSwitch from '@justforfun-ui/components/switch'
import JffCheckboxGroup from '@justforfun-ui/components/checkbox'
import JffCheckbox from '@justforfun-ui/components/checkbox'

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
</style>
