<template>
  <div class="demo-box">
    <div class="demo-box__example">
      <slot />
    </div>
    <div class="demo-box__code" v-if="$slots.code">
      <slot name="code" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'DemoBox',
})
</script>

<style scoped>
.demo-box {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  margin: 16px 0;
  overflow: hidden;
}

.demo-box__example {
  padding: 24px;
  background-color: var(--vp-c-bg);
}

.demo-box__code {
  border-top: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg-soft);
}

.demo-box__code :deep(pre) {
  margin: 0;
  padding: 16px;
  overflow-x: auto;
}
</style>
