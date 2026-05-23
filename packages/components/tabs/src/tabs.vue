<template>
  <div :class="[ns.b(), ns.m(type)]">
    <div :class="[ns.e('header')]">
      <div
        v-for="pane in panes"
        :key="pane.name"
        :class="[
          ns.e('item'),
          {
            [ns.m('active')]: modelValue === pane.name,
            [ns.m('closable')]: closable || pane.closable,
          },
        ]"
        @click="handleClick(pane.name)"
      >
        <span :class="[ns.e('label')]">{{ pane.label }}</span>
        <jff-icon
          v-if="closable || pane.closable"
          :class="[ns.e('close')]"
          @click.stop="handleClose(pane.name)"
        ><X /></jff-icon>
      </div>
    </div>
    
    <div :class="[ns.e('content')]">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, provide } from 'vue'
import { useNamespace } from '@justforfun-ui/hooks'
import { tabsProps } from './tabs'
import JffIcon from '@justforfun-ui/components/icon'
import { X } from '@element-plus/icons-vue'

defineOptions({
  name: 'JffTabs',
})

const props = defineProps(tabsProps)
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'tab-change', value: string): void
  (e: 'tab-remove', value: string): void
}>()

const ns = useNamespace('tabs')
const panes = ref<Array<{ name: string; label: string; closable: boolean }>>([])

const handleClick = (name: string) => {
  emit('update:modelValue', name)
  emit('tab-change', name)
}

const handleClose = (name: string) => {
  emit('tab-remove', name)
}

provide('JFF_TABS', {
  props,
  addPane: (pane: any) => {
    panes.value.push(pane)
  },
  removePane: (name: string) => {
    panes.value = panes.value.filter(p => p.name !== name)
  },
})
</script>
