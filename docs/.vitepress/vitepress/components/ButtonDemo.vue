<template>
  <div class="button-demo">
    <h4 style="margin: 0 0 16px 0; color: #333;">[o] Button Demo Component</h4>
    
    <div style="padding: 20px; background: white; border: 1px solid #e4e7ed; border-radius: 8px;">
      <!-- Basic Types -->
      <div class="demo-section">
        <h5 class="demo-title">Basic Button Types</h5>
        <div class="button-group">
          <button class="jff-btn jff-btn--default">Default</button>
          <button class="jff-btn jff-btn--primary">Primary</button>
          <button class="jff-btn jff-btn--success">Success</button>
          <button class="jff-btn jff-btn--warning">Warning</button>
          <button class="jff-btn jff-btn--danger">Danger</button>
          <button class="jff-btn jff-btn--info">Info</button>
        </div>
      </div>

      <!-- Plain Buttons -->
      <div class="demo-section">
        <h5 class="demo-title">Plain Buttons</h5>
        <div class="button-group">
          <button class="jff-btn jff-btn--primary is-plain">Plain Primary</button>
          <button class="jff-btn jff-btn--success is-plain">Plain Success</button>
        </div>
      </div>

      <!-- Round Buttons -->
      <div class="demo-section">
        <h5 class="demo-title">Round Buttons</h5>
        <div class="button-group">
          <button class="jff-btn jff-btn--primary is-round">Round</button>
          <button class="jff-btn jff-btn--success is-round is-plain">Round Plain</button>
        </div>
      </div>

      <!-- Circle Buttons -->
      <div class="demo-section">
        <h5 class="demo-title">Circle Buttons</h5>
        <div class="button-group">
          <button class="jff-btn jff-btn--primary is-circle">[star]</button>
          <button class="jff-btn jff-btn--danger is-circle">!</button>
          <button class="jff-btn jffBtn--warning is-circle">?</button>
        </div>
      </div>

      <!-- Disabled State -->
      <div class="demo-section">
        <h5 class="demo-title">Disabled State</h5>
        <div class="button-group">
          <button class="jff-btn jff-btn--primary" disabled>Disabled Primary</button>
          <button class="jff-btn jff-btn--default" disabled>Disabled Default</button>
        </div>
      </div>

      <!-- Text & Link Buttons -->
      <div class="demo-section">
        <h5 class="demo-title">Text / Link Buttons</h5>
        <div class="button-group">
          <button class="jff-btn jff-btn--text">Text Button</button>
          <button class="jff-btn jff-btn--text is-disabled" disabled>Disabled Text</button>
          <button class="jff-btn jff-btn--link">Link Button</button>
          <button class="jff-btn jffBtn--link is-disabled" disabled>Disabled Link</button>
        </div>
      </div>

      <!-- Loading State -->
      <div class="demo-section">
        <h5 class="demo-title">Loading State</h5>
        <div class="button-group">
          <button 
            class="jff-btn jff-btn--primary" 
            :class="{ 'is-loading': loading }"
            @click="toggleLoading"
            :disabled="loading"
          >
            {{ loading ? 'Loading...' : 'Click to Load' }}
          </button>
        </div>
        <p v-if="loading" class="loading-hint">⏳ Simulating API call...</p>
      </div>

      <!-- Size Variants -->
      <div class="demo-section">
        <h5 class="demo-title">Size Variants</h5>
        <div class="button-group">
          <button class="jff-btn jff-btn--primary jff-btn--large">Large</button>
          <button class="jff-btn jffBtn--primary">Default</button>
          <button class="jff-btn jffBtn--primary jff-btn--small">Small</button>
        </div>
      </div>

      <!-- Interactive Demo: Click Counter -->
      <div class="demo-section interactive">
        <h5 class="demo-title">[play] Interactive Demo</h5>
        <div style="display: flex; align-items: center; gap: 16px;">
          <button 
            class="jff-btn jff-btn--primary"
            @click="count++"
          >
            Clicked {{ count }} time{{ count !== 1 ? 's' : '' }}
          </button>
          <button 
            class="jff-btn jff-btn--danger"
            @click="count = 0"
            :disabled="count === 0"
          >
            Reset
          </button>
        </div>
        <p class="counter-status">
          {{ count === 0 ? '[click] Click the button!' : count < 10 ? `[fire] Keep going! ${10 - count} to go!` : '[party] You reached 10 clicks!' }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const loading = ref(false)
const count = ref(0)

function toggleLoading() {
  if (loading.value) return
  
  loading.value = true
  
  setTimeout(() => {
    loading.value = false
  }, 2000)
}
</script>

<style scoped>
.button-demo {
  padding: 24px;
  background: #fafafa;
  border-radius: 8px;
}

.demo-section {
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid #ebeef5;
}

.demo-section:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.demo-title {
  font-size: 14px;
  font-weight: 600;
  color: #303133;
  margin: 0 0 12px 0;
}

.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}

/* Button Base Styles */
.jff-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 15px;
  font-size: 14px;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  transition: all 0.3s ease;
  user-select: none;
  outline: none;
  font-weight: 500;
  background-color: #fff;
  color: #606266;
}

.jff-btn:hover {
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}

/* Type Variants */
.jff-btn--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}

.jff-btn--primary:hover {
  background-color: #66b1ff;
  border-color: #66b1ff;
  color: #fff;
}

.jff-btn--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
}

.jff-btn--success:hover {
  background-color: #85ce61;
  border-color: #85ce61;
  color: #fff;
}

.jff-btn--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
}

.jff-btn--warning:hover {
  background-color: #ebb563;
  border-color: #ebb563;
  color: #fff;
}

.jff-btn--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
}

.jff-btn--danger:hover {
  background-color: #f78989;
  border-color: #f78989;
  color: #fff;
}

.jff-btn--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
}

.jff-btn--info:hover {
  background-color: #a6a9ad;
  border-color: #a6a9ad;
  color: #fff;
}

/* Plain Variant */
.is-plain {
  background-color: #ecf5ff;
  border-color: #b3d8ff;
  color: #409eff;
}

.jff-btn--primary.is-plain:hover {
  background-color: #409eff;
  border-color: #409eff;
  color: #fff;
}

.jff-btn--success.is-plain {
  background-color: #f0f9eb;
  border-color: #c2e7b0;
  color: #67c23a;
}

.jff-btn--success.is-plain:hover {
  background-color: #67c23a;
  border-color: #67c23a;
  color: #fff;
}

/* Round */
.is-round {
  border-radius: 20px;
  padding-left: 20px;
  padding-right: 20px;
}

/* Circle */
.is-circle {
  border-radius: 50%;
  padding: 8px;
  width: 36px;
  height: 36px;
  font-size: 18px;
}

/* Disabled */
.jff-btn:disabled,
.is-disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.jff-btn--primary:disabled,
.jff-btn--success:disabled,
.jff-btn--warning:disabled,
.jff-btn--danger:disabled,
.jff-btn--info:disabled {
  opacity: 0.6;
}

/* Text Button */
.jff-btn--text {
  border: none;
  background: transparent;
  color: #409eff;
  padding-left: 0;
  padding-right: 0;
}

.jff-btn--text:hover {
  background: transparent;
  text-decoration: underline;
}

/* Link Button */
.jff-btn--link {
  border: none;
  background: transparent;
  color: #409eff;
  padding-left: 0;
  padding-right: 0;
}

.jff-btn--link:hover {
  background: transparent;
  text-decoration: underline;
}

/* Size Variants */
.jff-btn--large {
  padding: 12px 19px;
  font-size: 16px;
  border-radius: 4px;
}

.jff-btn--small {
  padding: 5px 11px;
  font-size: 12px;
  border-radius: 3px;
}

/* Loading State */
.is-loading {
  position: relative;
  pointer-events: none;
}

.is-loading::before {
  content: '';
  position: absolute;
  width: 1em;
  height: 1em;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  left: 50%;
  transform: translateX(-120%);
}

@keyframes spin {
  to { transform: translateX(-120%) rotate(360deg); }
}

.loading-hint {
  margin-top: 8px;
  font-size: 12px;
  color: #e6a23c;
}

/* Interactive Demo */
.interactive {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 24px;
  border-radius: 8px;
  color: white;
}

.interactive .demo-title {
  color: white;
}

.interactive .counter-status {
  margin-top: 12px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.9);
  font-style: italic;
}
</style>
