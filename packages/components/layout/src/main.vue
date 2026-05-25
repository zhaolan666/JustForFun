<template>
  <main class="jff-layout-main" :class="[`jff-layout-main--${direction}`]">
    <slot></slot>
  </main>
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
