<template>
  <div class="demo-block">
    <div class="demo-block__demo">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'DemoBlock',
})
</script>

<style scoped>
.demo-block {
  margin: 16px 0;
  border: 1px solid var(--jff-border-color);
  border-radius: 8px;
  overflow: hidden;
}

.demo-block__demo {
  padding: 32px 24px;
  background: white;
  border-bottom: 1px solid var(--jff-border-color);
}

html.dark .demo-block__demo {
  background: var(--vp-c-bg-elv);
}
</style>
