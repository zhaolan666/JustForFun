<template>
  <div class="demo-block">
    <div class="demo-block__demo">
      <slot name="demo" />
    </div>
    <div class="demo-block__code">
      <slot name="code" />
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
  border: 1px solid var(--jff-border-color);
  border-radius: 4px;
  margin: 16px 0;
}

.demo-block__demo {
  padding: 24px;
  border-bottom: 1px solid var(--jff-border-color);
}

.demo-block__code {
  background-color: var(--jff-fill-color-light);
  padding: 16px;
}

.demo-block__code :deep(pre) {
  margin: 0;
}
</style>
