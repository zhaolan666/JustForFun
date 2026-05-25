# Dialog

Informs the user while preserving the current page state, and carries related operations.

## Basic Usage

Dialog pops up a dialog box, suitable for scenarios requiring more customization.

:::demo

<DialogDemo />

```vue
<template>
  <div class="flex flex-col gap-6">
    <div class="flex gap-4 flex-wrap items-center">
      <span class="text-sm text-gray-500">Basic Usage:</span>
      <JffButton type="primary" @click="visible1 = true">Open Dialog</JffButton>
      <JffDialog v-model:visible="visible1" title="Tip">
        <p>This is a message</p>
      </JffDialog>
    </div>
    <div class="flex gap-4 flex-wrap items-center">
      <span class="text-sm text-gray-500">Nested Form:</span>
      <JffButton type="primary" @click="visible2 = true">Open Dialog with Form</JffButton>
      <JffDialog v-model:visible="visible2" title="Shipping Address" width="500px">
        <JffForm :model="form" label-width="80px">
          <JffFormItem label="Activity Name">
            <JffInput v-model="form.name" />
          </JffFormItem>
          <JffFormItem label="Activity Zone">
            <JffSelect v-model="form.region">
              <JffOption label="Zone One" value="shanghai" />
              <JffOption label="Zone Two" value="beijing" />
            </JffSelect>
          </JffFormItem>
        </JffForm>
      </JffDialog>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
const visible1 = ref(false)
const visible2 = ref(false)
const form = reactive({ name: '', region: '' })
</script>
```

:::

## Dialog API

### Dialog Attributes

| Attribute | Type | Default | Description |
|------|------|--------|------|
| visible | boolean | - | Whether to show Dialog |
| title | string | - | Dialog title |
| width | string/number | 50% | Dialog width |
| top | string | 15vh | Dialog CSS margin-top value |
| modal | boolean | true | Whether to show mask |
| close-on-click-modal | boolean | true | Whether Dialog can be closed by clicking the mask |
| close-on-press-escape | boolean | true | Whether Dialog can be closed by pressing ESC |
| show-close | boolean | true | Whether to show close button |
| align-center | boolean | false | Whether to center align the Dialog content |
| fullscreen | boolean | false | Whether to show fullscreen Dialog |

### Dialog Events

| Event Name | Parameters | Description |
|--------|------|------|
| open | - | Callback when Dialog opens |
| opened | - | Callback when Dialog open animation ends |
| close | - | Callback when Dialog closes |
| closed | - | Callback when Dialog close animation ends |

### Dialog Slots

| Slot Name | Description |
|--------|------|
| default | Dialog content |
| header | Dialog title content |
| footer | Dialog button operation area content |
