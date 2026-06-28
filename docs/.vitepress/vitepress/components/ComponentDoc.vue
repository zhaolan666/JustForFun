<template>
  <div class="jff-component-doc">
    <!-- Component Name Header -->
    <div v-if="componentName" class="jff-doc-header">
      <h2 class="jff-doc-component-name">{{ componentName }} API</h2>
      <p v-if="description" class="jff-doc-description">{{ description }}</p>
    </div>

    <!-- Basic Usage 代码示例 -->
    <section v-if="basicUsage && basicUsage.code" class="jff-doc-section jff-code-section">
      <h3 class="jff-doc-title">
        <svg class="jff-title-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="16,18 22,12 16,6"></polyline>
          <polyline points="8,6 2,12 8,18"></polyline>
        </svg>
        {{ basicUsage.title || 'Basic Usage' }}
        <span v-if="basicUsage.description" class="jff-code-desc">{{ basicUsage.description }}</span>
      </h3>
      <div class="jff-code-example-wrapper">
        <div class="jff-code-header">
          <span class="jff-code-lang">{{ basicUsage.language || 'vue' }}</span>
          <button class="jff-copy-btn" @click="copyCode(basicUsage.code)" :class="{ copied: copiedBasic }">
            <svg v-if="!copiedBasic" class="jff-copy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path>
            </svg>
            <svg v-else class="jff-copy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20,6 9,17 4,12"></polyline>
            </svg>
            {{ copiedBasic ? 'Copied!' : 'Copy' }}
          </button>
        </div>
        <pre class="jff-code-block"><code :class="'language-' + (basicUsage.language || 'vue')">{{ basicUsage.code }}</code></pre>
        <div v-if="basicUsage.preview" class="jff-preview-area">
          <div class="jff-preview-label">Preview</div>
          <div class="jff-preview-content" v-html="basicUsage.preview"></div>
        </div>
      </div>
    </section>

    <!-- 更多代码示例 -->
    <section v-for="(example, idx) in examples" :key="idx" class="jff-doc-section jff-code-section">
      <h3 class="jff-doc-title">
        <svg class="jff-title-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"></path>
          <polyline points="14,2 14,8 20,8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10,9 9,9 8,9"></polyline>
        </svg>
        {{ example.title }}
        <span v-if="example.description" class="jff-code-desc">{{ example.description }}</span>
      </h3>
      <div class="jff-code-example-wrapper">
        <div class="jff-code-header">
          <span class="jff-code-lang">{{ example.language || 'vue' }}</span>
          <button class="jff-copy-btn" @click="copyCode(example.code, idx)" :class="{ copied: copiedExamples[idx] }">
            <svg v-if="!copiedExamples[idx]" class="jff-copy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path>
            </svg>
            <svg v-else class="jff-copy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20,6 9,17 4,12"></polyline>
            </svg>
            {{ copiedExamples[idx] ? 'Copied!' : 'Copy' }}
          </button>
        </div>
        <pre class="jff-code-block"><code :class="'language-' + (example.language || 'vue')">{{ example.code }}</code></pre>
        <div v-if="example.preview" class="jff-preview-area">
          <div class="jff-preview-label">Preview</div>
          <div class="jff-preview-content" v-html="example.preview"></div>
        </div>
      </div>
    </section>

    <!-- Attributes 表格 -->
    <section v-if="attributes && attributes.length > 0" class="jff-doc-section">
      <h3 class="jff-doc-title">
        <svg class="jff-title-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
          <path d="M9 14l2 2 4-4"/>
        </svg>
        Attributes
        <span class="jff-badge">{{ attributes.length }}</span>
      </h3>
      <ApiTable :columns="attributeColumns" :data="attributes" />
    </section>

    <!-- Events 表格 -->
    <section v-if="events && events.length > 0" class="jff-doc-section">
      <h3 class="jff-doc-title">
        <svg class="jff-title-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
        Events
        <span class="jff-badge">{{ events.length }}</span>
      </h3>
      <ApiTable :columns="eventColumns" :data="events" />
    </section>

    <!-- Slots 表格 -->
    <section v-if="slots && slots.length > 0" class="jff-doc-section">
      <h3 class="jff-doc-title">
        <svg class="jff-title-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <line x1="9" y1="3" x2="9" y2="21"/>
          <line x1="15" y1="3" x2="15" y2="21"/>
          <line x1="3" y1="9" x2="21" y2="9"/>
          <line x1="3" y1="15" x2="21" y2="15"/>
        </svg>
        Slots
        <span class="jff-badge">{{ slots.length }}</span>
      </h3>
      <ApiTable :columns="slotColumns" :data="slots" />
    </section>

    <!-- Exposes 表格 -->
    <section v-if="exposes && exposes.length > 0" class="jff-doc-section">
      <h3 class="jff-doc-title">
        <svg class="jff-title-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/>
        </svg>
        Exposes
        <span class="jff-badge">{{ exposes.length }}</span>
      </h3>
      <ApiTable :columns="exposeColumns" :data="exposes" />
    </section>

    <!-- Empty State -->
    <div v-if="!hasContent" class="jff-empty-state">
      <svg class="jff-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14,2 14,8 20,8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10,9 9,9 8,9"/>
      </svg>
      <p>No API documentation available yet.</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'
import ApiTable from './ApiTable.vue'

const props = defineProps<{
  componentName?: string
  description?: string
  basicUsage?: {
    title?: string
    description?: string
    code: string
    language?: string
    preview?: string
  }
  examples?: Array<{
    title: string
    description?: string
    code: string
    language?: string
    preview?: string
  }>
  attributes?: any[]
  events?: any[]
  slots?: any[]
  methods?: any[]
  exposes?: any[]
}>()

const hasContent = computed(() => {
  return (
    !!props.basicUsage?.code ||
    (props.examples?.length > 0) ||
    (props.attributes?.length > 0) ||
    (props.events?.length > 0) ||
    (props.slots?.length > 0) ||
    ((props.exposes || props.methods)?.length > 0)
  )
})

const copiedBasic = ref(false)
const copiedExamples = reactive<Record<number, boolean>>({})

async function copyCode(code: string, index?: number) {
  try {
    await navigator.clipboard.writeText(code)
    if (index === undefined) {
      copiedBasic.value = true
      setTimeout(() => { copiedBasic.value = false }, 2000)
    } else {
      copiedExamples[index] = true
      setTimeout(() => { copiedExamples[index] = false }, 2000)
    }
  } catch (err) {
    console.error('Failed to copy code:', err)
  }
}

const attributeColumns = [
  { key: 'name', label: 'Attribute', width: '20%' },
  { key: 'description', label: 'Description', width: '38%' },
  { key: 'type', label: 'Type', width: '27%' },
  { key: 'default', label: 'Default', width: '15%' }
]

const eventColumns = [
  { key: 'name', label: 'Event Name', width: '20%' },
  { key: 'description', label: 'Description', width: '50%' },
  { key: 'parameters', label: 'Parameters', width: '30%' }
]

const slotColumns = [
  { key: 'name', label: 'Slot Name', width: '22%' },
  { key: 'description', label: 'Description', width: '78%' }
]

const exposeColumns = [
  { key: 'name', label: 'Name', width: '20%' },
  { key: 'description', label: 'Description', width: '43%' },
  { key: 'type', label: 'Type', width: '37%' }
]
</script>

<style lang="scss">
.jff-component-doc {
  margin-top: 40px;
  padding: 32px;
  background: #fafbfc;
  border-radius: 12px;
  border: 1px solid #e8ecf1;
}

.jff-doc-header {
  margin-bottom: 36px;
  padding-bottom: 20px;
  border-bottom: 2px solid #e8f0fe;
}

.jff-doc-component-name {
  font-size: 1.75rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 12px 0;
  display: flex;
  align-items: center;
  gap: 16px;

  &::before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 30px;
    background: linear-gradient(180deg, #4f7cff, #6b9bff);
    border-radius: 3px;
    flex-shrink: 0;
  }
}

.jff-doc-description {
  font-size: 0.95rem;
  color: #666;
  margin: 0;
  line-height: 1.7;
  padding-left: 22px;
}

.jff-doc-section {
  display: block !important;
  margin-bottom: 64px !important;
  background: #ffffff !important;
  border: 1px solid #e2e8f0 !important;
  border-radius: 10px !important;
  overflow: visible !important;
  min-height: auto !important;
  max-height: none !important;
  height: auto !important;

  &:last-child {
    margin-bottom: 24px !important;
  }
}

.jff-code-section {
  .jff-doc-title {
    border-left-color: #10b981;

    &:hover {
      color: #059669;
      border-left-color: #047857;

      .jff-title-icon {
        stroke: #059669;
      }

      .jff-badge {
        box-shadow: 0 2px 10px rgba(16, 185, 129, 0.4);
      }
    }

    .jff-title-icon {
      stroke: #10b981;
    }
  }
}

.jff-code-desc {
  display: inline-block;
  font-size: 0.85rem;
  font-weight: 400;
  color: #64748b;
  margin-left: 8px;
  padding: 2px 10px;
  background: #f1f5f9;
  border-radius: 4px;
}

.jff-code-example-wrapper {
  position: relative;
  border-radius: 0 0 10px 10px;
  overflow: hidden;
}

.jff-code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  background: #1e293b;
  border-bottom: 1px solid #334155;
}

.jff-code-lang {
  font-size: 0.75rem;
  font-weight: 600;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.jff-copy-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  font-size: 0.75rem;
  font-weight: 500;
  color: #cbd5e1;
  background: transparent;
  border: 1px solid #475569;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: white;
    background: #334155;
    border-color: #64748b;
  }

  &.copied {
    color: #34d399;
    border-color: #059669;
    background: rgba(16, 185, 129, 0.1);
  }
}

.jff-copy-icon {
  width: 14px;
  height: 14px;
}

.jff-code-block {
  margin: 0;
  padding: 20px;
  background: #0f172a;
  overflow-x: auto;
  font-family: SF Mono, Consolas, Liberation Mono, Menlo, monospace;
  font-size: 0.875rem;
  line-height: 1.6;
  color: #e2e8f0;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #1e293b;
  }

  &::-webkit-scrollbar-thumb {
    background: #475569;
    border-radius: 3px;
  }

  code {
    font-family: inherit;
    font-size: inherit;
    background: none;
    padding: 0;
  }
}

.jff-preview-area {
  padding: 20px;
  background: #fafbfc;
  border-top: 1px solid #e2e8f0;
}

.jff-preview-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 12px;
}

.jff-preview-content {
  padding: 20px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  min-height: 60px;
}

.jff-doc-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0;
  padding: 16px 20px 18px 20px;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border-left: 4px solid #4f7cff;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.25s ease;

  &:hover {
    color: #4f7cff;
    background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
    border-left-color: #2563eb;

    .jff-title-icon {
      transform: scale(1.15) rotate(-5deg);
      stroke: #4f7cff;
    }

    .jff-badge {
      box-shadow: 0 2px 10px rgba(79, 124, 255, 0.4);
      transform: translateY(-1px);
    }
  }
}

.jff-title-icon {
  width: 20px;
  height: 20px;
  stroke: #4f7cff;
  transition: all 0.25s ease;
  flex-shrink: 0;
}

.jff-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 28px;
  height: 24px;
  padding: 0 10px;
  font-size: 0.75rem;
  font-weight: 700;
  color: white;
  background: linear-gradient(135deg, #4f7cff 0%, #6b9bff 100%);
  border-radius: 12px;
  transition: all 0.25s ease;
  letter-spacing: 0.02em;
}

.jff-empty-state {
  text-align: center;
  padding: 60px 24px;
  color: #bcc5cf;

  .jff-empty-icon {
    width: 64px;
    height: 64px;
    margin: 0 auto 16px;
    opacity: 0.35;
  }

  p {
    font-size: 1rem;
    margin: 0;
  }
}

html.dark .jff-component-doc {
  background: #18181b;
  border-color: #27272a;
}

html.dark .jff-doc-header {
  border-bottom-color: #27272a;
}

html.dark .jff-doc-component-name {
  color: #fafafa;
  
  &::before {
    background: linear-gradient(180deg, #6b9bff, #93bbff);
  }
}

html.dark .jff-doc-description {
  color: #a1a1aa;
}

html.dark .jff-doc-section {
  background: #1e293b;
  border-color: #334155;
}

html.dark .jff-code-section {
  .jff-doc-title {
    border-left-color: #059669;

    &:hover {
      color: #34d399;
      border-left-color: #10b981;

      .jff-title-icon {
        stroke: #34d399;
      }
    }

    .jff-title-icon {
      stroke: #059669;
    }
  }

  .jff-code-desc {
    color: #94a3b8;
    background: #27272a;
  }
}

html.dark .jff-doc-title {
  color: #f1f5f9;
  background: linear-gradient(135deg, #1e293b 0%, #27272a 100%);
  border-left-color: #6b9bff;
  border-bottom-color: #334155;

  &:hover {
    color: #93bbff;
    background: linear-gradient(135deg, rgba(107, 187, 255, 0.1) 0%, rgba(147, 187, 255, 0.15) 100%);
    border-left-color: #60a5fa;
  }
}

html.dark .jff-code-header {
  background: #0f172a;
  border-bottom-color: #1e293b;
}

html.dark .jff-code-block {
  background: #020617;
  color: #e2e8f0;
}

html.dark .jff-preview-area {
  background: #1e293b;
  border-top-color: #334155;
}

html.dark .jff-preview-label {
  color: #94a3b8;
}

html.dark .jff-preview-content {
  background: #0f172a;
  border-color: #334155;
}

html.dark .jff-empty-state {
  color: #52525b;
}
</style>
