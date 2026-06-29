const a=`<template>
  <div class="avatar-demo-enhanced">
    <div class="demo-section">
      <h4 class="section-title">Basic Avatars</h4>
      <div class="flex items-end gap-6">
        <div class="space-y-3">
          <p class="text-xs text-gray-500 font-medium">Different Sizes</p>
          <div class="flex items-end gap-4">
            <JffAvatar :size="24" src="https://api.dicebear.com/7.x/avataaars/svg?seed=small" />
            <JffAvatar :size="32" src="https://api.dicebear.com/7.x/avataaars/svg?seed=medium" />
            <JffAvatar :size="40" src="https://api.dicebear.com/7.x/avataaars/svg?seed=large" />
            <JffAvatar :size="56" src="https://api.dicebear.com/7.x/avataaars/svg?seed=xl" />
            <JffAvatar :size="80" src="https://api.dicebear.com/7.x/avataaars/svg?seed=xxl" />
          </div>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h4 class="section-title">Shape Variants</h4>
      <div class="flex items-center gap-8 flex-wrap">
        <div class="flex flex-col items-center gap-2">
          <JffAvatar :size="64" shape="circle" src="https://api.dicebear.com/7.x/avataaars/svg?seed=circle" />
          <span class="text-xs text-gray-500">Circle (default)</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <JffAvatar :size="64" shape="square" src="https://api.dicebear.com/7.x/avataaars/svg?seed=square" />
          <span class="text-xs text-gray-500">Square</span>
        </div>
      </div>
    </div>

    <div class="demo-section">
      <h4 class="section-title">Text Avatars (Fallback)</h4>
      <div class="flex items-center gap-6 flex-wrap">
        <JffAvatar :size="56">JD</JffAvatar>
        <JffAvatar :size="56" style="background-color: #409eff; color: white;">AB</JffAvatar>
        <JffAvatar :size="56" style="background-color: #67c23a; color: white;">CD</JffAvatar>
        <JffAvatar :size="56" style="background-color: #e6a23c; color: white;">EF</JffAvatar>
        <JffAvatar :size="56" style="background-color: #f56c6c; color: white;">GH</JffAvatar>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import JffAvatar from '@justforfun-ui/components/avatar/src/avatar.vue'
<\/script>

<style scoped>
.avatar-demo-enhanced {
  padding: 24px;
}

.demo-section {
  margin-bottom: 32px;
}

.section-title {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #333;
}

.flex {
  display: flex;
}

.items-end {
  align-items: flex-end;
}

.items-center {
  align-items: center;
}

.gap-4 {
  gap: 16px;
}

.gap-6 {
  gap: 24px;
}

.gap-8 {
  gap: 32px;
}

.flex-wrap {
  flex-wrap: wrap;
}

.flex-col {
  flex-direction: column;
}

.space-y-3 > * + * {
  margin-top: 12px;
}

.text-xs {
  font-size: 12px;
}

.text-gray-500 {
  color: #909399;
}

.font-medium {
  font-weight: 500;
}

.mb-2 {
  margin-bottom: 8px;
}
</style>
`;export{a as default};
