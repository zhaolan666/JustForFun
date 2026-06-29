import{_ as r,k as m}from"./chunks/theme.BGKLMKBC.js";import{W as d,j as u,g as t,n,o,ax as s,ae as a}from"./chunks/framework.4B01ihDa.js";const c=[{name:"modelValue / v-model",description:"Binding value",type:"string | number",default:"''"},{name:"type",description:"Type of input component",type:"text | textarea",default:"'text'"},{name:"placeholder",description:"Placeholder of Input",type:"string",default:"—"},{name:"disabled",description:"Whether Input is disabled",type:"boolean",default:"false"},{name:"readonly",description:"Whether Input is readonly",type:"boolean",default:"false"},{name:"clearable",description:"Whether to show clear button",type:"boolean",default:"false"},{name:"showPassword",description:"Whether to show password toggle",type:"boolean",default:"false"},{name:"showWordLimit",description:"Whether to show word count",type:"boolean",default:"false"},{name:"size",description:"Size of Input",type:"large | default | small",default:"'default'"},{name:"prefixIcon",description:"Prefix icon class or component",type:"string | Component"},{name:"suffixIcon",description:"Suffix icon class or component",type:"string | Component"},{name:"rows",description:"Number of rows (textarea only)",type:"number",default:"2"},{name:"autosize",description:"Whether textarea has adaptive height",type:"boolean | object",default:"false"},{name:"autocomplete",description:"Same as native autocomplete attribute",type:"string",default:"'off'"},{name:"name",description:"Same as native name attribute",type:"string"},{name:"maxlength",description:"Maximum input length",type:"number"},{name:"minlength",description:"Minimum input length",type:"number"},{name:"max",description:"Same as native max attribute",type:"number | string"},{name:"min",description:"Same as native min attribute",type:"number | string"},{name:"step",description:"Same as native step attribute",type:"number | string"},{name:"resize",description:"Resizable for textarea",type:"none | both | horizontal | vertical"},{name:"autofocus",description:"Same as native autofocus attribute",type:"boolean",default:"false"},{name:"form",description:"Same as native form attribute",type:"string"},{name:"label",description:"Label text",type:"string"},{name:"tabindex",description:"Tabindex of input element",type:"string | number"},{name:"validateEvent",description:"Whether to trigger form validation",type:"boolean",default:"true"}],f=[{name:"blur",description:"Triggered when Input loses focus",parameters:"(event: FocusEvent)"},{name:"focus",description:"Triggered when Input gains focus",parameters:"(event: FocusEvent)"},{name:"change",description:"Only triggered when input box loses focus or user presses Enter",parameters:"(value: string | number)"},{name:"input",description:"Triggered when Input value changes (v-model event)",parameters:"(value: string | number)"},{name:"clear",description:"Triggered when clear icon is clicked",parameters:"—"},{name:"keydown",description:"Triggered when keyboard key is pressed",parameters:"(event: KeyboardEvent)"},{name:"keyup",description:"Triggered when keyboard key is released",parameters:"(event: KeyboardEvent)"},{name:"compositionstart",description:"Triggered when IME composition starts",parameters:"(event: CompositionEvent)"},{name:"compositionupdate",description:"Triggered during IME composition",parameters:"(event: CompositionEvent)"},{name:"compositionend",description:"Triggered when IME composition ends",parameters:"(event: CompositionEvent)"}],v=[{name:"prefix",description:"Content before input (e.g., icon, label)"},{name:"suffix",description:"Content after input (e.g., icon, button)"},{name:"prepend",description:"Prepend content before input element"},{name:"append",description:"Append content after input element"},{name:"prefixIcon",description:"Custom prefix icon content"},{name:"suffixIcon",description:"Custom suffix icon content"}],h=[{name:"ref",description:"Input element reference (HTMLInputElement or HTMLTextAreaElement)",type:"HTMLInputElement | HTMLTextAreaElement"}],E=JSON.parse('{"title":"Input","description":"","frontmatter":{},"headers":[],"relativePath":"components/form/input.md","filePath":"components/form/input.md","lastUpdated":null}'),g={name:"components/form/input.md"},w=Object.assign(g,{setup(x){const p={title:"Basic Usage",description:"基础输入框用法",code:'<template><div class="flex flex-col gap-4"><JffInput v-model="value1" placeholder="请输入内容" /><JffInput v-model="value2" placeholder="禁用状态" disabled /><JffInput v-model="value3" placeholder="可清空" clearable /><JffInput v-model="value4" type="password" placeholder="密码" show-password /></div></template>',language:"vue"},l=[{title:"Input Source Code",description:"Input 组件核心实现代码",code:`<!-- Template 部分 -->
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
<\/script>`,language:"vue"},{title:"Different Sizes",description:"提供大、中、小三种尺寸",code:'<template><div class="flex flex-col gap-4"><div class="flex items-center gap-2"><span class="w-16">Large:</span><JffInput size="large" v-model="large" placeholder="Large" /></div><div class="flex items-center gap-2"><span class="w-16">Default:</span><JffInput v-model="defaultVal" placeholder="Default" /></div><div class="flex items-center gap-2"><span class="w-16">Small:</span><JffInput size="small" v-model="small" placeholder="Small" /></div></div></template>',language:"vue"},{title:"Textarea",description:"多行文本输入框",code:'<template><div class="flex flex-col gap-4"><JffInput type="textarea" v-model="textarea1" placeholder="请输入多行文本" :rows="3" /><JffInput type="textarea" v-model="textarea2" placeholder="自适应高度" autosize /><JffInput type="textarea" v-model="textarea3" placeholder="带字数统计" :rows="3" :maxlength="100" show-word-limit /></div></template>',language:"vue"},{title:"With Icons",description:"带图标的输入框",code:'<template><div class="flex flex-col gap-4"><JffInput v-model="searchValue" placeholder="搜索..." :prefix-icon="SearchIcon" /><JffInput v-model="dateValue" placeholder="选择日期" :suffix-icon="CalendarIcon" /><JffInput v-model="customIcon" placeholder="自定义图标"><template #prefix><svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"/></svg></template></JffInput></div></template>',language:"vue"},{title:"Composite Inputs",description:"复合型输入框（前置/后置元素）",code:'<template><div class="flex flex-col gap-4"><JffInput v-model="website" placeholder="请输入网址"><template #prepend><span class="text-gray-500">https://</span></template></JffInput><JffInput v-model="email" placeholder="邮箱地址"><template #append><span class="bg-blue-500 text-white px-3 py-1">@example.com</span></template></JffInput><JffInput v-model="amount" placeholder="金额"><template #prepend><span class="text-gray-500">$</span></template><template #append><span class="text-gray-500">.00</span></template></JffInput></div></template>',language:"vue"},{title:"Validation States",description:"验证状态的输入框（配合表单使用）",code:'<template><JffForm :model="form" :rules="rules" label-width="80px"><JffFormItem label="用户名" prop="username"><JffInput v-model="form.username" placeholder="请输入用户名" /></JffFormItem><JffFormItem label="邮箱" prop="email"><JffInput v-model="form.email" placeholder="请输入邮箱" /></JffFormItem><JffFormItem label="密码" prop="password"><JffInput v-model="form.password" type="password" placeholder="请输入密码" show-password /></JffFormItem><JffFormItem><JffButton type="primary" @click="handleSubmit">提交</JffButton></JffFormItem></JffForm></template>',language:"vue"}];return(b,e)=>{const i=r;return d(),u("div",null,[e[2]||(e[2]=t("h1",{id:"input",tabindex:"-1"},[n("Input "),t("a",{class:"header-anchor",href:"#input","aria-label":'Permalink to "Input"'},"​")],-1)),e[3]||(e[3]=t("p",null,"Enter text content via input.",-1)),e[4]||(e[4]=t("h2",{id:"basic-usage",tabindex:"-1"},[n("Basic Usage "),t("a",{class:"header-anchor",href:"#basic-usage","aria-label":'Permalink to "Basic Usage"'},"​")],-1)),o(i,{path:"input/basic"},{default:s(()=>[e[1]||(e[1]=t("h2",{id:"enhanced-examples",tabindex:"-1"},[n("Enhanced Examples "),t("a",{class:"header-anchor",href:"#enhanced-examples","aria-label":'Permalink to "Enhanced Examples"'},"​")],-1)),o(i,{path:"input/enhanced"},{default:s(()=>[e[0]||(e[0]=t("h2",{id:"api",tabindex:"-1"},[n("API "),t("a",{class:"header-anchor",href:"#api","aria-label":'Permalink to "API"'},"​")],-1)),o(m,{"component-name":"Input",description:"Enter text content via input","basic-usage":p,examples:l,attributes:a(c),events:a(f),slots:a(v),exposes:a(h)},null,8,["attributes","events","slots","exposes"])]),_:1})]),_:1})])}}});export{E as __pageData,w as default};
