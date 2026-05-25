<template>
  <span
    :class="[
      ns.b(),
      ns.m(shape),
    ]"
    :style="avatarStyle"
  >
    <img
      v-if="src && !hasError"
      :src="src"
      :alt="alt"
      :class="[ns.e('img')]"
      @error="handleError"
    />
    <span v-else-if="$slots.icon" :class="[ns.e('icon')]">
      <slot name="icon" />
    </span>
    <span v-else-if="$slots.default" :class="[ns.e('text')]">
      <slot />
    </span>
    <span v-else :class="[ns.e('text')]">
      {{ defaultText }}
    </span>
  </span>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useNamespace } from '@justforfun-ui/hooks'
import { avatarProps } from './avatar'

defineOptions({
  name: 'JffAvatar',
})

const props = defineProps(avatarProps)

const ns = useNamespace('avatar')
const hasError = ref(false)

const sizeMap: Record<string, number> = {
  large: 48,
  default: 36,
  small: 24,
}

const avatarStyle = computed(() => {
  const size = typeof props.size === 'number'
    ? props.size
    : sizeMap[props.size] || sizeMap.default
  return {
    width: `${size}px`,
    height: `${size}px`,
    lineHeight: `${size}px`,
    fontSize: `${size * 0.5}px`,
  }
})

const defaultText = computed(() => {
  return '?'
})

const handleError = () => {
  hasError.value = true
}
</script>
