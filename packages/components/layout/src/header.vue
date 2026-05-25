<template>
  <header class="jff-layout-header" :class="[`jff-layout-header--${direction}`]">
    <slot></slot>
  </header>
</template>

<script lang="ts" setup>
defineProps({
  direction: {
    type: String,
    values: ['ltr', 'rtl'],
    default: 'ltr',
  },
})
</script>
