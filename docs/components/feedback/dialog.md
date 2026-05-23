# Dialog 对话框

用于在当前页面弹出一个对话框。

## 基础用法

<demo-block>
<template #demo>
<jff-button type="primary" @click="visible = true">打开对话框</jff-button>
<jff-dialog v-model:visible="visible" title="对话框标题">
  <p>这是对话框内容</p>
</jff-dialog>
</template>
<template #code>
```vue
<jff-button type="primary" @click="visible = true">打开对话框</jff-button>
<jff-dialog v-model:visible="visible" title="对话框标题">
  <p>这是对话框内容</p>
</jff-dialog>

<script setup>
import { ref } from 'vue'
const visible = ref(false)
</script>
```
</template>
</demo-block>

## 自定义页脚

<demo-block>
<template #demo>
<jff-button type="primary" @click="visible = true">打开对话框</jff-button>
<jff-dialog v-model:visible="visible" title="对话框标题">
  <p>这是对话框内容</p>
  <template #footer>
    <jff-button @click="visible = false">取消</jff-button>
    <jff-button type="primary" @click="visible = false">确定</jff-button>
  </template>
</jff-dialog>
</template>
<template #code>
```vue
<jff-button type="primary" @click="visible = true">打开对话框</jff-button>
<jff-dialog v-model:visible="visible" title="对话框标题">
  <p>这是对话框内容</p>
  <template #footer>
    <jff-button @click="visible = false">取消</jff-button>
    <jff-button type="primary" @click="visible = false">确定</jff-button>
  </template>
</jff-dialog>
```
</template>
</demo-block>

## Dialog 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| visible | boolean | false | 是否显示 |
| title | string | - | 标题 |
| width | string/number | 50% | 宽度 |
| top | string | 15vh | 距离顶部的距离 |
| modal | boolean | true | 是否显示遮罩 |
| closeOnClickModal | boolean | true | 点击遮罩是否关闭 |
| closeOnPressEscape | boolean | true | 按 ESC 是否关闭 |
| showClose | boolean | true | 是否显示关闭按钮 |

## Dialog 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| close | - | 关闭时触发 |
