<template>
  <div
    :class="[
      ns.b(),
      {
        [ns.m('bordered')]: bordered,
        [ns.m('shadow-always')]: shadow === 'always',
        [ns.m('shadow-hover')]: shadow === 'hover',
        [ns.m('shadow-never')]: shadow === 'never',
      },
    ]"
  >
    <div v-if="$slots.header || header" :class="[ns.e('header')]">
      <slot name="header">{{ header }}</slot>
    </div>
    
    <div :class="[ns.e('body')]" :style="bodyStyle">
      <slot />
    </div>
    
    <div v-if="$slots.footer" :class="[ns.e('footer')]">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@justforfun-ui/hooks'
import { cardProps } from './card'

defineOptions({
  name: 'JffCard',
})

defineProps(cardProps)

const ns = useNamespace('card')
</script>
