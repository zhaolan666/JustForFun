# Icon 图标

提供了一套常用的图标集合。

## 基础用法

使用 `name` 属性指定图标名称。

:::demo
```vue
<template>
  <div class="icon-list">
    <JffIcon name="search" />
    <JffIcon name="edit" />
    <JffIcon name="check" />
    <JffIcon name="delete" />
    <JffIcon name="message" />
  </div>
</template>

<style scoped>
.icon-list {
  display: flex;
  gap: 16px;
}
</style>
```
:::

## 图标大小

使用 `size` 属性设置图标大小。

:::demo
```vue
<template>
  <JffIcon name="search" :size="16" />
  <JffIcon name="search" :size="24" />
  <JffIcon name="search" :size="32" />
  <JffIcon name="search" :size="48" />
</template>
```
:::

## 图标颜色

使用 `color` 属性设置图标颜色。

:::demo
```vue
<template>
  <JffIcon name="search" color="#845EC2" />
  <JffIcon name="search" color="#BE93FD" />
  <JffIcon name="search" color="#4FFBDF" />
</template>
```
:::

## 图标列表

| 图标名称 | 说明 |
|---------|------|
| search | 搜索 |
| edit | 编辑 |
| check | 成功 |
| delete | 删除 |
| message | 消息 |
