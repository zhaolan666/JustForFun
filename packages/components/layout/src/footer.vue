<template>
  <footer class="jff-layout-footer" :class="[`jff-layout-footer--${direction}`]">
    <slot></slot>
  </footer>
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