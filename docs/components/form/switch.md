# Switch 开关

用于在两种状态之间进行切换。

## 基础用法

<demo-block>
<template #demo>
<jff-switch v-model="value" />
</template>
<template #code>
```vue
<jff-switch v-model="value" />

<script setup>
import { ref } from 'vue'
const value = ref(true)
</script>
```
</template>
</demo-block>

## 禁用状态

<demo-block>
<template #demo>
<jff-switch v-model="value1" disabled />
<jff-switch v-model="value2" disabled />
</template>
<template #code>
```vue
<jff-switch v-model="value1" disabled />
<jff-switch v-model="value2" disabled />

<script setup>
import { ref } from 'vue'
const value1 = ref(false)
const value2 = ref(true)
</script>
```
</template>
</demo-block>

## 自定义颜色

<demo-block>
<template #demo>
<jff-switch 
  v-model="value" 
  active-color="#10b981" 
  inactive-color="#ef4444" 
/>
</template>
<template #code>
```vue
<jff-switch 
  v-model="value" 
  active-color="#10b981" 
  inactive-color="#ef4444" 
/>
```
</template>
</demo-block>

## Switch 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| modelValue | boolean | false | 绑定值 |
| disabled | boolean | false | 是否禁用 |
| width | number | 40 | 宽度（像素） |
| activeText | string | - | 开启时的文本 |
| inactiveText | string | - | 关闭时的文本 |
| activeColor | string | - | 开启时的背景色 |
| inactiveColor | string | - | 关闭时的背景色 |
