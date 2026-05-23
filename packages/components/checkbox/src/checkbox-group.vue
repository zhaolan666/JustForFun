<template>
  <div :class="[ns.b()]">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { provide } from 'vue'
import { useNamespace } from '@justforfun-ui/hooks'
import { checkboxGroupProps } from './checkbox'

defineOptions({
  name: 'JffCheckboxGroup',
})

const props = defineProps(checkboxGroupProps)
const emit = defineEmits<{
  (e: 'update:modelValue', value: any[]): void
  (e: 'change', value: any[]): void
}>()

const ns = useNamespace('checkbox-group')

provide('JFF_CHECKBOX_GROUP', {
  props,
  emit,
})
</script>
