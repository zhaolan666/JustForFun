const n=`<template>
  <div class="tabs-basic-demo">
    <JffTabs v-model="activeTab">
      <JffTabPane label="User" name="first">
        <p class="text-gray-600 p-4">User tab content</p>
      </JffTabPane>
      <JffTabPane label="Config" name="second">
        <p class="text-gray-600 p-4">Config tab content</p>
      </JffTabPane>
      <JffTabPane label="Role" name="third">
        <p class="text-gray-600 p-4">Role tab content</p>
      </JffTabPane>
    </JffTabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import JffTabs from '@justforfun-ui/components/tabs/src/tabs.vue'
import JffTabPane from '@justforfun-ui/components/tabs/src/tab-pane.vue'

const activeTab = ref('first')
<\/script>

<style scoped>
.tabs-basic-demo {
  padding: 20px;
}
</style>
`;export{n as default};
