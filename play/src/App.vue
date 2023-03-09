<template>
  <div style="padding-top: 50px">
    <jff-input v-model="state" />
  </div>
  <jff-button v-model="btnState" type="primary" size="large" is-loading="loading" />
  <jff-icon size="small" color="'green'" type="error" />
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

const state = ref('')
const btnState = ref('')
watch(
  () => {
    return state.value, btnState.value;
  },
  (newVal) => {
    console.log('state值：', newVal)
  }
)
</script>

