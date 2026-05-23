# Dropdown 下拉菜单

用于展示一组可选择的选项。

## 基础用法

<demo-block>
<template #demo>
<jff-dropdown>
  <jff-dropdown-item command="1">选项一</jff-dropdown-item>
  <jff-dropdown-item command="2">选项二</jff-dropdown-item>
  <jff-dropdown-item command="3" divided>选项三</jff-dropdown-item>
</jff-dropdown>
</template>
<template #code>
```vue
<jff-dropdown>
  <jff-dropdown-item command="1">选项一</jff-dropdown-item>
  <jff-dropdown-item command="2">选项二</jff-dropdown-item>
  <jff-dropdown-item command="3" divided>选项三</jff-dropdown-item>
</jff-dropdown>
```
</template>
</demo-block>

## 悬停触发

<demo-block>
<template #demo>
<jff-dropdown trigger="hover">
  <jff-dropdown-item command="1">选项一</jff-dropdown-item>
  <jff-dropdown-item command="2">选项二</jff-dropdown-item>
</jff-dropdown>
</template>
<template #code>
```vue
<jff-dropdown trigger="hover">
  <jff-dropdown-item command="1">选项一</jff-dropdown-item>
  <jff-dropdown-item command="2">选项二</jff-dropdown-item>
</jff-dropdown>
```
</template>
</demo-block>

## Dropdown 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| trigger | string | click | 触发方式（click/hover） |
| hideOnClick | boolean | true | 点击后是否隐藏 |

## DropdownItem 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| command | string/number/object | - | 命令值 |
| disabled | boolean | false | 是否禁用 |
| divided | boolean | false | 是否显示分割线 |

## Dropdown 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| command | command | 点击菜单项时触发 |
