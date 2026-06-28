<template>
  <div class="border-direction-demo">
    <div class="flex gap-4 flex-wrap">
      <JffBorder direction="all"><div style="padding: 16px; min-width: 100px;">All</div></JffBorder>
      <JffBorder direction="top"><div style="padding: 16px; min-width: 100px;">Top</div></JffBorder>
      <JffBorder direction="bottom"><div style="padding: 16px; min-width: 100px;">Bottom</div></JffBorder>
      <JffBorder direction="left"><div style="padding: 16px; min-width: 100px;">Left</div></JffBorder>
      <JffBorder direction="right"><div style="padding: 16px; min-width: 100px;">Right</div></JffBorder>
      <JffBorder direction="horizontal"><div style="padding: 16px; min-width: 100px;">Horizontal</div></JffBorder>
      <JffBorder direction="vertical"><div style="padding: 16px; min-width: 100px;">Vertical</div></JffBorder>
    </div>
  </div>
</template>

<script setup lang="ts">
import JffBorder from '@justforfun-ui/components/border/src/border.vue'
</script>

<style scoped>
.border-direction-demo {
  padding: 20px;
}
</style>
