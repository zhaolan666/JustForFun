# Button

Commonly used operation buttons.

## Basic Usage

Use `type`, `plain`, `round`, and `circle` attributes to define the button style.

:::demo

<div class="flex gap-4 flex-wrap">
  <JffButton>Default</JffButton>
  <JffButton type="primary">Primary</JffButton>
  <JffButton type="success">Success</JffButton>
  <JffButton type="warning">Warning</JffButton>
  <JffButton type="danger">Danger</JffButton>
  <JffButton type="info">Info</JffButton>
</div>

```vue
<template>
  <div class="flex gap-4 flex-wrap">
    <JffButton>Default</JffButton>
    <JffButton type="primary">Primary</JffButton>
    <JffButton type="success">Success</JffButton>
    <JffButton type="warning">Warning</JffButton>
    <JffButton type="danger">Danger</JffButton>
    <JffButton type="info">Info</JffButton>
  </div>
</template>
```

:::

## Plain Button

Plain buttons also have different types.

:::demo

<div class="flex gap-4 flex-wrap">
  <JffButton plain>Plain</JffButton>
  <JffButton type="primary" plain>Primary</JffButton>
  <JffButton type="success" plain>Success</JffButton>
  <JffButton type="warning" plain>Warning</JffButton>
  <JffButton type="danger" plain>Danger</JffButton>
  <JffButton type="info" plain>Info</JffButton>
</div>

```vue
<template>
  <div class="flex gap-4 flex-wrap">
    <JffButton plain>Plain</JffButton>
    <JffButton type="primary" plain>Primary</JffButton>
    <JffButton type="success" plain>Success</JffButton>
    <JffButton type="warning" plain>Warning</JffButton>
    <JffButton type="danger" plain>Danger</JffButton>
    <JffButton type="info" plain>Info</JffButton>
  </div>
</template>
```

:::

## Round Button

Round buttons also have different types.

:::demo

<div class="flex gap-4 flex-wrap">
  <JffButton round>Round</JffButton>
  <JffButton type="primary" round>Primary</JffButton>
  <JffButton type="success" round>Success</JffButton>
  <JffButton type="warning" round>Warning</JffButton>
  <JffButton type="danger" round>Danger</JffButton>
  <JffButton type="info" round>Info</JffButton>
</div>

```vue
<template>
  <div class="flex gap-4 flex-wrap">
    <JffButton round>Round</JffButton>
    <JffButton type="primary" round>Primary</JffButton>
    <JffButton type="success" round>Success</JffButton>
    <JffButton type="warning" round>Warning</JffButton>
    <JffButton type="danger" round>Danger</JffButton>
    <JffButton type="info" round>Info</JffButton>
  </div>
</template>
```

:::

## Circle Button

Use the `circle` attribute to define a circular button.

:::demo

<div class="flex gap-4">
  <JffButton circle><span class="i-ri-search" /></JffButton>
  <JffButton type="primary" circle><span class="i-ri-edit-line" /></JffButton>
  <JffButton type="success" circle><span class="i-ri-check-line" /></JffButton>
  <JffButton type="warning" circle><span class="i-ri-star-line" /></JffButton>
  <JffButton type="danger" circle><span class="i-ri-delete-bin-line" /></JffButton>
</div>

```vue
<template>
  <div class="flex gap-4">
    <JffButton circle><span class="i-ri-search" /></JffButton>
    <JffButton type="primary" circle><span class="i-ri-edit-line" /></JffButton>
    <JffButton type="success" circle><span class="i-ri-check-line" /></JffButton>
    <JffButton type="warning" circle><span class="i-ri-star-line" /></JffButton>
    <JffButton type="danger" circle><span class="i-ri-delete-bin-line" /></JffButton>
  </div>
</template>
```

:::

## Disabled State

Use the `disabled` attribute to define whether the button is disabled.

:::demo

<div class="flex flex-col gap-4">
  <div class="flex gap-4 flex-wrap">
    <JffButton disabled>Default</JffButton>
    <JffButton type="primary" disabled>Primary</JffButton>
    <JffButton type="success" disabled>Success</JffButton>
    <JffButton type="warning" disabled>Warning</JffButton>
    <JffButton type="danger" disabled>Danger</JffButton>
  </div>
  <div class="flex gap-4 flex-wrap">
    <JffButton plain disabled>Plain</JffButton>
    <JffButton type="primary" plain disabled>Primary</JffButton>
    <JffButton type="success" plain disabled>Success</JffButton>
    <JffButton type="warning" plain disabled>Warning</JffButton>
    <JffButton type="danger" plain disabled>Danger</JffButton>
  </div>
</div>

```vue
<template>
  <div class="flex flex-col gap-4">
    <div class="flex gap-4 flex-wrap">
      <JffButton disabled>Default</JffButton>
      <JffButton type="primary" disabled>Primary</JffButton>
      <JffButton type="success" disabled>Success</JffButton>
      <JffButton type="warning" disabled>Warning</JffButton>
      <JffButton type="danger" disabled>Danger</JffButton>
    </div>
    <div class="flex gap-4 flex-wrap">
      <JffButton plain disabled>Plain</JffButton>
      <JffButton type="primary" plain disabled>Primary</JffButton>
      <JffButton type="success" plain disabled>Success</JffButton>
      <JffButton type="warning" plain disabled>Warning</JffButton>
      <JffButton type="danger" plain disabled>Danger</JffButton>
    </div>
  </div>
</template>
```

:::

## Text Button

Use the `text` attribute to define a text button.

:::demo

<div class="flex gap-4 flex-wrap">
  <JffButton text>Text</JffButton>
  <JffButton type="primary" text>Primary</JffButton>
  <JffButton type="success" text>Success</JffButton>
  <JffButton type="warning" text>Warning</JffButton>
  <JffButton type="danger" text>Danger</JffButton>
</div>

```vue
<template>
  <div class="flex gap-4 flex-wrap">
    <JffButton text>Text</JffButton>
    <JffButton type="primary" text>Primary</JffButton>
    <JffButton type="success" text>Success</JffButton>
    <JffButton type="warning" text>Warning</JffButton>
    <JffButton type="danger" text>Danger</JffButton>
  </div>
</template>
```

:::

## Icon Button

Use icons to enhance button semantics.

:::demo

<div class="flex flex-col gap-4">
  <div class="flex gap-4">
    <JffButton type="primary">
      <span class="i-ri-edit-line mr-1" />
      Edit
    </JffButton>
    <JffButton type="primary">
      Share
      <span class="i-ri-share-line ml-1" />
    </JffButton>
    <JffButton type="primary">
      <span class="i-ri-delete-bin-line mr-1" />
      Delete
    </JffButton>
  </div>
  <div class="flex gap-4">
    <JffButton type="primary" circle><span class="i-ri-search" /></JffButton>
    <JffButton type="success" circle><span class="i-ri-check-line" /></JffButton>
    <JffButton type="warning" circle><span class="i-ri-star-line" /></JffButton>
    <JffButton type="danger" circle><span class="i-ri-delete-bin-line" /></JffButton>
  </div>
</div>

```vue
<template>
  <div class="flex flex-col gap-4">
    <div class="flex gap-4">
      <JffButton type="primary">
        <span class="i-ri-edit-line mr-1" />
        Edit
      </JffButton>
      <JffButton type="primary">
        Share
        <span class="i-ri-share-line ml-1" />
      </JffButton>
      <JffButton type="primary">
        <span class="i-ri-delete-bin-line mr-1" />
        Delete
      </JffButton>
    </div>
    <div class="flex gap-4">
      <JffButton type="primary" circle><span class="i-ri-search" /></JffButton>
      <JffButton type="success" circle><span class="i-ri-check-line" /></JffButton>
      <JffButton type="warning" circle><span class="i-ri-star-line" /></JffButton>
      <JffButton type="danger" circle><span class="i-ri-delete-bin-line" /></JffButton>
    </div>
  </div>
</template>
```

:::

## Button Size

Use the `size` attribute to define button size.

:::demo

<div class="flex items-center gap-4 flex-wrap">
  <JffButton type="primary" size="large">Large</JffButton>
  <JffButton type="primary">Default</JffButton>
  <JffButton type="primary" size="small">Small</JffButton>
</div>
<div class="flex items-center gap-4 flex-wrap mt-4">
  <JffButton type="primary" size="large" round>Large</JffButton>
  <JffButton type="primary" round>Default</JffButton>
  <JffButton type="primary" size="small" round>Small</JffButton>
</div>

```vue
<template>
  <div class="flex items-center gap-4 flex-wrap">
    <JffButton type="primary" size="large">Large</JffButton>
    <JffButton type="primary">Default</JffButton>
    <JffButton type="primary" size="small">Small</JffButton>
  </div>
  <div class="flex items-center gap-4 flex-wrap mt-4">
    <JffButton type="primary" size="large" round>Large</JffButton>
    <JffButton type="primary" round>Default</JffButton>
    <JffButton type="primary" size="small" round>Small</JffButton>
  </div>
</template>
```

:::

## Loading State

Use the `loading` attribute to define the button's loading state.

:::demo

<div class="flex gap-4 flex-wrap">
  <JffButton type="primary" loading>Loading</JffButton>
  <JffButton type="primary" loading size="large">Loading</JffButton>
  <JffButton type="primary" loading size="small">Loading</JffButton>
  <JffButton type="primary" loading circle><span class="i-ri-loader-4-line animate-spin" /></JffButton>
</div>

```vue
<template>
  <div class="flex gap-4 flex-wrap">
    <JffButton type="primary" loading>Loading</JffButton>
    <JffButton type="primary" loading size="large">Loading</JffButton>
    <JffButton type="primary" loading size="small">Loading</JffButton>
    <JffButton type="primary" loading circle><span class="i-ri-loader-4-line animate-spin" /></JffButton>
  </div>
</template>
```

:::

## Button API

### Button Attributes

| Attribute | Type | Default | Description |
|------|------|--------|------|
| size | string | default | Size (large/default/small) |
| type | string | default | Type (primary/success/warning/danger/info) |
| plain | boolean | false | Whether to be plain button |
| text | boolean | false | Whether to be text button |
| round | boolean | false | Whether to be round button |
| circle | boolean | false | Whether to be circle button |
| loading | boolean | false | Whether to be loading |
| disabled | boolean | false | Whether to be disabled |
| icon | string | — | Icon class name |
| autofocus | boolean | false | Whether to autofocus |
| native-type | string | button | Native type attribute (button/submit/reset) |

### Button Slots

| Slot Name | Description |
|--------|------|
| default | Button content |
| loading | Custom loading component |
| icon | Custom icon component |

### Button Events

| Event Name | Parameters | Description |
|--------|------|------|
| click | (event: MouseEvent) | Triggered when clicked |
