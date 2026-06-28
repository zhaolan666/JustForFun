<template>
  <div class="tag-demo">
    <div class="flex flex-wrap gap-2">
      <JffTag>Tag One</JffTag>
      <JffTag type="success">Tag Two</JffTag>
      <JffTag type="warning">Tag Three</JffTag>
      <JffTag type="danger">Tag Four</JffTag>
      <JffTag type="info">Tag Five</JffTag>
    </div>
  </div>
</template>

<script setup lang="ts">
import JffTag from '@justforfun-ui/components/tag'
</script>

<style scoped>
.tag-demo {
  padding: 20px;
}
</style>
