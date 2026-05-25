# Data Display

Used for displaying various types of data information.

## Badge

:::demo

<div class="badge-demo">
  <JffBadge :value="5" class="item">
    <JffButton type="primary">Comments</JffButton>
  </JffBadge>
  <JffBadge :value="100" :max="99" class="item">
    <JffButton type="success">Messages</JffButton>
  </JffBadge>
  <JffBadge :value="'99+'" class="item">
    <JffButton type="warning">Notifications</JffButton>
  </JffBadge>
  <JffBadge is-dot class="item">
    <JffButton type="danger">Alerts</JffButton>
  </JffBadge>
</div>

```vue
<template>
  <div class="badge-demo">
    <JffBadge :value="5">
      <JffButton type="primary">Comments</JffButton>
    </JffBadge>
    <JffBadge :value="100">
      <JffButton type="success">Messages</JffButton>
    </JffBadge>
    <JffBadge :value="'99+'">
      <JffButton type="warning">Notifications</JffButton>
    </JffBadge>
    <JffBadge is-dot>
      <JffButton type="danger">Alerts</JffButton>
    </JffBadge>
  </div>
</template>
```

:::

## Badge Attributes

| Attribute   | Type          | Default | Description                                        |
| ------ | ------------- | ------ | ------------------------------------------- |
| value  | string/number | -      | Display value                                    |
| is-dot | boolean       | false  | Whether to show as a dot                                  |
| type   | string        | -      | Type (primary/success/warning/danger/info) |
| max    | number        | 99     | Maximum value, exceeding shows as max+                     |

## Card

See [Card component](/components/data/card).

## Avatar

See [Avatar component](/components/data/avatar).

## Tag

See [Tag component](/components/data/tag).

<style scoped>
.badge-demo {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}
</style>
