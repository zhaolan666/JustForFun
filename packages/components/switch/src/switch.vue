<template>
  <button
    :type="button"
    role="switch"
    :aria-checked="modelValue"
    :class="[
      ns.b(),
      {
        [ns.m('checked')]: modelValue,
        [ns.m('disabled')]: disabled,
      },
    ]"
    :style="wrapperStyle"
    :disabled="disabled"
    @click="handleChange"
  >
    <span :class="[ns.e('core')]" :style="coreStyle">
      <span :class="[ns.e('action')]" />
    </span>
    <span v-if="activeText || inactiveText" :class="[ns.e('label')]">
      {{ modelValue ? activeText : inactiveText }}
    </span>
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useNamespace } from '@justforfun-ui/hooks'
import { switchProps } from './switch'

defineOptions({
  name: 'JffSwitch',
})

const props = defineProps(switchProps)
const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'change', value: boolean): void
}>()

const ns = useNamespace('switch')

const wrapperStyle = computed(() => ({
  width: `${props.width}px`,
}))

const coreStyle = computed(() => ({
  backgroundColor: props.modelValue 
    ? props.activeColor || '#409eff' 
    : props.inactiveColor || '#dcdfe6',
}))

const handleChange = () => {
  if (props.disabled) return
  const newValue = !props.modelValue
  emit('update:modelValue', newValue)
  emit('change', newValue)
}
</script>
