<script setup lang="ts">
import { Search, Edit, Check, Delete, Message } from '@element-plus/icons-vue'
</script>

<template>
  <div class="flex flex-col gap-8">
    <!-- 基础用法 -->
    <div class="flex flex-col gap-2">
      <h4 class="text-sm text-gray-500">Basic Usage</h4>
      <div class="flex gap-4 text-2xl">
        <JffIcon><Search /></JffIcon>
        <JffIcon><Edit /></JffIcon>
        <JffIcon><Check /></JffIcon>
        <JffIcon><Delete /></JffIcon>
        <JffIcon><Message /></JffIcon>
      </div>
    </div>

    <!-- 图标大小 -->
    <div class="flex flex-col gap-2">
      <h4 class="text-sm text-gray-500">Icon Size</h4>
      <div class="flex gap-4 items-center">
        <JffIcon :size="16"><Search /></JffIcon>
        <JffIcon :size="20"><Search /></JffIcon>
        <JffIcon :size="24"><Search /></JffIcon>
        <JffIcon :size="32"><Search /></JffIcon>
      </div>
    </div>

    <!-- 图标颜色 -->
    <div class="flex flex-col gap-2">
      <h4 class="text-sm text-gray-500">Icon Color</h4>
      <div class="flex gap-4 text-2xl">
        <JffIcon color="#606266"><Search /></JffIcon>
        <JffIcon color="#409EFF"><Search /></JffIcon>
        <JffIcon color="#67C23A"><Search /></JffIcon>
        <JffIcon color="#E6A23C"><Search /></JffIcon>
        <JffIcon color="#F56C6C"><Search /></JffIcon>
      </div>
    </div>
  </div>
</template>
