<template>
  <div class="jff-demo-container">
    <!-- 示例展示区域 -->
    <div class="jff-demo-container__preview">
      <div ref="previewRef" class="jff-demo-container__preview-inner">
        <slot />
      </div>
    </div>

    <!-- 代码展示区域 -->
    <div v-show="showCode" class="jff-demo-container__code">
      <div v-if="codeTitle" class="jff-demo-container__code-title">{{ codeTitle }}</div>
      <div ref="codeRef" class="jff-demo-container__code-content" />
    </div>

    <!-- 展开/收起按钮 -->
    <div class="jff-demo-container__actions" @click="toggleCode">
      <span class="jff-demo-container__action-text">
        {{ showCode ? 'Hide Code' : 'Show Code' }}
      </span>
      <span class="jff-demo-container__action-icon" :class="{ 'is-open': showCode }">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
        </svg>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
  codeTitle?: string
}>()

const showCode = ref(false)
const previewRef = ref<HTMLElement>()
const codeRef = ref<HTMLElement>()

onMounted(() => {
  // 从 slot 内容中提取代码块
  if (previewRef.value && codeRef.value) {
    const codeBlocks = previewRef.value.querySelectorAll('div[class*="language-"]')
    
    if (codeBlocks.length > 0) {
      codeBlocks.forEach((block) => {
        const cloned = block.cloneNode(true) as HTMLElement
        codeRef.value!.appendChild(cloned)
        block.remove()
      })
    }
  }
})

const toggleCode = () => {
  showCode.value = !showCode.value
}
</script>

<style>
.jff-demo-container {
  margin: 24px 0;
  border: 1px solid var(--jff-border-color-lighter);
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--jff-bg-color);
  transition: box-shadow 0.3s ease;
}

.jff-demo-container:hover {
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

/* 预览区域 */
.jff-demo-container__preview {
  padding: 32px 24px;
  background-color: var(--jff-bg-color);
  border-bottom: 1px solid var(--jff-border-color-lighter);
}

.jff-demo-container__preview-inner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 60px;
  color: var(--jff-text-color-primary);
}

/* 预览区域内的代码块 - 设置为透明背景，让容器背景色决定 */
.jff-demo-container__preview-inner div[class*="language-"] {
  background-color: transparent !important;
}

.jff-demo-container__preview-inner div[class*="language-"] pre {
  background-color: transparent !important;
}

.jff-demo-container__preview-inner div[class*="language-"] code {
  background-color: transparent !important;
  color: var(--vp-code-color);
}

.jff-demo-container__preview-inner .shiki {
  background-color: transparent !important;
}

.jff-demo-container__preview-inner .shiki code,
.jff-demo-container__preview-inner .shiki span {
  color: var(--vp-code-color) !important;
}

/* 黑暗模式下预览区域的背景色 */
html.dark .jff-demo-container__preview {
  background-color: var(--vp-bg-color) !important;
}

html.dark .jff-demo-container__preview-inner {
  color: var(--vp-text-color) !important;
}

/* 代码区域 */
.jff-demo-container__code {
  background-color: var(--vp-code-block-bg);
  border-bottom: 1px solid var(--jff-border-color-lighter);
}

.jff-demo-container__code-content {
  padding: 0;
  min-height: auto;
}

/* 代码块容器 */
.jff-demo-container__code-content div[class*="language-"] {
  margin: 0 !important;
  border-radius: 0 !important;
  background-color: transparent !important;
  overflow: visible !important;
  height: auto !important;
}

.jff-demo-container__code-content div[class*="language-"] pre {
  margin: 0 !important;
  padding: 8px 16px !important;
  font-family: var(--vp-font-family-mono, 'Fira Code', 'Consolas', monospace) !important;
  font-size: 12px !important;
  line-height: 1.2 !important;
  background-color: transparent !important;
  overflow-x: auto !important;
  overflow-y: visible !important;
  display: block !important;
}

.jff-demo-container__code-content div[class*="language-"] code {
  font-family: var(--vp-font-family-mono, 'Fira Code', 'Consolas', monospace) !important;
  font-size: 12px !important;
  line-height: 1.2 !important;
  background-color: transparent !important;
  color: var(--vp-code-color);
}

/* Shiki 代码高亮 */
.jff-demo-container__code-content .shiki {
  background-color: transparent !important;
  padding: 8px 16px !important;
  overflow: visible !important;
}

.jff-demo-container__code-content .shiki .line {
  display: block;
  min-height: 1.2em;
}

/* 代码文字颜色 - 使用 VitePress CSS 变量支持主题切换 */
.jff-demo-container__code-content code,
.jff-demo-container__code-content .shiki code,
.jff-demo-container__code-content .shiki span {
  color: var(--vp-code-color) !important;
}

.jff-demo-container__code-title {
  padding: 12px 24px;
  font-size: 13px;
  font-weight: 500;
  color: var(--jff-text-color-secondary);
  border-bottom: 1px solid var(--jff-border-color-lighter);
  background-color: var(--jff-bg-color);
}

/* 操作栏 */
.jff-demo-container__actions {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  background-color: var(--jff-bg-color);
  cursor: pointer;
  transition: all 0.2s ease;
  user-select: none;
}

.jff-demo-container__actions:hover {
  background-color: var(--jff-fill-color-light);
  color: var(--jff-color-primary);
}

.jff-demo-container__action-text {
  font-size: 13px;
  font-weight: 500;
  color: var(--jff-text-color-secondary);
  margin-right: 6px;
  transition: color 0.2s ease;
}

.jff-demo-container__actions:hover .jff-demo-container__action-text {
  color: var(--jff-color-primary);
}

.jff-demo-container__action-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--jff-text-color-secondary);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.jff-demo-container__actions:hover .jff-demo-container__action-icon {
  color: var(--jff-color-primary);
}

.jff-demo-container__action-icon.is-open {
  transform: rotate(180deg);
}

/* 暗黑模式适配 - 使用 html.dark 选择器 */
html.dark .jff-demo-container {
  border-color: var(--jff-border-color-dark);
  background-color: var(--jff-bg-color);
}

html.dark .jff-demo-container:hover {
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
}

html.dark .jff-demo-container__preview {
  border-bottom-color: var(--jff-border-color-dark);
  background-color: var(--jff-bg-color);
}

/* 暗黑模式下预览区域内的代码块 */
html.dark .jff-demo-container__preview-inner div[class*="language-"] {
  background-color: transparent !important;
}

html.dark .jff-demo-container__preview-inner div[class*="language-"] pre {
  background-color: transparent !important;
}

html.dark .jff-demo-container__preview-inner div[class*="language-"] code {
  background-color: transparent !important;
  color: var(--vp-code-color) !important;
}

html.dark .jff-demo-container__preview-inner .shiki {
  background-color: transparent !important;
}

html.dark .jff-demo-container__preview-inner .shiki code,
html.dark .jff-demo-container__preview-inner .shiki span {
  color: var(--vp-code-color) !important;
}

html.dark .jff-demo-container__code {
  background-color: var(--vp-code-block-bg);
}

html.dark .jff-demo-container__actions {
  background-color: var(--jff-bg-color);
}

html.dark .jff-demo-container__actions:hover {
  background-color: var(--jff-fill-color-dark);
}
</style>
