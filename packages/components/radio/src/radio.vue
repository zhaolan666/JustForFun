<template>
  <label
    :class="[
      ns.b(),
      {
        [ns.m('disabled')]: isDisabled,
        [ns.m('checked')]: isChecked,
        [ns.m('border')]: border,
      },
    ]"
    :tabindex="isDisabled ? -1 : 0"
    @keydown.enter="handleChange"
    @keydown.space.prevent="handleChange"
  >
    <span :class="[ns.e('input')]">
      <span :class="[ns.e('inner')]" />
      <input
        type="radio"
        :class="[ns.e('original')]"
        :disabled="isDisabled"
        :checked="isChecked"
        :name="radioGroup?.props.name || name"
        :value="label"
        @change="handleChange"
      />
    </span>
    <span v-if="$slots.default || label" :class="[ns.e('label')]">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue'
import { useNamespace } from '@justforfun-ui/hooks'
import { radioProps } from './radio'

defineOptions({
  name: 'JffRadio',
})

const props = defineProps(radioProps)
const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
  (e: 'change', value: any): void
}>()

const ns = useNamespace('radio')

const radioGroup = inject<{
  props: any
  emit: any
}>('JFF_RADIO_GROUP', null)

const isDisabled = computed(() => {
  return radioGroup?.props.disabled || props.disabled
})

const isChecked = computed(() => {
  const groupValue = radioGroup?.props.modelValue
  if (groupValue !== undefined) {
    return groupValue === props.label
  }
  return props.modelValue === props.label
})

const handleChange = () => {
  if (isDisabled.value) return
  emit('update:modelValue', props.label)
  emit('change', props.label)
  
  if (radioGroup) {
    radioGroup.emit('update:modelValue', props.label)
  }
}
</script>
