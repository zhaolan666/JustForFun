<template>
  <div class="tag-demo-enhanced">
    <!-- 基础用法 -->
    <div class="demo-section">
      <h4 class="section-title">Basic Tags</h4>
      <div class="flex flex-wrap gap-3 items-center">
        <JffTag>Default</JffTag>
        <JffTag type="success">Success</JffTag>
        <JffTag type="warning">Warning</JffTag>
        <JffTag type="danger">Danger</JffTag>
        <JffTag type="info">Info</JffTag>
      </div>
    </div>

    <!-- 可关闭标签 -->
    <div class="demo-section">
      <h4 class="section-title">Closable Tags</h4>
      <div class="flex flex-wrap gap-3 items-center">
        <JffTag v-for="tag in tags" :key="tag.name" :type="tag.type" closable @close="removeTag(tag.name)">
          {{ tag.label }}
        </JffTag>
        <button
          v-if="tags.length > 0"
          class="px-3 py-1 border border-dashed border-gray-300 rounded text-gray-500 text-sm hover:border-blue-400 hover:text-blue-500 transition-colors"
          @click="showInput = true"
        >
          + New Tag
        </button>
      </div>

      <!-- 添加新标签输入框 -->
      <div v-if="showInput" class="mt-3 flex gap-2">
        <input
          ref="inputRef"
          v-model="newTagName"
          placeholder="Enter tag name"
          class="px-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500"
          @keyup.enter="addTag"
          @keyup.escape="showInput = false"
        />
        <button
          class="px-4 py-1.5 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors"
          @click="addTag"
        >
          Add
        </button>
        <button
          class="px-4 py-1.5 bg-gray-100 text-gray-600 rounded text-sm hover:bg-gray-200 transition-colors"
          @click="showInput = false"
        >
          Cancel
        </button>
      </div>
    </div>

    <!-- 不同尺寸 -->
    <div class="demo-section">
      <h4 class="section-title">Tag Sizes</h4>
      <div class="flex flex-wrap gap-3 items-center">
        <JffTag size="large" type="primary">Large Tag</JffTag>
        <JffTag size="medium" type="primary">Medium Tag</JffTag>
        <JffTag size="small" type="primary">Small Tag</JffTag>
      </div>
    </div>

    <!-- 圆角标签 -->
    <div class="demo-section">
      <h4 class="section-title">Round Tags</h4>
      <div class="flex flex-wrap gap-3 items-center">
        <JffTag round>Default Round</JffTag>
        <JffTag round type="success">Success Round</JffTag>
        <JffTag round type="danger">Danger Round</JffTag>
      </div>
    </div>

    <!-- 主题色变体 -->
    <div class="demo-section">
      <h4 class="section-title">Effect Variants</h4>
      <div class="flex flex-wrap gap-3 items-center">
        <JffTag effect="dark" type="info">Dark Effect</JffTag>
        <JffTag effect="light" type="warning">Light Effect</JffTag>
        <JffTag effect="plain" type="danger">Plain Effect</JffTag>
      </div>
    </div>

    <!-- 动态编辑 -->
    <div class="demo-section">
      <h4 class="section-title">Dynamic Tags (Editable)</h4>
      <div class="p-4 bg-gray-50 rounded-lg">
        <p class="text-sm text-gray-600 mb-3">Click on a tag to edit it:</p>
        <div class="flex flex-wrap gap-2">
          <JffTag
            v-for="(tag, index) in editableTags"
            :key="index"
            closable
            @close="editableTags.splice(index, 1)"
          >
            {{ tag }}
          </JffTag>
        </div>
        <p class="mt-3 text-xs text-gray-500">
          Total tags: {{ editableTags.length }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import JffTag from '@justforfun-ui/components/tag/src/tag.vue'

const showInput = ref(false)
const newTagName = ref('')
const inputRef = ref<HTMLInputElement>()

const tags = ref([
  { name: 'vue', label: 'Vue.js', type: 'success' as const },
  { name: 'react', label: 'React', type: 'info' as const },
  { name: 'angular', label: 'Angular', type: 'danger' as const }
])

const editableTags = ref(['Frontend', 'Backend', 'DevOps'])

function removeTag(name: string) {
  const index = tags.value.findIndex(t => t.name === name)
  if (index !== -1) {
    tags.value.splice(index, 1)
  }
}

async function addTag() {
  if (!newTagName.value.trim()) return

  const colors = ['success', 'warning', 'danger', 'info'] as const
  const randomColor = colors[Math.floor(Math.random() * colors.length)]

  tags.value.push({
    name: newTagName.value.toLowerCase().replace(/\s+/g, '-'),
    label: newTagName.value,
    type: randomColor
  })

  newTagName.value = ''
  showInput.value = false

  await nextTick()
  inputRef.value?.focus()
}
</script>

<style scoped>
.tag-demo-enhanced {
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
