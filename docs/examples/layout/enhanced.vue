<template>
  <div class="layout-demo-enhanced">
    <!-- 基础布局 -->
    <div class="demo-section">
      <h4 class="section-title">Basic Layout</h4>
      <JffContainer>
        <JffHeader class="bg-blue-500 text-white p-4 text-center font-semibold">
          Header
        </JffHeader>
        <JffMain class="p-6 bg-gray-50 min-h-[200px] flex items-center justify-center">
          Main Content Area
        </JffMain>
        <JffFooter class="bg-gray-800 text-white p-4 text-center">
          Footer © 2024 JustForFun UI
        </JffFooter>
      </JffContainer>
    </div>

    <!-- 经典布局 -->
    <div class="demo-section">
      <h4 class="section-title">Classic Layout (Header + Aside + Main + Footer)</h4>
      <JffContainer class="border border-gray-200 rounded-lg overflow-hidden shadow-sm" style="height: 400px;">
        <JffHeader class="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 flex items-center justify-between">
          <span class="font-bold text-lg">🚀 JustForFun Dashboard</span>
          <div class="flex gap-3 items-center">
            <button class="px-3 py-1 bg-white/20 hover:bg-white/30 rounded text-sm transition-colors">Notifications</button>
            <div class="w-8 h-8 bg-white rounded-full"></div>
          </div>
        </JffHeader>

        <JffContainer class="flex-1 overflow-hidden">
          <JffAside width="240px" class="bg-gray-900 text-white p-4 space-y-2 overflow-y-auto">
            <nav class="space-y-1">
              <a href="#" class="flex items-center gap-2 px-3 py-2 bg-blue-600 rounded-lg text-sm font-medium">
                <span class="i-ri-dashboard-line"></span> Dashboard
              </a>
              <a href="#" class="flex items-center gap-2 px-3 py-2 hover:bg-gray-800 rounded-lg text-sm transition-colors">
                <span class="i-ri-user-line"></span> Users
              </a>
              <a href="#" class="flex items-center gap-2 px-3 py-2 hover:bg-gray-800 rounded-lg text-sm transition-colors">
                <span class="i-ri-file-text-line"></span> Posts
              </a>
              <a href="#" class="flex items-center gap-2 px-3 py-2 hover:bg-gray-800 rounded-lg text-sm transition-colors">
                <span class="i-ri-image-line"></span> Media
              </a>
              <a href="#" class="flex items-center gap-2 px-3 py-2 hover:bg-gray-800 rounded-lg text-sm transition-colors">
                <span class="i-ri-settings-3-line"></span> Settings
              </a>
            </nav>
          </JffAside>

          <JffMain class="p-6 bg-gray-50 overflow-y-auto">
            <h2 class="text-xl font-bold mb-4">Welcome back! 👋</h2>
            <div class="grid grid-cols-3 gap-4 mb-6">
              <div class="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                <p class="text-sm text-gray-500">Total Users</p>
                <p class="text-2xl font-bold text-gray-800">12,345</p>
                <p class="text-xs text-green-500 mt-1">↑ 12% from last month</p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                <p class="text-sm text-gray-500">Revenue</p>
                <p class="text-2xl font-bold text-gray-800">$48,295</p>
                <p class="text-xs text-green-500 mt-1">↑ 8% from last month</p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500">
                <p class="text-sm text-gray-500">Active Projects</p>
                <p class="text-2xl font-bold text-gray-800">24</p>
                <p class="text-xs text-red-500 mt-1">↓ 3% from last month</p>
              </div>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-sm">
              <h3 class="font-semibold mb-3">Recent Activity</h3>
              <p class="text-sm text-gray-600">Your main content area with charts, tables, and more...</p>
            </div>
          </JffMain>
        </JffContainer>

        <JffFooter class="bg-gray-100 p-3 text-center text-xs text-gray-500 border-t">
          © 2024 JustForFun Inc. All rights reserved.
        </JffFooter>
      </JffContainer>
    </div>

    <!-- Row 和 Col 栅格系统 -->
    <div class="demo-section">
      <h4 class="section-title">Grid System (Row & Col)</h4>

      <!-- 等分列 -->
      <div class="mb-6">
        <p class="text-sm text-gray-600 mb-2">Equal columns:</p>
        <JffRow :gutter="16">
          <JffCol :span="6" v-for="i in 4" :key="i">
            <div class="bg-blue-100 border border-blue-200 rounded p-4 text-center text-sm font-medium text-blue-700">
              Col {{ i }} (span=6)
            </div>
          </JffCol>
        </JffRow>
      </div>

      <!-- 混合列宽 -->
      <div class="mb-6">
        <p class="text-sm text-gray-600 mb-2">Mixed widths:</p>
        <JffRow :gutter="16">
          <JffCol :span="12">
            <div class="bg-green-100 border border-green-200 rounded p-4 text-center text-sm font-medium text-green-700 h-24 flex items-center justify-center">
              Span 12 (50%)
            </div>
          </JffCol>
          <JffCol :span="6">
            <div class="bg-yellow-100 border border-yellow-200 rounded p-4 text-center text-sm font-medium text-yellow-700 h-24 flex items-center justify-center">
              Span 6 (25%)
            </div>
          </JffCol>
          <JffCol :span="6">
            <div class="bg-red-100 border border-red-200 rounded p-4 text-center text-sm font-medium text-red-700 h-24 flex items-center justify-center">
              Span 6 (25%)
            </div>
          </JffCol>
        </JffRow>
      </div>

      <!-- 偏移 -->
      <div>
        <p class="text-sm text-gray-600 mb-2">With offset:</p>
        <JffRow :gutter="16">
          <JffCol :span="8" :offset="8">
            <div class="bg-purple-100 border border-purple-200 rounded p-4 text-center text-sm font-medium text-purple-700 h-24 flex items-center justify-center">
              Span 8, Offset 8 (Centered)
            </div>
          </JffCol>
        </JffRow>
      </div>
    </div>

    <!-- 响应式布局 -->
    <div class="demo-section">
      <h4 class="section-title">Responsive Layout</h4>
      <p class="text-xs text-gray-500 mb-3">Resize the browser window to see responsive behavior</p>
      <JffRow :gutter="[16, 16]">
        <JffCol :xs="24" :sm="12" :md="8" :lg="6" v-for="item in 4" :key="item">
          <div class="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
            <div class="w-12 h-12 bg-indigo-500 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-xl font-bold">
              {{ item }}
            </div>
            <p class="font-medium text-gray-700">Card {{ item }}</p>
            <p class="text-xs text-gray-500 mt-1">Responsive card</p>
          </div>
        </JffCol>
      </JffRow>
    </div>

    <!-- 上中下布局 -->
    <div class="demo-section">
      <h4 class="section-title">Top-Middle-Bottom Layout</h4>
      <JffContainer direction="vertical" class="h-[500px] border border-gray-200 rounded-lg overflow-hidden">
        <JffHeader class="h-16 bg-slate-700 text-white flex items-center px-6 shrink-0">
          <span class="font-semibold">Fixed Header (64px)</span>
        </JffHeader>

        <JffMain class="flex-1 bg-gradient-to-b from-gray-50 to-white p-6 overflow-auto">
          <div class="max-w-3xl mx-auto space-y-6">
            <h2 class="text-2xl font-bold text-gray-800">Scrollable Content Area</h2>
            <p class="text-gray-600 leading-relaxed">
              This is a scrollable content area. The header and footer remain fixed while you scroll through this content.
              Try scrolling down to see more content.
            </p>

            <div class="grid grid-cols-2 gap-4">
              <div class="bg-white p-4 rounded-lg shadow-sm border">
                <h4 class="font-semibold mb-2">Feature 1</h4>
                <p class="text-sm text-gray-600">Description of feature one goes here.</p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-sm border">
                <h4 class="font-semibold mb-2">Feature 2</h4>
                <p class="text-sm text-gray-600">Description of feature two goes here.</p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-sm border">
                <h4 class="font-semibold mb-2">Feature 3</h4>
                <p class="text-sm text-gray-600">Description of feature three goes here.</p>
              </div>
              <div class="bg-white p-4 rounded-lg shadow-sm border">
                <h4 class="font-semibold mb-2">Feature 4</h4>
                <p class="text-sm text-gray-600">Description of feature four goes here.</p>
              </div>
            </div>

            <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 class="font-semibold text-blue-800 mb-2">💡 Pro Tip</h4>
              <p class="text-sm text-blue-700">
                Use this layout pattern for documentation sites, blogs, or any page where you want fixed headers/footers with scrollable content.
              </p>
            </div>
          </div>
        </JffMain>

        <JffFooter class="h-14 bg-slate-800 text-white flex items-center justify-center shrink-0 text-sm">
          Fixed Footer (56px) - Always visible at bottom
        </JffFooter>
      </JffContainer>
    </div>
  </div>
</template>

<script setup lang="ts">
import JffContainer from '@justforfun-ui/components/layout/src/container.vue'
import JffHeader from '@justforfun-ui/components/layout/src/header.vue'
import JffAside from '@justforfun-ui/components/layout/src/aside.vue'
import JffMain from '@justforfun-ui/components/layout/src/main.vue'
import JffFooter from '@justforfun-ui/components/layout/src/footer.vue'
import JffRow from '@justforfun-ui/components/layout/src/row.vue'
import JffCol from '@justforfun-ui/components/layout/src/col.vue'
</script>

<style scoped>
.layout-demo-enhanced {
  padding: 24px;
}

.demo-section {
  margin-bottom: 40px;
}

.section-title {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #333;
}
</style>
