# Avatar

Display user or entity information in the form of icons, images, or characters.

## Basic Usage

::: demo avatar/basic :::

## Enhanced Examples

::: demo avatar/enhanced :::

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
