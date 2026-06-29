const e=`<template>
  <div class="input-demo-enhanced">
    <!-- 基础输入框 -->
    <div class="demo-section">
      <h4 class="section-title">Basic Inputs</h4>
      <div class="flex flex-col gap-4 max-w-md">
        <JffInput v-model="value1" placeholder="Please input" />

        <JffInput v-model="value2" placeholder="Disabled" disabled />

        <p class="text-sm text-gray-600">Value: "{{ value1 || 'Empty' }}"</p>
      </div>
    </div>

    <!-- 不同类型 -->
    <div class="demo-section">
      <h4 class="section-title">Input Types</h4>
      <div class="flex flex-col gap-4 max-w-md space-y-3">
        <JffInput v-model="textValue" type="text" placeholder="Text input" />
        <JffInput v-model="passwordValue" type="password" placeholder="Password" show-password />
        <JffInput v-model="urlValue" type="url" placeholder="https://example.com" />
        <JffInput v-model="emailValue" type="email" placeholder="user@example.com" />
        <JffInput v-model="numberValue" type="number" placeholder="Number" :max="100" :min="0" />
      </div>
    </div>

    <!-- 可清空 -->
    <div class="demo-section">
      <h4 class="section-title">Clearable Input</h4>
      <div class="flex gap-6 items-center max-w-md">
        <JffInput
          v-model="clearableValue"
          placeholder="Type something and click the clear icon"
          clearable
          size="large"
          class="flex-1"
        />
        <span class="text-sm text-gray-500 whitespace-nowrap">{{ clearableValue.length }} characters</span>
      </div>
    </div>

    <!-- 带前后缀 -->
    <div class="demo-section">
      <h4 class="section-title">With Prefix / Suffix</h4>
      <div class="flex flex-col gap-4 max-w-md">
        <!-- 前缀图标 -->
        <JffInput v-model="searchValue" placeholder="Search...">
          <template #prefix>
            <span class="i-ri-search-line text-gray-400"></span>
          </template>
        </JffInput>

        <!-- 后缀按钮 -->
        <JffInput v-model="urlInput" placeholder="Enter URL">
          <template #suffix>
            <button class="px-2 py-1 bg-blue-500 text-white rounded text-xs hover:bg-blue-600 transition-colors">
              Go
            </button>
          </template>
        </JffInput>

        <!-- 前置文字 + 后置文字 -->
        <JffInput v-model="moneyValue" placeholder="Amount">
          <template #prefix>$</template>
          <template #suffix>USD</template>
        </JffInput>

        <!-- 复合使用 -->
        <JffInput v-model="emailInput" placeholder="Email address">
          <template #prefix>
            <span class="i-ri-mail-line text-gray-400"></span>
          </template>
          <template #suffix>
            <button class="text-blue-500 hover:text-blue-600 text-sm font-medium">Verify</button>
          </template>
        </JffInput>
      </div>
    </div>

    <!-- 文本域 -->
    <div class="demo-section">
      <h4 class="section-title">Textarea</h4>
      <div class="flex gap-6 max-w-xl">
        <div class="flex-1">
          <JffInput
            v-model="textareaValue"
            type="textarea"
            placeholder="Enter your message..."
            :rows="4"
            :maxlength="200"
            show-word-limit
          />
        </div>

        <div class="w-48 p-4 bg-gray-50 rounded-lg text-sm">
          <p class="font-medium mb-2">Preview:</p>
          <p class="text-gray-600 whitespace-pre-wrap">{{ textareaValue || 'No content' }}</p>
          <p class="mt-2 text-xs text-gray-400">
            {{ textareaValue.length }}/200 characters
          </p>
        </div>
      </div>
    </div>

    <!-- 尺寸变体 -->
    <div class="demo-section">
      <h4 class="section-title">Input Sizes</h4>
      <div class="space-y-3 max-w-md">
        <JffInput v-model="sizeLarge" size="large" placeholder="Large size" />
        <JffInput v-model="sizeDefault" placeholder="Default (medium) size" />
        <JffInput v-model="sizeSmall" size="small" placeholder="Small size" />
      </div>
    </div>

    <!-- 验证状态 -->
    <div class="demo-section">
      <h4 class="section-title">Validation States</h4>
      <div class="flex flex-col gap-4 max-w-md">
        <div>
          <label class="block text-sm font-medium mb-1 text-green-600">Success State:</label>
          <JffInput v-model="successValue" placeholder="Valid input" status="success" />
        </div>

        <div>
          <label class="block text-sm font-medium mb-1 text-yellow-600">Warning State:</label>
          <JffInput v-model="warningValue" placeholder="Needs attention" status="warning" />
        </div>

        <div>
          <label class="block text-sm font-medium mb-1 text-red-600">Error State:</label>
          <JffInput v-model="errorValue" placeholder="Invalid input" status="error" />
          <p class="mt-1 text-xs text-red-500">This field is required</p>
        </div>
      </div>
    </div>

    <!-- 实际应用：搜索框 -->
    <div class="demo-section">
      <h4 class="section-title">Real-world Example: Search Box</h4>
      <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm max-w-2xl">
        <JffInput
          v-model="searchQuery"
          placeholder="Search for components, APIs, guides..."
          size="large"
          clearable
          @keyup.enter="handleSearch"
        >
          <template #prefix>
            <span class="i-ri-search-line text-xl text-gray-400"></span>
          </template>
          <template #suffix>
            <kbd class="px-2 py-0.5 bg-gray-100 border border-gray-300 rounded text-xs text-gray-500">⌘K</kbd>
          </template>
        </JffInput>

        <div v-if="searchQuery" class="mt-4 p-4 bg-gray-50 rounded-lg">
          <p class="text-sm text-gray-700 mb-2">Searching for: <strong>{{ searchQuery }}</strong></p>
          <div class="space-y-2">
            <div class="p-2 hover:bg-white rounded cursor-pointer transition-colors">
              <p class="font-medium text-sm text-blue-600">Button Component</p>
              <p class="text-xs text-gray-500">A versatile button component with multiple variants...</p>
            </div>
            <div class="p-2 hover:bg-white rounded cursor-pointer transition-colors">
              <p class="font-medium text-sm text-blue-600">Input Component</p>
              <p class="text-xs text-gray-500">Form input with validation, prefix/suffix support...</p>
            </div>
          </div>
        </div>

        <div class="mt-4 flex gap-2">
          <span class="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs">Popular: button</span>
          <span class="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs">form</span>
          <span class="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs">table</span>
          <span class="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs">dialog</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import JffInput from '@justforfun-ui/components/input'

const value1 = ref('')
const value2 = ref('Disabled value')

const textValue = ref('')
const passwordValue = ref('')
const urlValue = ref('')
const emailValue = ref('')
const numberValue = ref(null)

const clearableValue = ref('')

const searchValue = ref('')
const urlInput = ref('')
const moneyValue = ref('')
const emailInput = ref('')

const textareaValue = ref('')

const sizeLarge = ref('')
const sizeDefault = ref('')
const sizeSmall = ref('')

const successValue = ref('valid@email.com')
const warningValue = ref('')
const errorValue = ref('invalid')

const searchQuery = ref('')

function handleSearch() {
  console.log('Searching for:', searchQuery.value)
}
<\/script>

<style scoped>
.input-demo-enhanced {
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
`;export{e as default};
