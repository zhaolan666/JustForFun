# Card 卡片

用于展示信息的容器。

## 基础用法

<demo-block>
<template #demo>
<jff-card>
  <p>卡片内容</p>
</jff-card>
</template>
<template #code>
```vue
<jff-card>
  <p>卡片内容</p>
</jff-card>
```
</template>
</demo-block>

## 带标题的卡片

<demo-block>
<template #demo>
<jff-card header="卡片标题">
  <p>卡片内容</p>
</jff-card>
</template>
<template #code>
```vue
<jff-card header="卡片标题">
  <p>卡片内容</p>
</jff-card>
```
</template>
</demo-block>

## 带页脚的卡片

<demo-block>
<template #demo>
<jff-card header="卡片标题">
  <p>卡片内容</p>
  <template #footer>
    <jff-button type="primary">操作按钮</jff-button>
  </template>
</jff-card>
</template>
<template #code>
```vue
<jff-card header="卡片标题">
  <p>卡片内容</p>
  <template #footer>
    <jff-button type="primary">操作按钮</jff-button>
  </template>
</jff-card>
```
</template>
</demo-block>

## Card 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| header | string | - | 标题 |
| bodyStyle | object | {} | 内容区域样式 |
| shadow | string | default | 阴影效果（always/hover/never/default） |
| bordered | boolean | true | 是否显示边框 |
