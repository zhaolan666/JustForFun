<template>
  <div
    class="jff-demo-block"
    :class="{
      'is-loading': loading,
      'is-expanded': showSource,
      'has-error': error,
      'is-focused': isFocused
    }"
    role="region"
    :aria-label="`Demo: ${path}`"
    tabindex="-1"
    @keydown.escape="handleEscape"
    @keydown.tab="handleTabKey"
    @keydown.ctrl.c.exact="handleCopyShortcut"
    @keydown.meta.c.exact="handleCopyShortcut"
    @focus="handleFocus"
    @blur="handleBlur"
  >
    <!-- 预览区域 -->
    <div class="jff-demo-preview" role="presentation">
      <div class="jff-demo-preview-container" v-if="!loading && demoComponent">
        <component :is="demoComponent" />
      </div>
      
      <!-- 加载状态 -->
      <div v-else-if="loading" class="jff-demo-loading" role="status" aria-live="polite">
        <svg class="animate-spin h-8 w-8 text-purple-600 mx-auto" viewBox="0 0 24 24" aria-hidden="true">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <p class="mt-2 text-gray-500">Loading demo...</p>
      </div>
      
      <!-- 错误状态 -->
      <div v-else class="jff-demo-error" role="alert">
        <svg class="w-12 h-12 text-red-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"/>
        </svg>
        <p class="text-red-500 font-medium">Failed to load demo</p>
        <p class="text-sm text-red-400 mt-1">{{ error || path }}</p>
      </div>
    </div>

    <!-- 工具栏区域（在预览区和代码区之间） -->
    <div
      class="jff-demo-toolbar-wrapper"
      :class="{ 'is-visible': showSource || isToolbarHovered }"
      @mouseenter="isToolbarHovered = true"
      @mouseleave="isToolbarHovered = false"
      role="toolbar"
      :aria-label="showSource ? 'Demo toolbar (code visible)' : 'Demo toolbar'"
    >
      <div class="jff-demo-toolbar" :class="{ 'is-always-visible': showSource }">
        <!-- 显示/隐藏源代码按钮 -->
        <button
          class="jff-demo-btn jff-demo-btn--primary"
          @click="toggleSourceCode"
          @keydown.enter.prevent="toggleSourceCode"
          @keydown.space.prevent="toggleSourceCode"
          :title="showSource ? 'Hide source code' : 'Show source code'"
          :aria-expanded="showSource"
          :aria-controls="'source-code-' + pathId"
          type="button"
        >
          <span class="jff-demo-btn__icon" v-html="showSource ? hideIcon : codeIcon" aria-hidden="true"></span>
          <span class="jff-demo-btn__text">{{ showSource ? 'Hide' : 'Code' }}</span>
          <span class="jff-demo-btn__chevron" :class="{ 'is-rotated': showSource }" aria-hidden="true">
            <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor">
              <path d="M5 6L0 1L1 0L5 4L9 0L10 1L5 6Z"/>
            </svg>
          </span>
        </button>

        <!-- 复制按钮 -->
        <button
          class="jff-demo-btn"
          @click="copyToClipboard"
          @keydown.enter.prevent="copyToClipboard"
          @keydown.space.prevent="copyToClipboard"
          :class="{ 'copied': copied, 'is-success': copied }"
          :title="copied ? 'Copied!' : 'Copy code'"
          :aria-label="copied ? 'Code copied to clipboard' : 'Copy code to clipboard'"
          type="button"
        >
          <span class="jff-demo-btn__icon" v-html="copied ? checkIcon : copyIcon" aria-hidden="true"></span>
          <span class="jff-demo-btn__text">{{ copied ? 'Copied!' : 'Copy' }}</span>
        </button>

        <!-- 在线编辑按钮 -->
        <button
          class="jff-demo-btn"
          @click="openInStackblitz"
          @keydown.enter.prevent="openInStackblitz"
          @keydown.space.prevent="openInStackblitz"
          title="Open in StackBlitz (online editor)"
          v-if="sourceCode"
          aria-label="Edit code in StackBlitz online editor"
          type="button"
        >
          <span class="jff-demo-btn__icon" v-html="editIcon" aria-hidden="true"></span>
          <span class="jff-demo-btn__text">Edit</span>
        </button>
      </div>
    </div>

    <!-- 源代码区域 -->
    <Transition name="expand-fade">
      <div
        v-if="showSource"
        class="jff-demo-source-code"
        :id="'source-code-' + pathId"
        tabindex="-1"
        role="region"
        aria-label="Vue (TypeScript) source code"
        :aria-hidden="!showSource"
      >
        <div class="vp-code-group">
          <div class="vp-code-group__nav">
            <div class="vp-code-group__nav-left">
              <span class="vp-code-group__label">Vue (TypeScript)</span>
              <span class="jff-demo-shortcut-hint" title="Keyboard shortcuts: Esc to close, Ctrl+C to copy">⌨️</span>
            </div>
            <button
              class="jff-demo-close-btn"
              @click="hideSourceCode"
              title="Close source code (Esc)"
              aria-label="Close source code"
              type="button"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>
          <pre class="language-vue"><code v-html="displayCode"></code></pre>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, shallowRef, nextTick } from 'vue'
import { PathConfig } from '../utils/pathConfig'
import Prism from 'prismjs'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'

const props = defineProps<{
  path: string
  debug?: boolean
}>({
  debug: true
})

const showSource = ref(false)
const copied = ref(false)
const loading = ref(true)
const error = ref<string | null>(null)
const sourceCode = ref('')
const isToolbarHovered = ref(false)
const isFocused = ref(false)

// Use shallowRef for better performance with large component objects
const demoComponent = shallowRef<any>(null)

// Generate unique ID for accessibility
const pathId = computed(() => {
  return props.path.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()
})

const displayCode = computed(() => {
  if (!sourceCode.value) return ''
  return Prism.highlight(sourceCode.value, Prism.languages.markup, 'markup')
})

// SVG 图标
const codeIcon = `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>`
const hideIcon = `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M19 11H7.83l4.88-4.88c.39-.39.39-1.02 0-1.42a.996.996 0 0 0-1.41 0l-6.59 6.59a.996.996 0 0 0 0 1.41l6.59 6.59a.996.996 0 1 0 1.41-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z"/></svg>`
const copyIcon = `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>`
const checkIcon = `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>`
const editIcon = `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>`

onMounted(async () => {
  const startTime = performance.now()

  try {
    let cleanPath = (props.path || '')
      .replace(/:::/g, '')
      .replace(/\s+/g, ' ')
      .trim()

    if (!cleanPath) {
      throw new Error(`Invalid demo path: "${props.path}"`)
    }

    if (props.debug) {
      console.log('\n[>>] [DemoBlock] Loading demo:', cleanPath)
      PathConfig.debug()
    }

    const loadedModule = await PathConfig.loadDemo(cleanPath)

    let candidateComponent = loadedModule.default || loadedModule

    if (!candidateComponent || typeof candidateComponent !== 'object') {
      throw new Error(`Invalid component format for "${cleanPath}". Expected object, got ${typeof candidateComponent}`)
    }

    const hasRender = typeof candidateComponent.render === 'function'
    const hasTemplate = typeof candidateComponent.template === 'string' || candidateComponent.template instanceof Function
    const isSetupComponent = candidateComponent.__vccOpts || candidateComponent.setup

    if (!hasRender && !hasTemplate && !isSetupComponent) {
      throw new Error(`Component "${cleanPath}" is missing template or render function.`)
    }

    demoComponent.value = candidateComponent
    sourceCode.value = await PathConfig.loadDemoSource(cleanPath)

    const endTime = performance.now()

    if (props.debug) {
      console.log(`[OK] [DemoBlock] Demo loaded in ${(endTime - startTime).toFixed(2)}ms`)
      console.log(`[OK] [DemoBlock] Source code length: ${sourceCode.value.length} chars`)
    }

    loading.value = false
  } catch (err: any) {
    console.error('\n[X] [DemoBlock] Failed to load demo:', props.path)
    error.value = err.message || String(err)
    loading.value = false
  }
})

function toggleSourceCode() {
  showSource.value = !showSource.value

  // Focus management for accessibility
  if (showSource.value) {
    nextTick(() => {
      const sourceEl = document.getElementById(`source-code-${pathId.value}`)
      if (sourceEl) {
        sourceEl.focus()
      }
    })
  } else {
    // When hiding, return focus to the Code/Hide button
    nextTick(() => {
      const toolbar = document.querySelector(`[aria-controls="source-code-${pathId.value}"]`) as HTMLElement
      if (toolbar) {
        toolbar.focus()
      }
    })
  }
}

function hideSourceCode() {
  showSource.value = false

  // Return focus to the toggle button when closing
  nextTick(() => {
    const toggleBtn = document.querySelector(`[aria-controls="source-code-${pathId.value}"]`) as HTMLElement
    if (toggleBtn) {
      toggleBtn.focus()
    }
  })
}

function handleEscape() {
  if (showSource.value) {
    hideSourceCode()
  }
}

// Enhanced keyboard navigation
function handleTabKey(event: KeyboardEvent) {
  // Only trap focus when source code is visible
  if (!showSource.value) return

  const sourceEl = document.getElementById(`source-code-${pathId.value}`)
  const closeBtn = sourceEl?.querySelector('.jff-demo-close-btn') as HTMLElement
  const toggleBtn = document.querySelector(`[aria-controls="source-code-${pathId.value}"]`) as HTMLElement

  if (!sourceEl || !closeBtn || !toggleBtn) return

  const focusableElements = [closeBtn, toggleBtn]
  const firstElement = focusableElements[0]
  const lastElement = focusableElements[focusableElements.length - 1]

  if (event.shiftKey) {
    // Shift + Tab: cycle backwards
    if (document.activeElement === firstElement) {
      event.preventDefault()
      lastElement.focus()
    }
  } else {
    // Tab: cycle forwards
    if (document.activeElement === lastElement) {
      event.preventDefault()
      firstElement.focus()
    }
  }
}

function handleFocus() {
  isFocused.value = true
}

function handleBlur() {
  // Delay to allow checking new focus target
  setTimeout(() => {
    const demoBlock = document.querySelector('.jff-demo-block.is-focused') as HTMLElement
    if (demoBlock && !demoBlock.contains(document.activeElement)) {
      isFocused.value = false
    }
  }, 0)
}

// Keyboard shortcut for copying code
function handleCopyShortcut(event: KeyboardEvent) {
  // Only handle when source code is visible and user is focused on the demo block
  if (!showSource.value || !isFocused.value) return

  event.preventDefault()
  copyToClipboard()
}

/**
 * 跨平台 Base64 解码（兼容浏览器 SSR/CSR）
 */
function base64Decode(input: string): string {
  const keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
  let output = ''
  let i = 0

  input = input.replace(/[^A-Za-z0-9+/=]/g, '')

  while (i < input.length) {
    const enc1 = keyStr.indexOf(input.charAt(i++))
    const enc2 = keyStr.indexOf(input.charAt(i++))
    const enc3 = keyStr.indexOf(input.charAt(i++))
    const enc4 = keyStr.indexOf(input.charAt(i++))

    const chr1 = (enc1 << 2) | (enc2 >> 4)
    const chr2 = ((enc2 & 15) << 4) | (enc3 >> 2)
    const chr3 = ((enc3 & 3) << 6) | enc4

    output += String.fromCharCode(chr1)
    if (enc3 !== 64) output += String.fromCharCode(chr2)
    if (enc4 !== 64) output += String.fromCharCode(chr3)
  }

  // UTF-8 decode
  let utf8Output = ''
  let j = 0
  while (j < output.length) {
    const c1 = output.charCodeAt(j++)
    if (c1 < 128) {
      utf8Output += String.fromCharCode(c1)
    } else if (c1 > 191 && c1 < 224) {
      const c2 = output.charCodeAt(j++)
      utf8Output += String.fromCharCode(((c1 & 31) << 6) | (c2 & 63))
    } else {
      const c2 = output.charCodeAt(j++)
      const c3 = output.charCodeAt(j++)
      utf8Output += String.fromCharCode(
        ((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)
      )
    }
  }

  return utf8Output
}

async function copyToClipboard() {
  try {
    const codeToCopy = sourceCode.value

    if (typeof window !== 'undefined' && navigator?.clipboard) {
      await navigator.clipboard.writeText(codeToCopy)
      copied.value = true
      setTimeout(() => { copied.value = false }, 3000) // 延长显示时间到3秒
    } else {
      console.warn('[DemoBlock] Clipboard API not available')
    }
  } catch (err) {
    console.error('Copy failed:', err)

    if (typeof window !== 'undefined' && document) {
      const textarea = document.createElement('textarea')
      textarea.value = sourceCode.value
      textarea.style.cssText = 'position:fixed;opacity:0;'
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      copied.value = true
      setTimeout(() => { copied.value = false }, 3000)
    }
  }
}

function openInStackblitz() {
  if (typeof window === 'undefined') return

  const encodedCode = encodeURIComponent(sourceCode.value)
  const url = `https://stackblitz.com/edit/vue?file=src%2FApp.vue&content=${encodedCode}`
  window.open(url, '_blank', 'noopener,noreferrer')
}


</script>

<style scoped>
/* ====== 容器样式 ====== */
.jff-demo-block {
  border: 1px solid #ebedf0;
  border-radius: 8px;
  margin: 24px 0;
  background-color: #fff;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.jff-demo-block:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.jff-demo-block.is-focused {
  outline: 2px solid #409eff;
  outline-offset: 2px;
}

.jff-demo-block.is-expanded {
  border-color: #409eff;
  box-shadow: 0 4px 20px rgba(64, 158, 255, 0.15);
}

.jff-demo-block.has-error {
  border-color: #f56c6c;
}

/* ====== 预览区域 ====== */
.jff-demo-preview {
  position: relative;
  padding: 32px 24px;
  background-color: #fafafa;
  min-height: 120px;
  transition: background-color 0.2s ease;
}

.jff-demo-preview-container {
  position: relative;
  z-index: 1;
}

/* ====== 工具栏包装器（独立区域）===== */
.jff-demo-toolbar-wrapper {
  position: relative;
  z-index: 10;
  border-top: 1px solid #ebedf0;
  border-bottom: 1px solid #ebedf0;
  background-color: #fff;
  margin: 0;
  padding: 8px 16px;
  opacity: 1;
  transform: none;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: auto;
}

.jff-demo-toolbar-wrapper.is-visible {
  /* 保持可见性 */
}

.jff-demo-toolbar {
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  justify-content: flex-end;
  background: transparent;
  border-radius: 0;
  box-shadow: none;
  opacity: 1;
  transform: none;
  transition: none;
  pointer-events: auto;
}

/* 展开时或 hover 时显示工具栏 */
.jff-demo-block.is-expanded .jff-demo-toolbar,
.jff-demo-toolbar-wrapper:hover .jff-demo-toolbar,
.jff-demo-toolbar-wrapper.is-visible .jff-demo-toolbar,
.jff-demo-toolbar.is-always-visible {
  opacity: 1 !important;
  transform: none !important;
  pointer-events: auto !important;
}

.jff-demo-block.is-expanded .jff-demo-toolbar,
.jff-demo-toolbar.is-always-visible {
  box-shadow: none;
}

/* ====== 按钮基础样式 ====== */
.jff-demo-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 500;
  color: #606266;
  background: transparent;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  user-select: none;
  outline: none;
}

.jff-demo-btn:hover {
  color: #409eff;
  background: rgba(64, 158, 255, 0.06);
}

.jff-demo-btn:focus-visible {
  outline: 2px solid #409eff;
  outline-offset: 2px;
  background: rgba(64, 158, 255, 0.04);
}

.jff-demo-btn:active {
  transform: scale(0.96);
}

/* 主要操作按钮（Code/Hide）*/
.jff-demo-btn--primary {
  font-weight: 600;
  color: #303133;
}

.jff-demo-btn--primary:hover {
  color: #409eff;
  background: rgba(64, 158, 255, 0.08);
}

/* 成功状态（复制成功）*/
.jff-demo-btn.copied,
.jff-demo-btn.is-success {
  color: #67c23a !important;
  background: rgba(103, 194, 58, 0.08) !important;
}

/* 按钮图标 */
.jff-demo-btn__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.jff-demo-btn__text {
  line-height: 1;
}

/* 箭头指示器 */
.jff-demo-btn__chevron {
  display: flex;
  align-items: center;
  margin-left: 2px;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: #909399;
}

.jff-demo-btn__chevron.is-rotated {
  transform: rotate(180deg);
}

/* ====== 源代码区域 ====== */
.jff-demo-source-code {
  background-color: #282c34;
  overflow-x: auto;
  border-top: 1px solid #3e4451;
  position: relative;
}

.vp-code-group {
  margin: 0;
}

.vp-code-group__nav {
  padding: 10px 16px;
  background: #21252b;
  border-bottom: 1px solid #3e4451;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 42px;
}

.vp-code-group__nav-left {
  display: flex;
  align-items: center;
  gap: 8px;
}

/* 快捷键提示 */
.jff-demo-shortcut-hint {
  font-size: 14px;
  opacity: 0.6;
  cursor: help;
  transition: opacity 0.2s ease;
}

.jff-demo-shortcut-hint:hover {
  opacity: 1;
}

.vp-code-group__label {
  font-size: 12px;
  color: #abb2bf;
  font-family: 'Monaco', 'Menlo', monospace;
  font-weight: 500;
}

/* 关闭按钮 */
.jff-demo-close-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 0;
  background: transparent;
  border: none;
  border-radius: 4px;
  color: #abb2bf;
  cursor: pointer;
  transition: all 0.2s ease;
}

.jff-demo-close-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
}

.jff-demo-close-btn:focus-visible {
  outline: 2px solid #409eff;
  outline-offset: 2px;
}

/* Prism.js 语法高亮样式 */
.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: #5c6370;
  font-style: italic;
}

.token.punctuation {
  color: #abb2bf;
}

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol,
.token.deleted {
  color: #e06c75;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
  color: #98c379;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
  color: #56b6c2;
}

.token.atrule,
.token.attr-value,
.token.keyword {
  color: #c678dd;
}

.token.function,
.token.class-name {
  color: #61afef;
}

.token.regex,
.token.important,
.token.variable {
  color: #d19a66;
}

/* 代码块样式 */
.language-vue {
  padding: 20px !important;
  margin: 0 !important;
  font-family: 'Monaco', 'Menlo', 'Consolas', 'Courier New', monospace !important;
  font-size: 13px !important;
  line-height: 1.7 !important;
  color: #abb2bf !important;
  tab-size: 2 !important;
  word-break: normal !important;
  white-space: pre-wrap !important;
  overflow-x: auto !important;
  background: transparent !important;
  min-height: 200px;
}

.language-vue code {
  display: block;
  background: transparent !important;
}

/* ====== 加载和错误状态 ====== */
.jff-demo-loading,
.jff-demo-error {
  text-align: center;
  padding: 56px 24px;
  color: #909399;
}

.jff-demo-loading p,
.jff-demo-error p {
  margin: 0;
}

/* ====== 动画 ====== */
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

/* 展开/收起过渡动画 */
.expand-fade-enter-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.expand-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.expand-fade-enter-from,
.expand-fade-leave-to {
  max-height: 0;
  opacity: 0;
  padding-top: 0;
  padding-bottom: 0;
  transform: translateY(-10px);
}

.expand-fade-enter-to,
.expand-fade-leave-from {
  max-height: 1000px;
  opacity: 1;
  padding-top: 0;
  padding-bottom: 0;
  transform: translateY(0);
}

/* ====== 响应式设计 ====== */
@media (max-width: 768px) {
  .jff-demo-preview {
    padding: 20px 16px;
    min-height: 80px;
  }

  .jff-demo-toolbar {
    top: -18px;
    right: 12px;
    padding: 5px 6px;
    gap: 2px;
    border-radius: 6px;
  }

  .jff-demo-btn {
    padding: 5px 8px;
    font-size: 11px;
    gap: 3px;
  }

  .jff-demo-btn__text {
    /* 小屏幕隐藏文字，只显示图标 */
    display: none;
  }

  .jff-demo-btn__chevron {
    display: none;
  }

  .language-vue {
    padding: 16px !important;
    font-size: 12px !important;
    min-height: 150px;
  }

  .vp-code-group__nav {
    padding: 8px 12px;
  }
}

@media (max-width: 480px) {
  .jff-demo-block {
    margin: 16px 0;
    border-radius: 6px;
  }

  .jff-demo-toolbar {
    top: -16px;
    right: 8px;
  }

  .jff-demo-edit-btn {
    display: none; /* 超小屏幕隐藏 Edit 按钮 */
  }
}

/* ====== Dark Mode ====== */
:global(html.dark) .jff-demo-block {
  background-color: #1e1e1e;
  border-color: #3e3e3e;
}

:global(html.dark) .jff-demo-block:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
}

:global(html.dark) .jff-demo-block.is-expanded {
  border-color: #409eff;
  box-shadow: 0 4px 20px rgba(64, 158, 255, 0.2);
}

:global(html.dark) .jff-demo-preview {
  background-color: #252526;
}

:global(html.dark) .jff-demo-toolbar {
  background: #2d2d30;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
}

:global(html.dark) .jff-demo-block.is-expanded .jff-demo-toolbar {
  box-shadow: 0 4px 16px rgba(64, 158, 255, 0.2), 0 0 0 1px rgba(64, 158, 255, 0.3);
}

:global(html.dark) .jff-demo-btn {
  color: #cccccc;
}

:global(html.dark) .jff-demo-btn:hover {
  color: #409eff;
  background: rgba(64, 158, 255, 0.15);
}

:global(html.dark) .jff-demo-btn--primary {
  color: #e5eaf3;
}

:global(html.dark) .jff-demo-btn__chevron {
  color: #6b7280;
}

:global(html.dark) .jff-demo-source-code {
  background-color: #1e1e1e;
  border-top-color: #3e3e3e;
}

:global(html.dark) .vp-code-group__nav {
  background: #18181b;
  border-bottom-color: #3e3e3e;
}

:global(html.dark) .jff-demo-close-btn:hover {
  background: rgba(255, 255, 255, 0.15);
}
</style>
