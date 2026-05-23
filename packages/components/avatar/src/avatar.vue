<template>
  <span
    :class="[
      ns.b(),
      ns.m(size),
      ns.m(shape),
    ]"
    :style="avatarStyle"
  >
    <img
      v-if="src"
      :src="src"
      :alt="alt"
      :class="[ns.e('img')]"
      @error="handleError"
    />
    <jff-icon
      v-else-if="icon"
      :name="icon"
      :class="[ns.e('icon')]"
    />
    <span v-else-if="$slots.default" :class="[ns.e('text')]">
      <slot />
    </span>
    <span v-else :class="[ns.e('text')]">
      {{ defaultText }}
    </span>
  </span>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useNamespace } from '@justforfun-ui/hooks'
import { avatarProps } from './avatar'
import JffIcon from '@justforfun-ui/components/icon'

defineOptions({
  name: 'JffAvatar',
})

const props = defineProps(avatarProps)

const ns = useNamespace('avatar')

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

const handleError = (e: Event) => {
  const target = e.target as HTMLImageElement
  target.style.display = 'none'
}
</script>
