<template>
  <div class="demo-playground">
    <iframe
      v-if="src"
      :src="src"
      class="demo-playground__iframe"
      frameborder="0"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  src?: string
}>()
</script>

<style scoped>
.demo-playground {
  width: 100%;
  border: 1px solid var(--jff-border-color-lighter);
  border-radius: var(--jff-border-radius-base);
  overflow: hidden;
}

.demo-playground__iframe {
  width: 100%;
  height: 300px;
}
</style>