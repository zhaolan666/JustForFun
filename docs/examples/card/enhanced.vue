<template>
  <div class="card-demo-enhanced">
    <!-- 基础卡片 -->
    <div class="demo-section">
      <h4 class="section-title">Basic Card</h4>
      <JffCard header="Card Title" shadow="always">
        <p>Card content goes here. You can put any text, images, or other components inside.</p>
      </JffCard>
    </div>

    <!-- 简单卡片 -->
    <div class="demo-section">
      <h4 class="section-title">Simple Card</h4>
      <JffCard shadow="hover">
        <template #header>
          <div class="flex items-center justify-between">
            <span>Custom Header</span>
            <button class="text-blue-500 text-sm">More</button>
          </div>
        </template>

        <p>This card has a custom header with action buttons.</p>
        <p class="mt-2 text-gray-500">Hover to see the shadow effect.</p>
      </JffCard>
    </div>

    <!-- 图片卡片 -->
    <div class="demo-section">
      <h4 class="section-title">Image Card</h4>
      <div class="grid grid-cols-2 gap-6">
        <JffCard shadow="hover" :body-style="{ padding: '0' }">
          <img src="https://via.placeholder.com/300x200/845EC2/FFFFFF?text=Image+1" alt="Placeholder" class="w-full h-48 object-cover rounded-t-lg" />
          <div class="p-4">
            <h5 class="font-semibold mb-2">Beautiful Landscape</h5>
            <p class="text-sm text-gray-600">A stunning view of nature.</p>
          </div>
        </JffCard>

        <JffCard shadow="hover" :body-style="{ padding: '0' }">
          <img src="https://via.placeholder.com/300x200/FF6B6B/FFFFFF?text=Image+2" alt="Placeholder" class="w-full h-48 object-cover rounded-t-lg" />
          <div class="p-4">
            <h5 class="font-semibold mb-2">City Lights</h5>
            <p class="text-sm text-gray-600">Urban photography at night.</p>
          </div>
        </JffCard>
      </div>
    </div>

    <!-- 阴影效果对比 -->
    <div class="demo-section">
      <h4 class="section-title">Shadow Effects</h4>
      <div class="grid grid-cols-3 gap-4">
        <JffCard header="Always Shadow" shadow="always">
          <p class="text-sm">Always shows shadow.</p>
        </JffCard>
        <JffCard header="Hover Shadow" shadow="hover">
          <p class="text-sm">Shadow on hover.</p>
        </JffCard>
        <JffCard header="No Shadow" shadow="never">
          <p class="text-sm">Never shows shadow.</p>
        </JffCard>
      </div>
    </div>

    <!-- 带操作按钮的卡片 -->
    <div class="demo-section">
      <h4 class="section-title">Card with Actions</h4>
      <JffCard shadow="always">
        <template #header>
          <div class="flex items-center justify-between">
            <span class="font-semibold">Profile Card</span>
            <div class="flex gap-2">
              <button class="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm transition-colors">Edit</button>
              <button class="px-3 py-1 bg-red-50 hover:bg-red-100 text-red-500 rounded text-sm transition-colors">Delete</button>
            </div>
          </div>
        </template>

        <div class="flex items-center gap-4">
          <div class="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
            JD
          </div>
          <div>
            <h5 class="font-semibold">John Doe</h5>
            <p class="text-sm text-gray-500">Software Engineer</p>
            <p class="text-xs text-gray-400 mt-1">Joined in 2024</p>
          </div>
        </div>
      </JffCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import JffCard from '@justforfun-ui/components/card/src/card.vue'
</script>

<style scoped>
.card-demo-enhanced {
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
</style>
