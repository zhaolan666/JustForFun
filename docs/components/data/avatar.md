# Avatar 头像

用于展示用户头像。

## 基础用法

<demo-block>
<template #demo>
<jff-avatar>JD</jff-avatar>
<jff-avatar icon="User" />
<jff-avatar src="https://example.com/avatar.jpg" />
</template>
<template #code>
```vue
<jff-avatar>JD</jff-avatar>
<jff-avatar icon="User" />
<jff-avatar src="https://example.com/avatar.jpg" />
```
</template>
</demo-block>

## 尺寸大小

<demo-block>
<template #demo>
<jff-avatar size="large">大</jff-avatar>
<jff-avatar>中</jff-avatar>
<jff-avatar size="small">小</jff-avatar>
</template>
<template #code>
```vue
<jff-avatar size="large">大</jff-avatar>
<jff-avatar>中</jff-avatar>
<jff-avatar size="small">小</jff-avatar>
```
</template>
</demo-block>

## Avatar 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| icon | string | - | 图标名称 |
| src | string | - | 图片地址 |
| alt | string | - | 图片替代文本 |
| size | string/number | default | 尺寸（large/default/small 或像素值） |
| shape | string | circle | 形状（circle/square） |
