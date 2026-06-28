<template>
  <div class="border-type-demo">
    <div class="flex gap-4 flex-wrap">
      <JffBorder type="solid"><div style="padding: 16px;">Solid</div></JffBorder>
      <JffBorder type="dashed"><div style="padding: 16px;">Dashed</div></JffBorder>
      <JffBorder type="dotted"><div style="padding: 16px;">Dotted</div></JffBorder>
      <JffBorder type="double"><div style="padding: 16px;">Double</div></JffBorder>
    </div>
  </div>
</template>

<script setup lang="ts">
import JffBorder from '@justforfun-ui/components/border'
</script>

<style scoped>
.border-type-demo {
  padding: 20px;
}
</style>
