<template>
  <div class="border-color-demo">
    <div class="flex gap-4 flex-wrap">
      <JffBorder color="#845EC2"><div style="padding: 16px;">Purple</div></JffBorder>
      <JffBorder color="#6BCB77"><div style="padding: 16px;">Green</div></JffBorder>
      <JffBorder color="#FF6B6B"><div style="padding: 16px;">Red</div></JffBorder>
      <JffBorder color="#4D96FF"><div style="padding: 16px;">Blue</div></JffBorder>
    </div>
  </div>
</template>

<script setup lang="ts">
import JffBorder from '@justforfun-ui/components/border'
</script>

<style scoped>
.border-color-demo {
  padding: 20px;
}
</style>
