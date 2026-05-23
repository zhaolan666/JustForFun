<template>
  <main class="jff-layout-main" :class="[`jff-layout-main--${direction}`]">
    <slot></slot>
  </main>
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