# Navigation

Used for page navigation and menu display.

## Dropdown

:::demo

<JffDropdown>
  <JffButton type="primary">
    Dropdown
    <span class="i-ri-arrow-down-s-line" />
  </JffButton>
  <template #dropdown>
    <JffDropdownItem command="1">Option 1</JffDropdownItem>
    <JffDropdownItem command="2">Option 2</JffDropdownItem>
    <JffDropdownItem command="3" divided>Option 3</JffDropdownItem>
  </template>
</JffDropdown>

```vue
<template>
  <JffDropdown>
    <JffButton type="primary">
      Dropdown
      <span class="i-ri-arrow-down-s-line" />
    </JffButton>
    <template #dropdown>
      <JffDropdownItem command="1">Option 1</JffDropdownItem>
      <JffDropdownItem command="2">Option 2</JffDropdownItem>
      <JffDropdownItem command="3" divided>Option 3</JffDropdownItem>
    </template>
  </JffDropdown>
</template>
```

:::

## Hover Trigger

:::demo

<JffDropdown trigger="hover">
  <JffButton>
    Hover Trigger
    <span class="i-ri-arrow-down-s-line" />
  </JffButton>
  <template #dropdown>
    <JffDropdownItem command="1">Option 1</JffDropdownItem>
    <JffDropdownItem command="2">Option 2</JffDropdownItem>
  </template>
</JffDropdown>

```vue
<template>
  <JffDropdown trigger="hover">
    <JffButton>
      Hover Trigger
      <span class="i-ri-arrow-down-s-line" />
    </JffButton>
    <template #dropdown>
      <JffDropdownItem command="1">Option 1</JffDropdownItem>
      <JffDropdownItem command="2">Option 2</JffDropdownItem>
    </template>
  </JffDropdown>
</template>
```

:::

## Tabs (Coming Soon)

:::demo

<div style="padding: 20px; text-align: center; color: #909399;">
  <span class="i-ri-list-check text-4xl" />
  <p style="margin-top: 10px;">Tabs component under development...</p>
</div>

```vue
<template>
  <div class="tabs-coming">
    <div style="padding: 20px; text-align: center; color: #909399;">
      <span class="i-ri-list-check text-4xl" />
      <p style="margin-top: 10px;">Tabs component under development...</p>
    </div>
  </div>
</template>
```

:::

## Menu (Coming Soon)

:::demo

<div style="padding: 20px; text-align: center; color: #909399;">
  <span class="i-ri-menu-2-line text-4xl" />
  <p style="margin-top: 10px;">Menu component under development...</p>
</div>

```vue
<template>
  <div class="menu-coming">
    <div style="padding: 20px; text-align: center; color: #909399;">
      <span class="i-ri-menu-2-line text-4xl" />
      <p style="margin-top: 10px;">Menu component under development...</p>
    </div>
  </div>
</template>
```

:::

## Steps (Coming Soon)

:::demo

<div style="padding: 20px; text-align: center; color: #909399;">
  <span class="i-ri-checkbox-circle-line text-4xl" />
  <p style="margin-top: 10px;">Steps component under development...</p>
</div>

```vue
<template>
  <div class="steps-coming">
    <div style="padding: 20px; text-align: center; color: #909399;">
      <span class="i-ri-checkbox-circle-line text-4xl" />
      <p style="margin-top: 10px;">Steps component under development...</p>
    </div>
  </div>
</template>
```

:::

## Dropdown Attributes

| Attribute | Type    | Default | Description                    |
| --------- | ------- | ------ | ----------------------- |
| trigger     | string  | click  | Trigger method (click/hover) |
| hideOnClick | boolean | true   | Whether to hide after click  |

## DropdownItem Attributes

| Attribute | Type                 | Default | Description           |
| --------- | -------------------- | ------ | -------------- |
| command  | string/number/object | -      | Command value   |
| disabled | boolean              | false  | Whether disabled     |
| divided  | boolean              | false  | Whether to show divider |

## Dropdown Events

| Event Name | Parameter    | Description             |
| ---------- | ------- | ---------------- |
| command | command | Triggered when menu item is clicked |
