<template>
  <div class="layout-demo">
    <JffContainer>
      <JffHeader>Header</JffHeader>
      <JffMain>Main Content</JffMain>
      <JffFooter>Footer</JffFooter>
    </JffContainer>
  </div>
</template>

<script setup lang="ts">
import JffContainer from '@justforfun-ui/components/layout/src/container.vue'
import JffHeader from '@justforfun-ui/components/layout/src/header.vue'
import JffMain from '@justforfun-ui/components/layout/src/main.vue'
import JffFooter from '@justforfun-ui/components/layout/src/footer.vue'
</script>

<style scoped>
.layout-demo {
  padding: 20px;
}
</style>
