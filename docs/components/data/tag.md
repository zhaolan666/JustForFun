# Tag

Used for marking and selection.

## Basic Usage

:::demo

<div class="flex gap-2">
  <span class="jff-tag">Tag 1</span>
  <span class="jff-tag jff-tag--success">Tag 2</span>
  <span class="jff-tag jff-tag--info">Tag 3</span>
  <span class="jff-tag jff-tag--warning">Tag 4</span>
  <span class="jff-tag jff-tag--danger">Tag 5</span>
</div>

```vue
<template>
  <div class="flex gap-2">
    <JffTag>Tag 1</JffTag>
    <JffTag type="success">Tag 2</JffTag>
    <JffTag type="info">Tag 3</JffTag>
    <JffTag type="warning">Tag 4</JffTag>
    <JffTag type="danger">Tag 5</JffTag>
  </div>
</template>
```
:::

## Closable Tag

:::demo

<div class="flex gap-2">
  <span class="jff-tag jff-tag--closable">Tag 1 ✕</span>
  <span class="jff-tag jff-tag--success jff-tag--closable">Tag 2 ✕</span>
  <span class="jff-tag jff-tag--info jff-tag--closable">Tag 3 ✕</span>
</div>

```vue
<template>
  <div class="flex gap-2">
    <JffTag closable>Tag 1</JffTag>
    <JffTag closable type="success">Tag 2</JffTag>
    <JffTag closable type="info">Tag 3</JffTag>
  </div>
</template>
```
:::

## Different Sizes

:::demo

<div class="flex gap-2 items-center">
  <span class="jff-tag jff-tag--large">Large</span>
  <span class="jff-tag">Default</span>
  <span class="jff-tag jff-tag--small">Small</span>
</div>

```vue
<template>
  <div class="flex gap-2 items-center">
    <JffTag size="large">Large</JffTag>
    <JffTag>Default</JffTag>
    <JffTag size="small">Small</JffTag>
  </div>
</template>
```
:::

## Round Tag

:::demo

<div class="flex gap-2">
  <span class="jff-tag jff-tag--round">Round Tag</span>
  <span class="jff-tag jff-tag--success jff-tag--round">Success Round</span>
  <span class="jff-tag jff-tag--info jff-tag--round">Info Round</span>
</div>

```vue
<template>
  <div class="flex gap-2">
    <JffTag round>Round Tag</JffTag>
    <JffTag round type="success">Success Round</JffTag>
    <JffTag round type="info">Info Round</JffTag>
  </div>
</template>
```
:::

## Tag API

### Tag Attributes

| Attribute | Type | Default | Description |
|------|------|--------|------|
| type | string | — | Type |
| closable | boolean | false | Whether to be closable |
| round | boolean | false | Whether to be round |
| size | string | — | Size |
