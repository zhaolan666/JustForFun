# Alert

Used to display important notification messages on the page.

## Basic Usage

Non-overlay elements on the page that do not disappear automatically.

:::demo

<div class="flex flex-col gap-4">
  <JffAlert type="success" title="Success" description="This is a success message" />
  <JffAlert type="warning" title="Warning" description="This is a warning message" />
  <JffAlert type="danger" title="Error" description="This is an error message" />
  <JffAlert type="info" title="Info" description="This is an info message" />
</div>

```vue
<template>
  <div class="flex flex-col gap-4">
    <JffAlert type="success" title="Success" description="This is a success message" />
    <JffAlert type="warning" title="Warning" description="This is a warning message" />
    <JffAlert type="danger" title="Error" description="This is an error message" />
    <JffAlert type="info" title="Info" description="This is an info message" />
  </div>
</template>
```

:::

## Theme

The Alert component provides two different themes: `light` and `dark`.

:::demo

<div class="flex flex-col gap-4">
  <JffAlert type="success" title="Success" description="light theme" effect="light" />
  <JffAlert type="success" title="Success" description="dark theme" effect="dark" />
  <JffAlert type="warning" title="Warning" description="light theme" effect="light" />
  <JffAlert type="warning" title="Warning" description="dark theme" effect="dark" />
</div>

```vue
<template>
  <div class="flex flex-col gap-4">
    <JffAlert type="success" title="Success" description="light theme" effect="light" />
    <JffAlert type="success" title="Success" description="dark theme" effect="dark" />
    <JffAlert type="warning" title="Warning" description="light theme" effect="light" />
    <JffAlert type="warning" title="Warning" description="dark theme" effect="dark" />
  </div>
</template>
```

:::

## Custom Close Button

You can customize the close button as text or other symbols.

:::demo

<JffAlert type="info" title="With Close Button" description="Click the button on the right to close" closable />

```vue
<template>
  <JffAlert type="info" title="With Close Button" description="Click the button on the right to close" closable />
</template>
```

:::

## Icon

You can show or hide the icon by setting the `show-icon` attribute.

:::demo

<div class="flex flex-col gap-4">
  <JffAlert type="success" title="With Icon" description="Show icon" :show-icon="true" />
  <JffAlert type="success" title="Without Icon" description="Hide icon" :show-icon="false" />
</div>

```vue
<template>
  <div class="flex flex-col gap-4">
    <JffAlert type="success" title="With Icon" description="Show icon" :show-icon="true" />
    <JffAlert type="success" title="Without Icon" description="Hide icon" :show-icon="false" />
  </div>
</template>
```

:::

## Centered Display

Use the `center` attribute to center the text horizontally.

:::demo

<JffAlert type="info" title="Centered" description="Text centered horizontally" center />

```vue
<template>
  <JffAlert type="info" title="Centered" description="Text centered horizontally" center />
</template>
```

:::

## Alert API

### Alert Attributes

| Attribute | Type | Default | Description |
|------|------|--------|------|
| type | string | info | Type (success/warning/danger/info) |
| title | string | — | Title |
| description | string | — | Auxiliary text |
| closable | boolean | true | Whether to be closable |
| center | boolean | false | Whether to center the text |
| show-icon | boolean | true | Whether to show icon |
| effect | string | light | Theme style (light/dark) |

### Alert Events

| Event Name | Parameters | Description |
|--------|------|------|
| close | — | Event triggered when Alert is closed |

### Alert Slots

| Slot Name | Description |
|--------|------|
| default | Description |
| title | Title content |
