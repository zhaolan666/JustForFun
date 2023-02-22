<script setup lang="ts" name="JustforfunButton">
import '../style/index'
import { computed, defineEmits } from 'vue'
import { buttonProps, Emits } from './button'

const props = defineProps(buttonProps)
const emits = defineEmits(Emits)

const classList = computed(() => {
  const { type, size, round, circle, disabled, plain, loading } = props
  return [
    {
      [`jff-button-${type}`]: type,
      [`jff-button-${size}`]: size,
      [`is-disabled`]: disabled,
      [`is-loading`]: loading,
      [`is-round`]: round,
      [`is-plain`]: plain,
      [`is-circle`]: circle,
    }
  ]
})

function handlerClick(evt: MouseEvent): void {
  emits('click', evt)
}

// 1. import icon
// 2. import hooks
// 3. import  status mananger library from  data
// 4. import  button type and button event
// 5. import  custom button style



</script>

<template>
  <button class="jff-button" :class="classList" :type="nativeType" :autofocus="autoFocus" :disabled="disabled || loading"
    @click="handlerClick">
    <i v-if="props.loading" class="jff-icon-loading"></i>
    <i v-if="props.icon && !props.loading" :class="props.icon"></i>
    <slot></slot>
  </button>
</template>
