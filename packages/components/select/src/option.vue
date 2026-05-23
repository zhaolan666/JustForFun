<template>
  <div
    :class="[
      ns.b('select-option'),
      {
        [ns.m('select-option', 'disabled')]: disabled,
        [ns.m('select-option', 'selected')]: isSelected,
      },
    ]"
    @click="handleClick"
  >
    <slot>{{ label }}</slot>
  </div>
</template>

<script lang="ts" setup>
import { computed, inject, onMounted, onUnmounted } from 'vue'
import { useNamespace } from '@justforfun-ui/hooks'
import { optionProps } from './select'

defineOptions({
  name: 'JffOption',
})

const props = defineProps(optionProps)

const ns = useNamespace('select')

const select = inject<{
  props: any
  selectOption: (value: any, label: string) => void
}>('JFF_SELECT', null)

const isSelected = computed(() => {
  return select?.props.modelValue === props.value
})

const handleClick = () => {
  if (props.disabled) return
  select?.selectOption(props.value, props.label || (''))
}

onMounted(() => {
  // Register option with parent select
})

onUnmounted(() => {
  // Unregister option from parent select
})
</script>
