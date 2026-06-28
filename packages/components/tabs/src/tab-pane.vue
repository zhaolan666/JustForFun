<template>
  <div
    v-show="active"
    :class="[
      ns.b('tab-pane'),
      {
        [ns.m('active')]: active,
      },
    ]"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { computed, inject, onMounted, onUnmounted } from 'vue'
import { useNamespace } from '@justforfun-ui/hooks'
import { tabPaneProps } from './tabs'

defineOptions({
  name: 'JffTabPane',
})

const props = defineProps(tabPaneProps)

const ns = useNamespace('tabs')

const tabs = inject<{
  props: any
  addPane: (pane: any) => void
  removePane: (name: string) => void
} | null>('JFF_TABS', null)

const active = computed(() => {
  return tabs?.props.modelValue === props.name
})

const paneName = computed(() => {
  return props.name || props.label || ''
})

onMounted(() => {
  tabs?.addPane({
    name: paneName.value,
    label: props.label,
    closable: props.closable,
  })
})

onUnmounted(() => {
  tabs?.removePane(paneName.value)
})
</script>
