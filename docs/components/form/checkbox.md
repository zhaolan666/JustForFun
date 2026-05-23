# Checkbox 复选框

用于在一组选项中进行多选。

## 基础用法

<demo-block>
<template #demo>
<jff-checkbox v-model="checked">复选框</jff-checkbox>
</template>
<template #code>
```vue
<jff-checkbox v-model="checked">复选框</jff-checkbox>

<script setup>
import { ref } from 'vue'
const checked = ref(true)
</script>
```
</template>
</demo-block>

## 禁用状态

<demo-block>
<template #demo>
<jff-checkbox v-model="checked1" disabled>禁用复选框</jff-checkbox>
<jff-checkbox v-model="checked2" disabled>禁用且选中</jff-checkbox>
</template>
<template #code>
```vue
<jff-checkbox v-model="checked1" disabled>禁用复选框</jff-checkbox>
<jff-checkbox v-model="checked2" disabled>禁用且选中</jff-checkbox>

<script setup>
import { ref } from 'vue'
const checked1 = ref(false)
const checked2 = ref(true)
</script>
```
</template>
</demo-block>

## 复选框组

<demo-block>
<template #demo>
<jff-checkbox-group v-model="checkedList">
  <jff-checkbox label="选项一" />
  <jff-checkbox label="选项二" />
  <jff-checkbox label="选项三" />
</jff-checkbox-group>
</template>
<template #code>
```vue
<jff-checkbox-group v-model="checkedList">
  <jff-checkbox label="选项一" />
  <jff-checkbox label="选项二" />
  <jff-checkbox label="选项三" />
</jff-checkbox-group>

<script setup>
import { ref } from 'vue'
const checkedList = ref(['选项一', '选项二'])
</script>
```
</template>
</demo-block>

## Checkbox 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| modelValue | boolean | false | 绑定值 |
| disabled | boolean | false | 是否禁用 |
| checked | boolean | false | 是否选中 |
| indeterminate | boolean | false | 是否为半选状态 |
| label | string | - | 标签文本 |
| border | boolean | false | 是否显示边框 |
| name | string | - | 原生 name 属性 |

## CheckboxGroup 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| modelValue | array | [] | 绑定值 |
| disabled | boolean | false | 是否禁用 |
