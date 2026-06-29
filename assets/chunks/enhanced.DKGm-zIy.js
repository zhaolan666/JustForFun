const n=`<template>
  <div class="tabs-demo-enhanced">
    <div class="space-y-8">
      <JffTabs v-model="activeTab1" type="card">
        <JffTabPane label="User" name="first">
          <p class="text-gray-600 p-4">User tab content. This is the first tab panel.</p>
        </JffTabPane>
        <JffTabPane label="Config" name="second">
          <p class="text-gray-600 p-4">Config tab content. Configuration options go here.</p>
        </JffTabPane>
        <JffTabPane label="Role" name="third">
          <p class="text-gray-600 p-4">Role tab content. Role management interface.</p>
        </JffTabPane>
      </JffTabs>

      <JffTabs v-model="activeTab2" type="border-card">
        <JffTabPane label="General" name="general">
          <div class="p-4">
            <h5 class="font-semibold mb-2">General Settings</h5>
            <p class="text-gray-600 text-sm">General configuration options for your account.</p>
          </div>
        </JffTabPane>
        <JffTabPane label="Security" name="security">
          <div class="p-4">
            <h5 class="font-semibold mb-2">Security Settings</h5>
            <p class="text-gray-600 text-sm">Manage your account security and privacy settings.</p>
          </div>
        </JffTabPane>
        <JffTabPane label="Notifications" name="notifications">
          <div class="p-4">
            <h5 class="font-semibold mb-2">Notification Settings</h5>
            <p class="text-gray-600 text-sm">Configure how you receive notifications.</p>
          </div>
        </JffTabPane>
      </JffTabs>

      <JffTabs v-model="activeTab3">
        <JffTabPane label="Tab A" name="a">
          <div class="p-4 bg-blue-50 rounded">Tab A content</div>
        </JffTabPane>
        <JffTabPane label="Tab B" name="b">
          <div class="p-4 bg-green-50 rounded">Tab B content</div>
        </JffTabPane>
        <JffTabPane label="Tab C" name="c">
          <div class="p-4 bg-purple-50 rounded">Tab C content</div>
        </JffTabPane>
      </JffTabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import JffTabs from '@justforfun-ui/components/tabs/src/tabs.vue'
import JffTabPane from '@justforfun-ui/components/tabs/src/tab-pane.vue'

const activeTab1 = ref('first')
const activeTab2 = ref('general')
const activeTab3 = ref('a')
<\/script>

<style scoped>
.tabs-demo-enhanced {
  padding: 24px;
}
</style>
`;export{n as default};
