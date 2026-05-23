# Layout 布局

提供基础的布局组件，包括 Container、Row 和 Col。

## Container 容器

用于包裹页面内容，提供固定宽度或流式布局。

### 基础用法

:::demo
```vue
<template>
  <JffContainer>
    <div class="content">Container Content</div>
  </JffContainer>
</template>

<style scoped>
.content {
  padding: 20px;
  background: #f5f5f5;
}
</style>
```
:::

### RTL 布局

:::demo
```vue
<template>
  <JffContainer direction="rtl">
    <div class="content">RTL Container Content</div>
  </JffContainer>
</template>

<style scoped>
.content {
  padding: 20px;
  background: #f5f5f5;
}
</style>
```
:::

### Container 属性

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| tag | 自定义元素标签 | string | div |
| direction | 文本方向 | ltr / rtl | ltr |

## Row 行

用于创建水平布局的行容器。

### 基础用法

:::demo
```vue
<template>
  <JffRow>
    <JffCol span="8"><div class="col-content">Col 1</div></JffCol>
    <JffCol span="8"><div class="col-content">Col 2</div></JffCol>
    <JffCol span="8"><div class="col-content">Col 3</div></JffCol>
  </JffRow>
</template>

<style scoped>
.col-content {
  padding: 16px;
  background: #e8e8e8;
  text-align: center;
}
</style>
```
:::

### 间距

:::demo
```vue
<template>
  <JffRow :gutter="20">
    <JffCol span="8"><div class="col-content">Col 1</div></JffCol>
    <JffCol span="8"><div class="col-content">Col 2</div></JffCol>
    <JffCol span="8"><div class="col-content">Col 3</div></JffCol>
  </JffRow>
</template>

<style scoped>
.col-content {
  padding: 16px;
  background: #e8e8e8;
  text-align: center;
}
</style>
```
:::

### 对齐方式

:::demo
```vue
<template>
  <div class="demo-row">
    <JffRow justify="start"><div class="row-content">Start</div></JffRow>
    <JffRow justify="center"><div class="row-content">Center</div></JffRow>
    <JffRow justify="end"><div class="row-content">End</div></JffRow>
    <JffRow justify="space-between"><div class="row-content">Space Between</div></JffRow>
    <JffRow justify="space-around"><div class="row-content">Space Around</div></JffRow>
  </div>
</template>

<style scoped>
.demo-row {
  width: 100%;
}
.row-content {
  width: 100px;
  padding: 8px;
  background: #e8e8e8;
  text-align: center;
}
</style>
```
:::

### Row 属性

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| tag | 自定义元素标签 | string | div |
| gutter | 栅格间距 | number | 0 |
| justify | 水平排列方式 | start / end / center / space-around / space-between | start |
| align | 垂直对齐方式 | top / middle / bottom | top |

## Col 列

用于创建列布局。

### 基础用法

:::demo
```vue
<template>
  <JffRow>
    <JffCol span="24"><div class="col-content">span="24"</div></JffCol>
    <JffCol span="12"><div class="col-content">span="12"</div></JffCol>
    <JffCol span="12"><div class="col-content">span="12"</div></JffCol>
    <JffCol span="8"><div class="col-content">span="8"</div></JffCol>
    <JffCol span="8"><div class="col-content">span="8"</div></JffCol>
    <JffCol span="8"><div class="col-content">span="8"</div></JffCol>
  </JffRow>
</template>

<style scoped>
.col-content {
  padding: 16px;
  background: #e8e8e8;
  text-align: center;
}
</style>
```
:::

### 偏移

:::demo
```vue
<template>
  <JffRow>
    <JffCol span="6"><div class="col-content">span="6"</div></JffCol>
    <JffCol span="6" offset="6"><div class="col-content">span="6" offset="6"</div></JffCol>
    <JffCol span="6" offset="6"><div class="col-content">span="6" offset="6"</div></JffCol>
  </JffRow>
</template>

<style scoped>
.col-content {
  padding: 16px;
  background: #e8e8e8;
  text-align: center;
}
</style>
```
:::

### Col 属性

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| tag | 自定义元素标签 | string | div |
| span | 列宽度 | number (1-24) | 24 |
| offset | 左侧偏移列数 | number | 0 |
| push | 向右移动列数 | number | 0 |
| pull | 向左移动列数 | number | 0 |
