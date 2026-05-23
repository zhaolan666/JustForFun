<template>
  <component
    :is="tag"
    :class="[ns.b(), colClass]"
    :style="computedStyle"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue'
import { useNamespace } from '@justforfun-ui/hooks'
import { colProps } from './layout'
import type { CSSProperties } from 'vue'

defineOptions({
  name: 'JffCol',
})

const props = defineProps(colProps)
const ns = useNamespace('col')
const tag = props.tag

const gutter = inject<number | undefined>('JFF_ROW_GUTTER', 0)

const colClass = computed(() => {
  const { span, offset, push, pull } = props
  return {
    [ns.m('span', span)]: span !== 24,
    [ns.m('offset', offset)]: offset > 0,
    [ns.m('push', push)]: push > 0,
    [ns.m('pull', pull)]: pull > 0,
  }
})

const baseStyle = computed<CSSProperties>(() => ({
  position: 'relative',
  width: '100%',
}))

const spanStyle = computed<CSSProperties>(() => {
  const { span } = props
  if (span === 24) return {}
  return {
    flex: `0 0 ${(span / 24) * 100}%`,
    maxWidth: `${(span / 24) * 100}%`,
  }
})

const gutterStyle = computed<CSSProperties>(() => {
  if (!gutter) return {}
  return {
    paddingLeft: `${gutter / 2}px`,
    paddingRight: `${gutter / 2}px`,
  }
})

const computedStyle = computed<CSSProperties>(() => ({
  ...baseStyle.value,
  ...spanStyle.value,
  ...gutterStyle.value,
}))
</script>
