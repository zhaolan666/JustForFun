# Layout

Provides basic layout components including Container, Row, and Col.

## Container

Used to wrap page content, providing fixed width or fluid layout.

### Basic Usage

:::demo

<JffContainer>
  <div style="padding: 20px; background: var(--jff-fill-color-light); color: var(--jff-text-color-primary);">Container Content</div>
</JffContainer>

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
  color: #333;
}
</style>
```

:::

### RTL Layout

RTL (Right-to-Left) layout is used to support languages read from right to left, such as Arabic, Hebrew, etc. By setting the `direction="rtl"` attribute, content inside the container will start from the right side.

:::demo

<JffContainer direction="rtl">
  <div style="padding: 20px; background: var(--jff-fill-color-light); color: var(--jff-text-color-primary);">
    <div>مرحبا بالعالم (Hello World in Arabic)</div>
    <div style="margin-top: 8px;">This is content arranged from right to left</div>
  </div>
</JffContainer>

```vue
<template>
  <JffContainer dir="rtl">
    <div class="content">
      <div>مرحبا بالعالم (Hello World in Arabic)</div>
      <div>This is content arranged from right to left</div>
    </div>
  </JffContainer>
</template>

<style scoped>
.content {
  padding: 20px;
  background: #f5f5f5;
  color: #333;
}
</style>
```

:::

**RTL Layout Use Cases:**

1. **Multilingual Support** - When the application needs to support RTL languages such as Arabic, Hebrew, Persian, etc.
2. **Internationalization (i18n)** - Automatically switch layout direction based on user's language
3. **Mixed Content** - Display LTR and RTL content together on the same page

**Implementation Principles:**
- Changes text arrangement direction through CSS `direction: rtl` property
- Makes text align right by default through `text-align: right`
- Works with CSS logical properties (e.g., `margin-inline-start`) for adaptive layout

### Container Attributes

| Attribute | Description | Type      | Default |
| --------- | ----------- | --------- | ------ |
| tag       | Custom element tag | string    | div    |
| dir       | Text direction | ltr / rtl | ltr    |

## Row

Used to create horizontal layout row containers.

### Basic Usage

:::demo

<JffRow>
  <JffCol span="8"><div style="padding: 16px; background: var(--jff-fill-color); color: var(--jff-text-color-primary); text-align: center;">Col 1</div></JffCol>
  <JffCol span="8"><div style="padding: 16px; background: var(--jff-fill-color); color: var(--jff-text-color-primary); text-align: center;">Col 2</div></JffCol>
  <JffCol span="8"><div style="padding: 16px; background: var(--jff-fill-color); color: var(--jff-text-color-primary); text-align: center;">Col 3</div></JffCol>
</JffRow>

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
  color: #333;
  text-align: center;
}
</style>
```

:::

### Gutter

:::demo

<JffRow :gutter="20">
  <JffCol span="8"><div style="padding: 16px; background: var(--jff-fill-color); color: var(--jff-text-color-primary); text-align: center;">Col 1</div></JffCol>
  <JffCol span="8"><div style="padding: 16px; background: var(--jff-fill-color); color: var(--jff-text-color-primary); text-align: center;">Col 2</div></JffCol>
  <JffCol span="8"><div style="padding: 16px; background: var(--jff-fill-color); color: var(--jff-text-color-primary); text-align: center;">Col 3</div></JffCol>
</JffRow>

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
  color: #333;
  text-align: center;
}
</style>
```

:::

### Justify

:::demo

<div class="flex flex-col gap-4">
  <JffRow justify="start"><div style="width: 100px; padding: 8px; background: var(--jff-fill-color); color: var(--jff-text-color-primary); text-align: center;">Start</div></JffRow>
  <JffRow justify="center"><div style="width: 100px; padding: 8px; background: var(--jff-fill-color); color: var(--jff-text-color-primary); text-align: center;">Center</div></JffRow>
  <JffRow justify="end"><div style="width: 100px; padding: 8px; background: var(--jff-fill-color); color: var(--jff-text-color-primary); text-align: center;">End</div></JffRow>
  <JffRow justify="space-between"><div style="width: 100px; padding: 8px; background: var(--jff-fill-color); color: var(--jff-text-color-primary); text-align: center;">Space Between</div></JffRow>
  <JffRow justify="space-around"><div style="width: 100px; padding: 8px; background: var(--jff-fill-color); color: var(--jff-text-color-primary); text-align: center;">Space Around</div></JffRow>
</div>

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
  color: #333;
  text-align: center;
}
</style>
```

:::

### Row Attributes

| Attribute | Description | Type                                                | Default |
| --------- | ----------- | --------------------------------------------------- | ------ |
| tag     | Custom element tag | string                                              | div    |
| gutter  | Grid spacing | number                                              | 0      |
| justify | Horizontal alignment | start / end / center / space-around / space-between | start  |
| align   | Vertical alignment | top / middle / bottom                               | top    |

## Col

Used to create column layouts.

### Basic Usage

:::demo

<JffRow>
  <JffCol span="24"><div style="padding: 16px; background: var(--jff-fill-color); color: var(--jff-text-color-primary); text-align: center;">span="24"</div></JffCol>
  <JffCol span="12"><div style="padding: 16px; background: var(--jff-fill-color); color: var(--jff-text-color-primary); text-align: center;">span="12"</div></JffCol>
  <JffCol span="12"><div style="padding: 16px; background: var(--jff-fill-color); color: var(--jff-text-color-primary); text-align: center;">span="12"</div></JffCol>
  <JffCol span="8"><div style="padding: 16px; background: var(--jff-fill-color); color: var(--jff-text-color-primary); text-align: center;">span="8"</div></JffCol>
  <JffCol span="8"><div style="padding: 16px; background: var(--jff-fill-color); color: var(--jff-text-color-primary); text-align: center;">span="8"</div></JffCol>
  <JffCol span="8"><div style="padding: 16px; background: var(--jff-fill-color); color: var(--jff-text-color-primary); text-align: center;">span="8"</div></JffCol>
</JffRow>

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
  color: #333;
  text-align: center;
}
</style>
```

:::

### Offset

:::demo

<JffRow>
  <JffCol span="6"><div style="padding: 16px; background: var(--jff-fill-color); color: var(--jff-text-color-primary); text-align: center;">span="6"</div></JffCol>
  <JffCol span="6" offset="6"><div style="padding: 16px; background: var(--jff-fill-color); color: var(--jff-text-color-primary); text-align: center;">span="6" offset="6"</div></JffCol>
  <JffCol span="6" offset="6"><div style="padding: 16px; background: var(--jff-fill-color); color: var(--jff-text-color-primary); text-align: center;">span="6" offset="6"</div></JffCol>
</JffRow>

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
  color: #333;
  text-align: center;
}
</style>
```

:::

### Col Attributes

| Attribute | Description | Type          | Default |
| --------- | ----------- | ------------- | ------ |
| tag    | Custom element tag | string        | div    |
| span   | Column width | number (1-24) | 24     |
| offset | Number of offset columns to the left | number        | 0      |
| push   | Number of columns to move right | number        | 0      |
| pull   | Number of columns to move left | number        | 0      |
