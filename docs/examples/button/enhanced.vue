<template>
  <div class="button-demo-enhanced">
    <!-- 基础按钮 -->
    <div class="demo-section">
      <h4 class="section-title">Basic Buttons</h4>
      <div class="flex flex-wrap gap-3">
        <JffButton>Default</JffButton>
        <JffButton type="primary">Primary</JffButton>
        <JffButton type="success">Success</JffButton>
        <JffButton type="warning">Warning</JffButton>
        <JffButton type="danger">Danger</JffButton>
        <JffButton type="info">Info</JffButton>
      </div>
    </div>

    <!-- 描边按钮 -->
    <div class="demo-section">
      <h4 class="section-title">Plain Buttons</h4>
      <div class="flex flex-wrap gap-3">
        <JffButton plain>Default</JffButton>
        <JffButton type="primary" plain>Primary</JffButton>
        <JffButton type="success" plain>Success</JffButton>
        <JffButton type="warning" plain>Warning</JffButton>
        <JffButton type="danger" plain>Danger</JffButton>
      </div>
    </div>

    <!-- 圆角按钮 -->
    <div class="demo-section">
      <h4 class="section-title">Round Buttons</h4>
      <div class="flex flex-wrap gap-3 items-center">
        <JffButton round>Round</JffButton>
        <JffButton type="primary" round>Primary Round</JffButton>
        <JffButton circle>C</JffButton>
        <JffButton type="primary" circle size="large">+</JffButton>
      </div>
    </div>

    <!-- 尺寸 -->
    <div class="demo-section">
      <h4 class="section-title">Button Sizes</h4>
      <div class="flex flex-wrap gap-3 items-center">
        <JffButton size="small">Small</JffButton>
        <JffButton size="medium">Medium</JffButton>
        <JffButton size="large">Large</JffButton>
      </div>
    </div>

    <!-- 禁用状态 -->
    <div class="demo-section">
      <h4 class="section-title">Disabled State</h4>
      <div class="flex flex-wrap gap-3">
        <JffButton disabled>Default Disabled</JffButton>
        <JffButton type="primary" disabled>Primary Disabled</JffButton>
        <JffButton type="success" disabled>Success Disabled</JffButton>
      </div>
    </div>

    <!-- 加载状态 -->
    <div class="demo-section">
      <h4 class="section-title">Loading State</h4>
      <div class="flex flex-wrap gap-3">
        <JffButton :loading="true">Loading...</JffButton>
        <JffButton type="primary" :loading="true">Submitting...</JffButton>
      </div>
    </div>

    <!-- 图标按钮 -->
    <div class="demo-section">
      <h4 class="section-title">Icon Buttons</h4>
      <div class="flex flex-wrap gap-3 items-center">
        <JffButton icon="search">Search</JffButton>
        <JffButton type="primary" icon="plus">Add New</JffButton>
        <JffButton circle icon="setting"></JffButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import JffButton from '@justforfun-ui/components/button'
</script>

<style scoped>
.button-demo-enhanced {
  padding: 24px;
}

.demo-section {
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #f0f0f0;
}

.demo-section:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

.section-title {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #333;
}
</style>
