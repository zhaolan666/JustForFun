const n=`<template>
  <div class="dialog-demo">
    <button class="px-4 py-2 bg-blue-500 text-white rounded" @click="visible = true">
      Open Dialog
    </button>

    <JffDialog v-model="visible" title="Dialog Title" width="50%">
      <p>This is the dialog content.</p>
      <p>You can place any content here.</p>
    </JffDialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import JffDialog from '@justforfun-ui/components/dialog/src/dialog.vue'

const visible = ref(false)
<\/script>

<style scoped>
.dialog-demo {
  padding: 20px;
}
</style>
`;export{n as default};
