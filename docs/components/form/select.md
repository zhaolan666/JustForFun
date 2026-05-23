# Select 选择器

用于选择一组选项中的一个或多个。

## 基础用法

<demo-block>
<template #demo>
<jff-select v-model="selected">
  <jff-option label="选项一" value="1" />
  <jff-option label="选项二" value="2" />
  <jff-option label="选项三" value="3" />
</jff-select>
</template>
<template #code>
```vue
<jff-select v-model="selected">
  <jff-option label="选项一" value="1" />
  <jff-option label="选项二" value="2" />
  <jff-option label="选项三" value="3" />
</jff-select>

<script setup>
import { ref } from 'vue'
const selected = ref('')
</script>
```
</template>
</demo-block>

## 可清空

<demo-block>
<template #demo>
<jff-select v-model="selected" clearable>
  <jff-option label="选项一" value="1" />
  <jff-option label="选项二" value="2" />
</jff-select>
</template>
<template #code>
```vue
<jff-select v-model="selected" clearable>
  <jff-option label="选项一" value="1" />
  <jff-option label="选项二" value="2" />
</jff-select>
```
</template>
</demo-block>

## Select 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| modelValue | string/number | - | 绑定值 |
| placeholder | string | 请选择 | 占位文本 |
| disabled | boolean | false | 是否禁用 |
| clearable | boolean | false | 是否可清空 |
| multiple | boolean | false | 是否多选 |

## Option 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| value | string/number | - | 值 |
| label | string | - | 标签 |
| disabled | boolean | false | 是否禁用 |
