<template>
  <div :class="[ns.b()]">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { provide } from 'vue'
import { useNamespace } from '@justforfun-ui/hooks'
import { radioGroupProps } from './radio'

defineOptions({
  name: 'JffRadioGroup',
})

const props = defineProps(radioGroupProps)
const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
  (e: 'change', value: any): void
}>()

const ns = useNamespace('radio-group')

provide('JFF_RADIO_GROUP', {
  props,
  emit,
})
</script>
