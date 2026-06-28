<template>
  <div class="avatar-basic-demo">
    <div class="flex gap-4 items-center">
      <JffAvatar :size="50" icon="User" />
      <JffAvatar :size="50" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      <JffAvatar :size="50">user</JffAvatar>
    </div>
  </div>
</template>

<script setup lang="ts">
import JffAvatar from '@justforfun-ui/components/avatar/src/avatar.vue'
</script>

<style scoped>
.avatar-basic-demo {
  padding: 20px;
}
</style>
