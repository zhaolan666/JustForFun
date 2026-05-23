# Tag 标签

用于标记和分类。

## 基础用法

<demo-block>
<template #demo>
<jff-tag>默认标签</jff-tag>
<jff-tag type="primary">主要标签</jff-tag>
<jff-tag type="success">成功标签</jff-tag>
<jff-tag type="warning">警告标签</jff-tag>
<jff-tag type="danger">危险标签</jff-tag>
</template>
<template #code>
```vue
<jff-tag>默认标签</jff-tag>
<jff-tag type="primary">主要标签</jff-tag>
<jff-tag type="success">成功标签</jff-tag>
<jff-tag type="warning">警告标签</jff-tag>
<jff-tag type="danger">危险标签</jff-tag>
```
</template>
</demo-block>

## 可关闭标签

<demo-block>
<template #demo>
<jff-tag closable @close="handleClose">可关闭标签</jff-tag>
</template>
<template #code>
```vue
<jff-tag closable @close="handleClose">可关闭标签</jff-tag>

<script setup>
const handleClose = () => {
  console.log('标签已关闭')
}
</script>
```
</template>
</demo-block>

## Tag 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| type | string | info | 类型（primary/success/warning/danger/info） |
| closable | boolean | false | 是否可关闭 |
| hit | boolean | false | 是否有边框高亮 |

## Tag 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| close | - | 关闭时触发 |
