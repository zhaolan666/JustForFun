# Alert 警告

用于展示警告信息。

## 基础用法

<demo-block>
<template #demo>
<jff-alert type="success" title="成功提示">操作成功！</jff-alert>
<jff-alert type="warning" title="警告提示">请注意！</jff-alert>
<jff-alert type="danger" title="错误提示">发生错误！</jff-alert>
<jff-alert type="info" title="信息提示">这是一条信息。</jff-alert>
</template>
<template #code>
```vue
<jff-alert type="success" title="成功提示">操作成功！</jff-alert>
<jff-alert type="warning" title="警告提示">请注意！</jff-alert>
<jff-alert type="danger" title="错误提示">发生错误！</jff-alert>
<jff-alert type="info" title="信息提示">这是一条信息。</jff-alert>
```
</template>
</demo-block>

## 可关闭

<demo-block>
<template #demo>
<jff-alert type="info" closable>可关闭的警告</jff-alert>
</template>
<template #code>
```vue
<jff-alert type="info" closable>可关闭的警告</jff-alert>
```
</template>
</demo-block>

## Alert 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| type | string | info | 类型（success/warning/danger/info） |
| title | string | - | 标题 |
| closable | boolean | true | 是否可关闭 |
| showIcon | boolean | true | 是否显示图标 |
| effect | string | light | 主题（light/dark） |

## Alert 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| close | - | 关闭时触发 |
