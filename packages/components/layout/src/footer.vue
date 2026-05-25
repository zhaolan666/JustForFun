<template>
  <footer class="jff-layout-footer" :class="[`jff-layout-footer--${direction}`]">
    <slot></slot>
  </footer>
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
