<template>
  <div class="form-demo-enhanced">
    <form @submit.prevent="onSubmit" class="demo-form">
      <div class="form-item">
        <label>Activity Name</label>
        <JffInput v-model="form.name" placeholder="Please input activity name" />
      </div>

      <div class="form-item">
        <label>Activity Zone</label>
        <JffSelect v-model="form.zone" placeholder="Please select zone">
          <JffOption label="Zone One" value="shanghai" />
          <JffOption label="Zone Two" value="beijing" />
        </JffSelect>
      </div>

      <div class="form-item">
        <label>Instant Delivery</label>
        <JffSwitch v-model="form.delivery" />
      </div>

      <div class="form-item">
        <label>Activity Type</label>
        <JffCheckboxGroup v-model="form.type">
          <JffCheckbox value="online">Online activities</JffCheckbox>
          <JffCheckbox value="promotion">Promotion</JffCheckbox>
          <JffCheckbox value="offline">Offline activities</JffCheckbox>
        </JffCheckboxGroup>
      </div>

      <div class="form-item">
        <label>Resources</label>
        <JffRadioGroup v-model="form.resource">
          <JffRadio value="sponsorship">Sponsorship</JffRadio>
          <JffRadio value="venue">Venue</JffRadio>
        </JffRadioGroup>
      </div>

      <div class="form-item">
        <label>Description</label>
        <JffInput
          v-model="form.desc"
          type="textarea"
          :rows="3"
          placeholder="Please enter activity description"
        />
      </div>

      <div class="form-item">
        <div class="flex gap-3">
          <button type="submit" class="btn btn-primary">Create</button>
          <button type="button" class="btn btn-default" @click="onReset">Reset</button>
        </div>
      </div>
    </form>

    <div class="preview-section mt-6 p-4 bg-gray-50 rounded-lg" v-if="showPreview">
      <h4 class="text-sm font-semibold mb-2 text-gray-700">Form Data Preview:</h4>
      <pre class="text-xs text-gray-600 whitespace-pre-wrap">{{ JSON.stringify(form, null, 2) }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import JffInput from '@justforfun-ui/components/input/src/input.vue'
import JffSwitch from '@justforfun-ui/components/switch/src/switch.vue'
import JffSelect from '@justforfun-ui/components/select/src/select.vue'
import JffOption from '@justforfun-ui/components/select/src/option.vue'
import JffCheckboxGroup from '@justforfun-ui/components/checkbox/src/checkbox-group.vue'
import JffCheckbox from '@justforfun-ui/components/checkbox/src/checkbox.vue'
import JffRadioGroup from '@justforfun-ui/components/radio/src/radio-group.vue'
import JffRadio from '@justforfun-ui/components/radio/src/radio.vue'

const showPreview = ref(false)

const form = reactive({
  name: '',
  zone: '',
  delivery: false,
  type: [] as string[],
  resource: '',
  desc: ''
})

function onSubmit() {
  showPreview.value = true
}

function onReset() {
  form.name = ''
  form.zone = ''
  form.delivery = false
  form.type = []
  form.resource = ''
  form.desc = ''
  showPreview.value = false
}
</script>

<style scoped>
.form-demo-enhanced {
  padding: 24px;
}

.demo-form {
  max-width: 600px;
}

.form-item {
  margin-bottom: 16px;
}

.form-item label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #303133;
}

.btn {
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
}

.btn-primary {
  background-color: #409eff;
  color: white;
}

.btn-primary:hover {
  background-color: #66b1ff;
}

.btn-default {
  background-color: white;
  border: 1px solid #dcdfe6;
  color: #606266;
}

.btn-default:hover {
  border-color: #409eff;
  color: #409eff;
}

.flex {
  display: flex;
}

.gap-3 {
  gap: 12px;
}

.mt-6 {
  margin-top: 24px;
}

.p-4 {
  padding: 16px;
}

.bg-gray-50 {
  background-color: #f5f7fa;
}

.rounded-lg {
  border-radius: 8px;
}

.text-sm {
  font-size: 14px;
}

.font-semibold {
  font-weight: 600;
}

.mb-2 {
  margin-bottom: 8px;
}

.text-gray-700 {
  color: #303133;
}

.text-xs {
  font-size: 12px;
}

.text-gray-600 {
  color: #606266;
}

.whitespace-pre-wrap {
  white-space: pre-wrap;
}
</style>
