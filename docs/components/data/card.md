# Card

Aggregate information and display it in a card container.

## Basic Usage

Contains title, content, and actions.

:::demo

<JffCard header="Card Title">
  <p>This is the content area of the card</p>
  <p>Any content can be placed here</p>
</JffCard>

```vue
<template>
  <JffCard header="Card Title">
    <p>This is the content area of the card</p>
    <p>Any content can be placed here</p>
  </JffCard>
</template>
```

:::

## Simple Card

Card with only content area.

:::demo

<JffCard>
  <p>This is a simple card without a title</p>
  <p>Only content area</p>
</JffCard>

```vue
<template>
  <JffCard>
    <p>This is a simple card without a title</p>
    <p>Only content area</p>
  </JffCard>
</template>
```

:::

## Card with Image

Configurable for richer content display.

:::demo

<JffCard header="Food Recommendation" style="max-width: 300px;">
  <div style="height: 150px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 4px; display: flex; align-items: center; justify-content: center; color: white; font-size: 18px;">
    Delicious Food
  </div>
  <p style="margin-top: 12px;">This is a delicious dish with rich taste and balanced nutrition.</p>
  <div style="margin-top: 12px; display: flex; justify-content: space-between; align-items: center;">
    <span style="color: #f56c6c; font-size: 18px; font-weight: bold;">$68</span>
    <JffButton type="primary" size="small">Buy Now</JffButton>
  </div>
</JffCard>

```vue
<template>
  <JffCard header="Food Recommendation" style="max-width: 300px;">
    <div style="height: 150px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 4px; display: flex; align-items: center; justify-content: center; color: white; font-size: 18px;">
      Delicious Food
    </div>
    <p style="margin-top: 12px;">This is a delicious dish with rich taste and balanced nutrition.</p>
    <div style="margin-top: 12px; display: flex; justify-content: space-between; align-items: center;">
      <span style="color: #f56c6c; font-size: 18px; font-weight: bold;">$68</span>
      <JffButton type="primary" size="small">Buy Now</JffButton>
    </div>
  </JffCard>
</template>
```

:::

## Card with Shadow

Define the shadow effect of the card through the `shadow` attribute.

:::demo

<div class="flex gap-4 flex-wrap">
  <JffCard header="Always" shadow="always">
    <p>Shadow always shows</p>
  </JffCard>
  <JffCard header="Hover" shadow="hover">
    <p>Shadow shows on hover</p>
  </JffCard>
  <JffCard header="Never" shadow="never">
    <p>Shadow never shows</p>
  </JffCard>
</div>

```vue
<template>
  <div class="flex gap-4 flex-wrap">
    <JffCard header="Always" shadow="always">
      <p>Shadow always shows</p>
    </JffCard>
    <JffCard header="Hover" shadow="hover">
      <p>Shadow shows on hover</p>
    </JffCard>
    <JffCard header="Never" shadow="never">
      <p>Shadow never shows</p>
    </JffCard>
  </div>
</template>
```

:::

## Borderless Card

Define whether to show the border through the `bordered` attribute.

:::demo

<div class="flex gap-4 flex-wrap">
  <JffCard header="With Border" :bordered="true">
    <p>Card with border</p>
  </JffCard>
  <JffCard header="Without Border" :bordered="false">
    <p>Card without border</p>
  </JffCard>
</div>

```vue
<template>
  <div class="flex gap-4 flex-wrap">
    <JffCard header="With Border" :bordered="true">
      <p>Card with border</p>
    </JffCard>
    <JffCard header="Without Border" :bordered="false">
      <p>Card without border</p>
    </JffCard>
  </div>
</template>
```

:::

## Card with Actions

Action buttons can be added at the bottom.

:::demo

<JffCard header="Action Card">
  <p>This is a card with action buttons</p>
  <p>Action buttons can be placed at the bottom</p>
  <template #footer>
    <div class="flex gap-2 justify-end">
      <JffButton>Cancel</JffButton>
      <JffButton type="primary">Confirm</JffButton>
    </div>
  </template>
</JffCard>

```vue
<template>
  <JffCard header="Action Card">
    <p>This is a card with action buttons</p>
    <p>Action buttons can be placed at the bottom</p>
    <template #footer>
      <div class="flex gap-2 justify-end">
        <JffButton>Cancel</JffButton>
        <JffButton type="primary">Confirm</JffButton>
      </div>
    </template>
  </JffCard>
</template>
```

:::

## Card API

### Card Attributes

| Attribute | Type | Default | Description |
|------|------|--------|------|
| header | string | — | Card title |
| body-style | object | {} | Content area style |
| shadow | string | default | Shadow effect (always/hover/never/default) |
| bordered | boolean | true | Whether to show border |

### Card Slots

| Slot Name | Description |
|--------|------|
| default | Card content |
| header | Card header |
| footer | Card footer action area |
