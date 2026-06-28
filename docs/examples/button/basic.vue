<template>
  <div class="button-demo">
    <div class="flex flex-wrap gap-4 items-center">
      <JffButton>Default</JffButton>
      <JffButton type="primary">Primary</JffButton>
      <JffButton type="success">Success</JffButton>
      <JffButton type="warning">Warning</JffButton>
      <JffButton type="danger">Danger</JffButton>
    </div>

    <div class="flex flex-wrap gap-4 items-center mt-4">
      <JffButton plain>Plain</JffButton>
      <JffButton type="primary" plain>Primary Plain</JffButton>
      <JffButton round>Round</JffButton>
      <JffButton circle>C</JffButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { JffButton } from '@justforfun-ui/components/button'
</script>

<style scoped>
.button-demo {
  padding: 20px;
}
</style>
