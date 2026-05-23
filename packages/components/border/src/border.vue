<template>
  <component :is="tag" :class="ns.b()" :style="borderStyle">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { addUnit, isUndefined } from '@justforfun-ui/utils'
import { useNamespace } from '@justforfun-ui/hooks'
import { borderProps } from './border'
import type { CSSProperties } from 'vue'

defineOptions({
  name: 'JffBorder',
})

const props = defineProps(borderProps)
const ns = useNamespace('border')
const tag = props.tag

const borderStyle = computed<CSSProperties>(() => {
  const { type, color, width, radius, direction } = props
  const style: CSSProperties = {
    borderStyle: type,
    borderColor: color,
    borderRadius: isUndefined(radius) ? undefined : addUnit(radius),
  }

  const borderWidth = addUnit(width as number | string)
  
  switch (direction) {
    case 'all':
      style.borderWidth = borderWidth
      break
    case 'top':
      style.borderTopWidth = borderWidth
      style.borderRightWidth = '0'
      style.borderBottomWidth = '0'
      style.borderLeftWidth = '0'
      break
    case 'right':
      style.borderTopWidth = '0'
      style.borderRightWidth = borderWidth
      style.borderBottomWidth = '0'
      style.borderLeftWidth = '0'
      break
    case 'bottom':
      style.borderTopWidth = '0'
      style.borderRightWidth = '0'
      style.borderBottomWidth = borderWidth
      style.borderLeftWidth = '0'
      break
    case 'left':
      style.borderTopWidth = '0'
      style.borderRightWidth = '0'
      style.borderBottomWidth = '0'
      style.borderLeftWidth = borderWidth
      break
    case 'horizontal':
      style.borderTopWidth = borderWidth
      style.borderRightWidth = '0'
      style.borderBottomWidth = borderWidth
      style.borderLeftWidth = '0'
      break
    case 'vertical':
      style.borderTopWidth = '0'
      style.borderRightWidth = borderWidth
      style.borderBottomWidth = '0'
      style.borderLeftWidth = borderWidth
      break
  }

  return style
})
</script>
