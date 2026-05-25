# Avatar

Display user or entity information in the form of icons, images, or characters.

## Basic Usage

Define avatar content via `icon`, `src`, and default slot.

:::demo

<div class="flex gap-4 items-center">
  <JffAvatar :size="50" icon="User" />
  <JffAvatar :size="50" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
  <JffAvatar :size="50">user</JffAvatar>
</div>

```vue
<template>
  <div class="flex gap-4 items-center">
    <JffAvatar :size="50" icon="User" />
    <JffAvatar :size="50" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
    <JffAvatar :size="50">user</JffAvatar>
  </div>
</template>
```

:::

## Display Types

Three types are supported: icon, image, and character.

:::demo

<div class="flex gap-4 items-center">
  <JffAvatar :size="50" icon="User" />
  <JffAvatar :size="50" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
  <JffAvatar :size="50">user</JffAvatar>
</div>

```vue
<template>
  <div class="flex gap-4 items-center">
    <JffAvatar :size="50" icon="User" />
    <JffAvatar :size="50" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
    <JffAvatar :size="50">user</JffAvatar>
  </div>
</template>
```

:::

## Shape

Both circular and square shapes are supported.

:::demo

<div class="flex gap-4 items-center">
  <JffAvatar shape="circle" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
  <JffAvatar shape="square" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
</div>

```vue
<template>
  <div class="flex gap-4 items-center">
    <JffAvatar shape="circle" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
    <JffAvatar shape="square" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
  </div>
</template>
```

:::

## Size

Set the size of the avatar.

:::demo

<div class="flex gap-4 items-center">
  <JffAvatar size="large" icon="User" />
  <JffAvatar icon="User" />
  <JffAvatar size="small" icon="User" />
</div>

```vue
<template>
  <div class="flex gap-4 items-center">
    <JffAvatar size="large" icon="User" />
    <JffAvatar icon="User" />
    <JffAvatar size="small" icon="User" />
  </div>
</template>
```

:::

## Image Load Failure

Fallback behavior when image fails to load.

:::demo

<div class="flex gap-4 items-center">
  <JffAvatar :size="100" src="https://empty">
    <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
  </JffAvatar>
</div>

```vue
<template>
  <div class="flex gap-4 items-center">
    <JffAvatar :size="100" src="https://empty" @error="errorHandler">
      <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
    </JffAvatar>
  </div>
</template>

<script setup>
const errorHandler = () => {
  console.log('Image load failed')
}
</script>
```

:::

## Avatar Attributes

| Attribute | Type | Default | Description |
|------|------|--------|------|
| icon | string | — | Set the icon type of the avatar, refer to Icon component |
| size | number / string | default | Avatar size, can be a number or string (large/default/small) |
| shape | string | circle | Avatar shape (circle/square) |
| src | string | — | Resource address for image avatar |
| alt | string | — | Alternative text describing the image |
| fit | string | cover | How the image fits the container when display type is image |

## Avatar Events

| Event Name | Parameters | Description |
|--------|------|------|
| error | (e: Event) | Callback when image avatar fails to load, returning false will disable the component's default fallback behavior |

## Avatar Slots

| Slot Name | Description |
|--------|------|
| default | Custom avatar content |
