<template>
  <aside
    :class="[
      ns.b(),
      ns.is('collapsed', collapsed),
    ]"
    :style="asideStyle"
  >
    <slot />
  </aside>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useNamespace } from '@justforfun-ui/hooks'
import { asideProps } from './layout'

defineOptions({
  name: 'JffAside',
})

const props = defineProps(asideProps)
const ns = useNamespace('aside')

const collapsed = computed(() => props.collapsed)

const asideStyle = computed(() => {
  const width = props.collapsed ? props.collapsedWidth : props.width
  return {
    flex: `0 0 ${width}`,
    maxWidth: width,
    minWidth: width,
    width: width,
  }
})
</script>
