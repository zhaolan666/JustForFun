<template>
  <div class="badge-demo">
    <div class="flex items-center gap-6">
      <JffBadge :value="12" class="mr-4">
        <div class="w-10 h-10 bg-gray-200 rounded" />
      </JffBadge>
      <JffBadge :value="3" class="mr-4">
        <button class="px-4 py-2 bg-blue-500 text-white rounded">Messages</button>
      </JffBadge>
      <JffBadge value="New">
        <button class="px-4 py-2 bg-green-500 text-white rounded">Comments</button>
      </JffBadge>
    </div>
  </div>
</template>

<script setup lang="ts">
import JffBadge from '@justforfun-ui/components/badge/src/badge.vue'
</script>

<style scoped>
.badge-demo {
  padding: 20px;
}
</style>
