<template>
  <header class="jff-layout-header" :class="[`jff-layout-header--${direction}`]">
    <slot></slot>
  </header>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  direction: {
    type: String,
    values: ['ltr', 'rtl'],
    default: 'ltr',
  },
})

const direction = computed(() => props.direction)
</script>