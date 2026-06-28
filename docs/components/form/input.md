# Input

Enter text content via input.

## Basic Usage

::: demo input/basic :::

## Enhanced Examples

::: demo input/enhanced :::

## API

<ComponentDoc
  component-name="Input"
  description="Enter text content via input"
  :basic-usage="basicUsage"
  :examples="codeExamples"
  :attributes="inputAttributes"
  :events="inputEvents"
  :slots="inputSlots"
  :exposes="inputExposes"
/>

<script setup>
import ComponentDoc from '../../.vitepress/vitepress/components/ComponentDoc.vue'
import {
  inputAttributes,
  inputEvents,
  inputSlots,
  inputExposes
} from './input.api'

const basicUsage = {
  title: 'Basic Usage',
  description: '基础输入框用法',
  code: `<template><div class="flex flex-col gap-4"><JffInput v-model="value1" placeholder="请输入内容" /><JffInput v-model="value2" placeholder="禁用状态" disabled /><JffInput v-model="value3" placeholder="可清空" clearable /><JffInput v-model="value4" type="password" placeholder="密码" show-password /></div></template>`,
  language: 'vue'
}

const codeExamples = [
  {
    title: 'Input Source Code',
    description: 'Input 组件核心实现代码',
  code: `<!-- Template 部分 -->
<template>
  <div :class="[nsInput.b(), nsInput.is('disabled', disabled)]">
    <input
      ref="input"
      :type="type"
      :disabled="disabled"
      :placeholder="placeholder"
      @compositionstart="handleCompositionStart"
      @compositionupdate="handleCompositionUpdate"
      @compositionend="handleCompositionEnd"
      @input="handleInput"
    />
  </div>
</template>

<!-- Script 部分 -->
<script setup>
import { computed, nextTick, onMounted, ref, shallowRef } from 'vue'
import { useNamespace } from '@justforfun-ui/hooks'
import { UPDATE_MODEL_EVENT } from '@justforfun-ui/constants'
import { inputEmits, inputProps } from './input'

type TargetElement = HTMLInputElement | HTMLTextAreaElement

defineOptions({
  name: 'JffInput',
})

const props = defineProps(inputProps)
const emit = defineEmits(inputEmits)

const nsInput = useNamespace('input')
const { disabled, placeholder, type } = props

const input = shallowRef<HTMLInputElement>()
const isComposing = ref(false)

const _ref = computed(() => input.value)
const nativeInputValue = computed(() =>
  !props.modelValue ? '' : String(props.modelValue),
)

const setNativeInputValue = () => {
  const inputEl = _ref.value
  if (!inputEl || inputEl.value === nativeInputValue.value) return
  inputEl.value = nativeInputValue.value
}

const handleInput = async (event: Event) => {
  const { value } = event.target as TargetElement
  if (isComposing.value) return
  emit(UPDATE_MODEL_EVENT, value)
  await nextTick()
  setNativeInputValue()
}

onMounted(() => {
  setNativeInputValue()
})

const handleCompositionStart = (event: CompositionEvent) => {
  emit('compositionstart', event)
  isComposing.value = true
}

const handleCompositionUpdate = (event: CompositionEvent) => {
  emit('compositionupdate', event)
}

const handleCompositionEnd = (event: CompositionEvent) => {
  emit('compositionend', event)
  if (isComposing.value) {
    isComposing.value = false
    handleInput(event)
  }
}
<\/script>`,
    language: 'vue'
  },
  {
    title: 'Different Sizes',
    description: '提供大、中、小三种尺寸',
  code: `<template><div class="flex flex-col gap-4"><div class="flex items-center gap-2"><span class="w-16">Large:</span><JffInput size="large" v-model="large" placeholder="Large" /></div><div class="flex items-center gap-2"><span class="w-16">Default:</span><JffInput v-model="defaultVal" placeholder="Default" /></div><div class="flex items-center gap-2"><span class="w-16">Small:</span><JffInput size="small" v-model="small" placeholder="Small" /></div></div></template>`,
    language: 'vue'
  },
  {
    title: 'Textarea',
    description: '多行文本输入框',
  code: `<template><div class="flex flex-col gap-4"><JffInput type="textarea" v-model="textarea1" placeholder="请输入多行文本" :rows="3" /><JffInput type="textarea" v-model="textarea2" placeholder="自适应高度" autosize /><JffInput type="textarea" v-model="textarea3" placeholder="带字数统计" :rows="3" :maxlength="100" show-word-limit /></div></template>`,
    language: 'vue'
  },
  {
    title: 'With Icons',
    description: '带图标的输入框',
  code: `<template><div class="flex flex-col gap-4"><JffInput v-model="searchValue" placeholder="搜索..." :prefix-icon="SearchIcon" /><JffInput v-model="dateValue" placeholder="选择日期" :suffix-icon="CalendarIcon" /><JffInput v-model="customIcon" placeholder="自定义图标"><template #prefix><svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"/></svg></template></JffInput></div></template>`,
    language: 'vue'
  },
  {
    title: 'Composite Inputs',
    description: '复合型输入框（前置/后置元素）',
  code: `<template><div class="flex flex-col gap-4"><JffInput v-model="website" placeholder="请输入网址"><template #prepend><span class="text-gray-500">https://</span></template></JffInput><JffInput v-model="email" placeholder="邮箱地址"><template #append><span class="bg-blue-500 text-white px-3 py-1">@example.com</span></template></JffInput><JffInput v-model="amount" placeholder="金额"><template #prepend><span class="text-gray-500">$</span></template><template #append><span class="text-gray-500">.00</span></template></JffInput></div></template>`,
    language: 'vue'
  },
  {
    title: 'Validation States',
    description: '验证状态的输入框（配合表单使用）',
  code: `<template><JffForm :model="form" :rules="rules" label-width="80px"><JffFormItem label="用户名" prop="username"><JffInput v-model="form.username" placeholder="请输入用户名" /></JffFormItem><JffFormItem label="邮箱" prop="email"><JffInput v-model="form.email" placeholder="请输入邮箱" /></JffFormItem><JffFormItem label="密码" prop="password"><JffInput v-model="form.password" type="password" placeholder="请输入密码" show-password /></JffFormItem><JffFormItem><JffButton type="primary" @click="handleSubmit">提交</JffButton></JffFormItem></JffForm></template>`,
    language: 'vue'
  }
]
</script>
