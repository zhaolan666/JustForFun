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
import JffContainer from '@justforfun-ui/components/layout'
import JffHeader from '@justforfun-ui/components/layout'
import JffMain from '@justforfun-ui/components/layout'
import JffFooter from '@justforfun-ui/components/layout'
</script>

<style scoped>
.layout-demo {
  padding: 20px;
}
</style>
