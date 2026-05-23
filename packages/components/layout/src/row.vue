<template>
  <component
    :is="tag"
    :class="[
      ns.b(),
      ns.m('justify', justify),
      ns.m('align', align),
    ]"
    :style="computedStyle"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { computed, provide } from 'vue'
import { useNamespace } from '@justforfun-ui/hooks'
import { rowProps } from './layout'
import type { CSSProperties } from 'vue'

defineOptions({
  name: 'JffRow',
})

const props = defineProps(rowProps)
const ns = useNamespace('row')
const tag = props.tag

provide('JFF_ROW_GUTTER', props.gutter)

const baseStyle = computed<CSSProperties>(() => ({
  display: 'flex',
  flexWrap: 'wrap',
}))

const gutterStyle = computed<CSSProperties>(() => {
  const { gutter } = props
  if (!gutter) return {}
  return {
    marginLeft: `-${gutter / 2}px`,
    marginRight: `-${gutter / 2}px`,
  }
})

const computedStyle = computed<CSSProperties>(() => ({
  ...baseStyle.value,
  ...gutterStyle.value,
}))
</script>
