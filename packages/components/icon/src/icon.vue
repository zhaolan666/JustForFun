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
  name: 'ElIcon',
})
const bem = useNamespace('icon')
const props = defineProps(iconProps)

const style = computed<CSSProperties>(() => {
  if (!props.size && !props.color) return {}

  return {
    fontSize: isUndefined(props.size) ? undefined : addUnit(props.size),
    '--color': props.color,
  }
})
</script>
