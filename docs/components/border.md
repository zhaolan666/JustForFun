# Border

Provides border decoration component.

## Basic Usage

:::demo

<JffBorder>
  <div style="padding: 20px;">Default Border</div>
</JffBorder>

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

## Border Type

:::demo

<div class="flex gap-4 flex-wrap">
  <JffBorder type="solid"><div style="padding: 16px;">Solid</div></JffBorder>
  <JffBorder type="dashed"><div style="padding: 16px;">Dashed</div></JffBorder>
  <JffBorder type="dotted"><div style="padding: 16px;">Dotted</div></JffBorder>
  <JffBorder type="double"><div style="padding: 16px;">Double</div></JffBorder>
</div>

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

## Border Color

:::demo

<div class="flex gap-4 flex-wrap">
  <JffBorder color="#845EC2"><div style="padding: 16px;">Purple</div></JffBorder>
  <JffBorder color="#6BCB77"><div style="padding: 16px;">Green</div></JffBorder>
  <JffBorder color="#FF6B6B"><div style="padding: 16px;">Red</div></JffBorder>
  <JffBorder color="#4D96FF"><div style="padding: 16px;">Blue</div></JffBorder>
</div>

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

## Border Direction

:::demo

<div class="flex gap-4 flex-wrap">
  <JffBorder direction="all"><div style="padding: 16px; min-width: 100px;">All</div></JffBorder>
  <JffBorder direction="top"><div style="padding: 16px; min-width: 100px;">Top</div></JffBorder>
  <JffBorder direction="bottom"><div style="padding: 16px; min-width: 100px;">Bottom</div></JffBorder>
  <JffBorder direction="left"><div style="padding: 16px; min-width: 100px;">Left</div></JffBorder>
  <JffBorder direction="right"><div style="padding: 16px; min-width: 100px;">Right</div></JffBorder>
  <JffBorder direction="horizontal"><div style="padding: 16px; min-width: 100px;">Horizontal</div></JffBorder>
  <JffBorder direction="vertical"><div style="padding: 16px; min-width: 100px;">Vertical</div></JffBorder>
</div>

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

## Border Radius

:::demo

<div class="flex gap-4 flex-wrap">
  <JffBorder radius="4"><div style="padding: 16px;">Radius 4px</div></JffBorder>
  <JffBorder radius="8"><div style="padding: 16px;">Radius 8px</div></JffBorder>
  <JffBorder radius="16"><div style="padding: 16px;">Radius 16px</div></JffBorder>
  <JffBorder radius="50%"><div style="padding: 16px;">Round</div></JffBorder>
</div>

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

## Attributes

| Attribute | Description | Type                                                      | Default |
| --------- | ----------- | --------------------------------------------------------- | ------- |
| tag       | Custom element tag | string                                                    | div     |
| type      | Border type | solid / dashed / dotted / double                          | solid   |
| color     | Border color | string                                                    | #d9d9d9 |
| width     | Border width | number / string                                           | 1       |
| radius    | Border radius | number / string                                           | 0       |
| direction | Border direction | all / top / right / bottom / left / horizontal / vertical | all     |
