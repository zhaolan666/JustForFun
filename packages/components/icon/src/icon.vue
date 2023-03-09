<template>
  <i :class="bem.b()" :style="style" v-bind="$attrs">
    <slot />
  </i>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { addUnit, isUndefined } from '@justforfun-ui/utils'
import { useNamespace } from '@justforfun-ui/hooks'
import { iconProps } from './icon'
import type { CSSProperties } from 'vue'
defineOptions({
  name: 'JffIcon',
})
const bem = useNamespace('icon')
const props = defineProps(iconProps)

const style = computed<CSSProperties>(() => {
  const { size, color } = props
  if (!size && !color) return {}

  return {
    fontSize: isUndefined(size) ? undefined : addUnit(size),
    '--color': color,
  }
})
</script>
