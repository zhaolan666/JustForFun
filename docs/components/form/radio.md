# Radio 单选框

用于在一组选项中进行单选。

## 基础用法

<demo-block>
<template #demo>
<jff-radio v-model="selected" label="选项一" />
<jff-radio v-model="selected" label="选项二" />
</template>
<template #code>
```vue
<jff-radio v-model="selected" label="选项一" />
<jff-radio v-model="selected" label="选项二" />

<script setup>
import { ref } from 'vue'
const selected = ref('选项一')
</script>
```
</template>
</demo-block>

## 禁用状态

<demo-block>
<template #demo>
<jff-radio v-model="selected1" label="禁用选项" disabled />
<jff-radio v-model="selected2" label="禁用且选中" disabled />
</template>
<template #code>
```vue
<jff-radio v-model="selected1" label="禁用选项" disabled />
<jff-radio v-model="selected2" label="禁用且选中" disabled />

<script setup>
import { ref } from 'vue'
const selected1 = ref('')
const selected2 = ref('禁用且选中')
</script>
```
</template>
</demo-block>

## 单选框组

<demo-block>
<template #demo>
<jff-radio-group v-model="selected">
  <jff-radio label="选项一" />
  <jff-radio label="选项二" />
  <jff-radio label="选项三" />
</jff-radio-group>
</template>
<template #code>
```vue
<jff-radio-group v-model="selected">
  <jff-radio label="选项一" />
  <jff-radio label="选项二" />
  <jff-radio label="选项三" />
</jff-radio-group>

<script setup>
import { ref } from 'vue'
const selected = ref('选项二')
</script>
```
</template>
</demo-block>

## Radio 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| modelValue | string/number/boolean | - | 绑定值 |
| label | string/number/boolean | - | 标签值 |
| disabled | boolean | false | 是否禁用 |
| name | string | - | 原生 name 属性 |
| border | boolean | false | 是否显示边框 |

## RadioGroup 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| modelValue | string/number/boolean | - | 绑定值 |
| disabled | boolean | false | 是否禁用 |
