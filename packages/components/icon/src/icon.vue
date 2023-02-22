<script lang="ts" setup>
import { computed } from 'vue'
import { addUnit, isUndefined } from '@justforfun-ui/utils'
// import { useNamespace } from '@justforfun-ui/hooks'
import { iconProps } from './icon'
import type { CSSProperties } from 'vue'
// defineOptions({
//   name: 'ElIcon',
//   inheritAttrs: false,
// })
const props = defineProps(iconProps)
// const ns = useNamespace('icon')
const style = computed<CSSProperties>(() => {
  const { size, color } = props
  if (!size && !color) return {}
  return {
    fontSize: isUndefined(size) ? undefined : addUnit(size),
    '--color': color,
  }
})
</script>
<template>
  <i :class="iconProps" :style="style" v-bind="$attrs">
    <slot />
  </i>
</template>
