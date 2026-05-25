# Dropdown

Collapse actions or menus into a dropdown menu.

## Basic Usage

Hover over the dropdown menu to reveal more operations.

:::demo

<JffDropdown>
  <span class="text-primary cursor-pointer">
    Dropdown<span class="i-ri-arrow-down-s-line" />
  </span>
  <template #dropdown>
    <JffDropdownMenu>
      <JffDropdownItem>Cantonese sponge cake</JffDropdownItem>
      <JffDropdownItem>Lion head meatball</JffDropdownItem>
      <JffDropdownItem>Snail rice noodles</JffDropdownItem>
      <JffDropdownItem disabled>Steamed milk pudding</JffDropdownItem>
      <JffDropdownItem divided>Oyster omelette</JffDropdownItem>
    </JffDropdownMenu>
  </template>
</JffDropdown>

```vue
<template>
  <JffDropdown>
    <span class="text-primary cursor-pointer">
      Dropdown<span class="i-ri-arrow-down-s-line" />
    </span>
    <template #dropdown>
      <JffDropdownMenu>
        <JffDropdownItem>Cantonese sponge cake</JffDropdownItem>
        <JffDropdownItem>Lion head meatball</JffDropdownItem>
        <JffDropdownItem>Snail rice noodles</JffDropdownItem>
        <JffDropdownItem disabled>Steamed milk pudding</JffDropdownItem>
        <JffDropdownItem divided>Oyster omelette</JffDropdownItem>
      </JffDropdownMenu>
    </template>
  </JffDropdown>
</template>
```

:::

## Trigger Element

You can use a button to trigger the dropdown menu.

:::demo

<JffDropdown split-button type="primary">
  Dropdown
  <template #dropdown>
    <JffDropdownMenu>
      <JffDropdownItem>Cantonese sponge cake</JffDropdownItem>
      <JffDropdownItem>Lion head meatball</JffDropdownItem>
      <JffDropdownItem>Snail rice noodles</JffDropdownItem>
      <JffDropdownItem>Steamed milk pudding</JffDropdownItem>
      <JffDropdownItem>Oyster omelette</JffDropdownItem>
    </JffDropdownMenu>
  </template>
</JffDropdown>

```vue
<template>
  <JffDropdown split-button type="primary" @click="handleClick">
    Dropdown
    <template #dropdown>
      <JffDropdownMenu>
        <JffDropdownItem>Cantonese sponge cake</JffDropdownItem>
        <JffDropdownItem>Lion head meatball</JffDropdownItem>
        <JffDropdownItem>Snail rice noodles</JffDropdownItem>
        <JffDropdownItem>Steamed milk pudding</JffDropdownItem>
        <JffDropdownItem>Oyster omelette</JffDropdownItem>
      </JffDropdownMenu>
    </template>
  </JffDropdown>
</template>

<script setup>
const handleClick = () => {
  // Button click event
}
</script>
```

:::

## Trigger Mode

Configure whether to hide the menu after clicking a menu item.

:::demo

<div class="flex gap-4">
  <span class="text-sm text-gray-500">Hide on click:</span>
  <JffDropdown :hide-on-click="false">
    <span class="text-primary cursor-pointer">
      Dropdown<span class="i-ri-arrow-down-s-line" />
    </span>
    <template #dropdown>
      <JffDropdownMenu>
        <JffDropdownItem>Cantonese sponge cake</JffDropdownItem>
        <JffDropdownItem>Lion head meatball</JffDropdownItem>
        <JffDropdownItem>Snail rice noodles</JffDropdownItem>
      </JffDropdownMenu>
    </template>
  </JffDropdown>
</div>

```vue
<template>
  <div class="flex gap-4">
    <span class="text-sm text-gray-500">Hide on click:</span>
    <JffDropdown :hide-on-click="false">
      <span class="text-primary cursor-pointer">
        Dropdown<span class="i-ri-arrow-down-s-line" />
      </span>
      <template #dropdown>
        <JffDropdownMenu>
          <JffDropdownItem>Cantonese sponge cake</JffDropdownItem>
          <JffDropdownItem>Lion head meatball</JffDropdownItem>
          <JffDropdownItem>Snail rice noodles</JffDropdownItem>
        </JffDropdownMenu>
      </template>
    </JffDropdown>
  </div>
</template>
```

:::

## Menu Hide Mode

Set how the dropdown menu is triggered via the `trigger` attribute.

:::demo

<div class="flex gap-4">
  <JffDropdown>
    <JffButton>
      Default hover<span class="i-ri-arrow-down-s-line ml-1" />
    </JffButton>
    <template #dropdown>
      <JffDropdownMenu>
        <JffDropdownItem>Cantonese sponge cake</JffDropdownItem>
        <JffDropdownItem>Lion head meatball</JffDropdownItem>
      </JffDropdownMenu>
    </template>
  </JffDropdown>

  <JffDropdown trigger="hover">
    <JffButton>
      Hover trigger<span class="i-ri-arrow-down-s-line ml-1" />
    </JffButton>
    <template #dropdown>
      <JffDropdownMenu>
        <JffDropdownItem>Cantonese sponge cake</JffDropdownItem>
        <JffDropdownItem>Lion head meatball</JffDropdownItem>
      </JffDropdownMenu>
    </template>
  </JffDropdown>
</div>

```vue
<template>
  <div class="flex gap-4">
    <JffDropdown>
      <JffButton>
        Default hover<span class="i-ri-arrow-down-s-line ml-1" />
      </JffButton>
      <template #dropdown>
        <JffDropdownMenu>
          <JffDropdownItem>Cantonese sponge cake</JffDropdownItem>
          <JffDropdownItem>Lion head meatball</JffDropdownItem>
        </JffDropdownMenu>
      </template>
    </JffDropdown>

    <JffDropdown trigger="hover">
      <JffButton>
        Hover trigger<span class="i-ri-arrow-down-s-line ml-1" />
      </JffButton>
      <template #dropdown>
        <JffDropdownMenu>
          <JffDropdownItem>Cantonese sponge cake</JffDropdownItem>
          <JffDropdownItem>Lion head meatball</JffDropdownItem>
        </JffDropdownMenu>
      </template>
    </JffDropdown>
  </div>
</template>
```

:::

## Dropdown API

### Dropdown Attributes

| Attribute | Type | Default | Description |
|------|------|--------|------|
| type | string | — | Menu button type, same as Button component |
| size | string | — | Menu button size, same as Button component |
| split-button | boolean | false | Whether the dropdown trigger element is displayed as a button group |
| disabled | boolean | false | Whether to be disabled |
| placement | string | bottom-start | Menu popup position |
| trigger | string | hover | How the dropdown is triggered |
| hide-on-click | boolean | true | Whether to hide the menu after clicking a menu item |
| show-timeout | number | 250 | Delay before showing the dropdown, only valid when trigger is hover |
| hide-timeout | number | 150 | Delay before hiding the dropdown, only valid when trigger is hover |

### Dropdown Slots

| Slot Name | Description |
|--------|------|
| default | Element that triggers the dropdown list to display. Note: Must be an element or component |
| dropdown | Dropdown list, usually a `<JffDropdownMenu>` component |

### Dropdown Events

| Event Name | Parameters | Description |
|--------|------|------|
| click | — | Callback when split-button is true and the left button is clicked |
| command | command | Callback when a menu item is clicked |
| visible-change | visible | Triggered when dropdown shows/hides |

### Dropdown Menu Attributes

| Attribute | Type | Default | Description |
|------|------|--------|------|
| disabled | boolean | false | Disabled |
| divided | boolean | false | Whether to show divider |
| icon | string / Component | — | Icon |

### Dropdown Menu Slots

| Slot Name | Description |
|--------|------|
| default | Dropdown menu content |
