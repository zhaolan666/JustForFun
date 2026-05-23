<template>
  <label
    :class="[
      ns.b(),
      {
        [ns.m('disabled')]: isDisabled,
        [ns.m('checked')]: isChecked,
        [ns.m('indeterminate')]: indeterminate,
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
        v-if="trueValue || falseValue"
        type="checkbox"
        :class="[ns.e('original')]"
        :disabled="isDisabled"
        :value="label"
        :name="name"
        @change="handleChange"
      />
      <input
        v-else
        type="checkbox"
        :class="[ns.e('original')]"
        :disabled="isDisabled"
        :checked="isChecked"
        :name="name"
        @change="handleChange"
      />
    </span>
    <span v-if="$slots.default || label" :class="[ns.e('label')]">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script lang="ts" setup>
import { computed, inject, watch } from 'vue'
import { useNamespace } from '@justforfun-ui/hooks'
import { checkboxProps } from './checkbox'

defineOptions({
  name: 'JffCheckbox',
})

const props = defineProps(checkboxProps)
const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'change', value: boolean): void
}>()

const ns = useNamespace('checkbox')

const checkboxGroup = inject<{
  props: any
  emit: any
}>('JFF_CHECKBOX_GROUP', null)

const isDisabled = computed(() => {
  return checkboxGroup?.props.disabled || props.disabled
})

const isChecked = computed(() => {
  if (checkboxGroup) {
    return checkboxGroup.props.modelValue.includes(props.label)
  }
  return props.modelValue
})

const handleChange = () => {
  if (isDisabled.value) return

  const newValue = !isChecked.value
  emit('update:modelValue', newValue)
  emit('change', newValue)

  if (checkboxGroup) {
    const currentValue = [...checkboxGroup.props.modelValue]
    if (newValue) {
      currentValue.push(props.label)
    } else {
      currentValue.splice(currentValue.indexOf(props.label), 1)
    }
    checkboxGroup.emit('update:modelValue', currentValue)
  }
}
</script>
