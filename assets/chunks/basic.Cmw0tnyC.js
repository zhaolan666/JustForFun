const e=`<template>
  <div class="alert-demo">
    <div class="flex flex-col gap-4">
      <JffAlert type="success" title="Success" description="This is a success message" />
      <JffAlert type="warning" title="Warning" description="This is a warning message" />
      <JffAlert type="danger" title="Error" description="This is an error message" />
      <JffAlert type="info" title="Info" description="This is an info message" />
    </div>
  </div>
</template>

<script setup lang="ts">
import JffAlert from '@justforfun-ui/components/alert/src/alert.vue'
<\/script>

<style scoped>
.alert-demo {
  padding: 20px;
}
</style>
`;export{e as default};
