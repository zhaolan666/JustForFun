# Border 边框

提供边框装饰组件。

## 基础用法

:::demo
```vue
<template>
  <JffBorder>
    <div class="border-content">Default Border</div>
  </JffBorder>
</template>

<style scoped>
.border-content {
  padding: 20px;
}
</style>
```
:::

## 边框类型

:::demo
```vue
<template>
  <div class="border-demo">
    <JffBorder type="solid"><div>Solid</div></JffBorder>
    <JffBorder type="dashed"><div>Dashed</div></JffBorder>
    <JffBorder type="dotted"><div>Dotted</div></JffBorder>
    <JffBorder type="double"><div>Double</div></JffBorder>
  </div>
</template>

<style scoped>
.border-demo {
  display: flex;
  gap: 16px;
}
.border-demo > * {
  padding: 16px;
}
</style>
```
:::

## 边框颜色

:::demo
```vue
<template>
  <div class="border-demo">
    <JffBorder color="#845EC2"><div>Purple</div></JffBorder>
    <JffBorder color="#6BCB77"><div>Green</div></JffBorder>
    <JffBorder color="#FF6B6B"><div>Red</div></JffBorder>
    <JffBorder color="#4D96FF"><div>Blue</div></JffBorder>
  </div>
</template>

<style scoped>
.border-demo {
  display: flex;
  gap: 16px;
}
.border-demo > * {
  padding: 16px;
}
</style>
```
:::

## 边框方向

:::demo
```vue
<template>
  <div class="border-demo">
    <JffBorder direction="all"><div>All</div></JffBorder>
    <JffBorder direction="top"><div>Top</div></JffBorder>
    <JffBorder direction="bottom"><div>Bottom</div></JffBorder>
    <JffBorder direction="left"><div>Left</div></JffBorder>
    <JffBorder direction="right"><div>Right</div></JffBorder>
    <JffBorder direction="horizontal"><div>Horizontal</div></JffBorder>
    <JffBorder direction="vertical"><div>Vertical</div></JffBorder>
  </div>
</template>

<style scoped>
.border-demo {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.border-demo > * {
  padding: 16px;
  min-width: 100px;
}
</style>
```
:::

## 圆角

:::demo
```vue
<template>
  <div class="border-demo">
    <JffBorder :radius="4"><div>Radius 4px</div></JffBorder>
    <JffBorder :radius="8"><div>Radius 8px</div></JffBorder>
    <JffBorder :radius="16"><div>Radius 16px</div></JffBorder>
    <JffBorder :radius="50%"><div>Round</div></JffBorder>
  </div>
</template>

<style scoped>
.border-demo {
  display: flex;
  gap: 16px;
}
.border-demo > * {
  padding: 16px;
}
</style>
```
:::

## 属性

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| tag | 自定义元素标签 | string | div |
| type | 边框类型 | solid / dashed / dotted / double | solid |
| color | 边框颜色 | string | #d9d9d9 |
| width | 边框宽度 | number / string | 1 |
| radius | 圆角大小 | number / string | 0 |
| direction | 边框方向 | all / top / right / bottom / left / horizontal / vertical | all |
