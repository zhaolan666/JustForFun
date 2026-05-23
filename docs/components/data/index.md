# Data 数据展示

用于展示各类数据信息。

## Badge 徽标

<demo-block>
<template #demo>
<div class="badge-demo">
  <jff-badge :value="5" class="item">
    <jff-button type="primary">评论</jff-button>
  </jff-badge>
  <jff-badge :value="100" class="item">
    <jff-button type="success">消息</jff-button>
  </jff-badge>
  <jff-badge :value="99+" class="item">
    <jff-button type="warning">通知</jff-button>
  </jff-badge>
  <jff-badge is-dot class="item">
    <jff-button type="danger">提醒</jff-button>
  </jff-badge>
</div>
</template>
<template #code>
```vue
<div class="badge-demo">
  <jff-badge :value="5">
    <jff-button type="primary">评论</jff-button>
  </jff-badge>
  <jff-badge :value="100">
    <jff-button type="success">消息</jff-button>
  </jff-badge>
  <jff-badge :value="99+">
    <jff-button type="warning">通知</jff-button>
  </jff-badge>
  <jff-badge is-dot>
    <jff-button type="danger">提醒</jff-button>
  </jff-badge>
</div>
```
</template>
</demo-block>

## Badge 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| value | string/number | - | 显示的值 |
| is-dot | boolean | false | 是否为红点 |
| type | string | - | 类型（primary/success/warning/danger/info） |
| max | number | 99 | 最大值，超过显示为 max+ |

## Card 卡片（敬请期待）

<demo-block>
<template #demo>
<div class="card-coming">
  <jff-border>
    <div style="padding: 20px; text-align: center;">
      <jff-icon name="info" size="48" color="#909399" />
      <p style="margin-top: 10px; color: #909399;">Card 组件开发中...</p>
    </div>
  </jff-border>
</div>
</template>
<template #code>
```vue
<!-- Card 组件即将推出，敬请期待 -->
```
</template>
</demo-block>

## Avatar 头像（敬请期待）

<demo-block>
<template #demo>
<div class="avatar-coming">
  <jff-border>
    <div style="padding: 20px; text-align: center;">
      <jff-icon name="user" size="48" color="#909399" />
      <p style="margin-top: 10px; color: #909399;">Avatar 组件开发中...</p>
    </div>
  </jff-border>
</div>
</template>
<template #code>
```vue
<!-- Avatar 组件即将推出，敬请期待 -->
```
</template>
</demo-block>

## Tag 标签（敬请期待）

<demo-block>
<template #demo>
<div class="tag-coming">
  <jff-border>
    <div style="padding: 20px; text-align: center;">
      <jff-icon name="tags" size="48" color="#909399" />
      <p style="margin-top: 10px; color: #909399;">Tag 组件开发中...</p>
    </div>
  </jff-border>
</div>
</template>
<template #code>
```vue
<!-- Tag 组件即将推出，敬请期待 -->
```
</template>
</demo-block>

<style scoped>
.badge-demo {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}
</style>
