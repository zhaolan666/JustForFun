<template>
  <component :is="tag" :class="[ns.b(), ns.m('direction', direction)]">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { useNamespace } from '@justforfun-ui/hooks'
import { containerProps } from './layout'

defineOptions({
  name: 'JffContainer',
})

const props = defineProps(containerProps)
const ns = useNamespace('container')
const tag = props.tag
</script>
