# Select

When there are too many options, use a dropdown menu to display and select content.

## Basic Usage

Suitable for basic single selection scenarios.

:::demo

<JffSelect placeholder="Please select" style="width: 240px;">
  <JffOption label="Cantonese sponge cake" value="option1" />
  <JffOption label="Steamed milk pudding" value="option2" />
  <JffOption label="Oyster omelette" value="option3" />
  <JffOption label="Dragon beard noodles" value="option4" />
  <JffOption label="Peking duck" value="option5" />
</JffSelect>

```vue
<template>
  <JffSelect v-model="selected" placeholder="Please select" style="width: 240px;">
    <JffOption
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </JffSelect>
</template>

<script setup>
import { ref } from 'vue'
const selected = ref('')
const options = [
  { value: 'option1', label: 'Cantonese sponge cake' },
  { value: 'option2', label: 'Steamed milk pudding' },
  { value: 'option3', label: 'Oyster omelette' },
  { value: 'option4', label: 'Dragon beard noodles' },
  { value: 'option5', label: 'Peking duck' },
]
</script>
```

:::

## Disabled Option

Set `disabled` to true in `JffOption` to disable that option.

:::demo

<JffSelect placeholder="Please select" style="width: 240px;">
  <JffOption label="Cantonese sponge cake" value="option1" />
  <JffOption label="Steamed milk pudding" value="option2" disabled />
  <JffOption label="Oyster omelette" value="option3" />
  <JffOption label="Dragon beard noodles" value="option4" />
  <JffOption label="Peking duck" value="option5" />
</JffSelect>

```vue
<template>
  <JffSelect v-model="selected" placeholder="Please select" style="width: 240px;">
    <JffOption
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    />
  </JffSelect>
</template>

<script setup>
import { ref } from 'vue'
const selected = ref('')
const options = [
  { value: 'option1', label: 'Cantonese sponge cake' },
  { value: 'option2', label: 'Steamed milk pudding', disabled: true },
  { value: 'option3', label: 'Oyster omelette' },
  { value: 'option4', label: 'Dragon beard noodles' },
  { value: 'option5', label: 'Peking duck' },
]
</script>
```

:::

## Disabled State

Select is in a disabled state.

:::demo

<JffSelect disabled placeholder="Please select" style="width: 240px;">
  <JffOption label="Cantonese sponge cake" value="option1" />
  <JffOption label="Steamed milk pudding" value="option2" />
  <JffOption label="Oyster omelette" value="option3" />
</JffSelect>

```vue
<template>
  <JffSelect v-model="selected" disabled placeholder="Please select" style="width: 240px;">
    <JffOption
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </JffSelect>
</template>

<script setup>
import { ref } from 'vue'
const selected = ref('')
const options = [
  { value: 'option1', label: 'Cantonese sponge cake' },
  { value: 'option2', label: 'Steamed milk pudding' },
  { value: 'option3', label: 'Oyster omelette' },
]
</script>
```

:::

## Clearable Single Selection

Includes a clear button to reset the selection to its initial state.

:::demo

<JffSelect clearable model-value="option1" placeholder="Please select" style="width: 240px;">
  <JffOption label="Cantonese sponge cake" value="option1" />
  <JffOption label="Steamed milk pudding" value="option2" />
  <JffOption label="Oyster omelette" value="option3" />
</JffSelect>

```vue
<template>
  <JffSelect v-model="selected" clearable placeholder="Please select" style="width: 240px;">
    <JffOption
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </JffSelect>
</template>

<script setup>
import { ref } from 'vue'
const selected = ref('option1')
const options = [
  { value: 'option1', label: 'Cantonese sponge cake' },
  { value: 'option2', label: 'Steamed milk pudding' },
  { value: 'option3', label: 'Oyster omelette' },
]
</script>
```

:::

## Basic Multiple Selection

Suitable for basic multi-selection scenarios, displaying selected items as Tags.

:::demo Multi-select functionality requires using array-type values with `v-model`

<JffSelect multiple placeholder="Please select" style="width: 240px;">
  <JffOption label="Cantonese sponge cake" value="option1" />
  <JffOption label="Steamed milk pudding" value="option2" />
  <JffOption label="Oyster omelette" value="option3" />
  <JffOption label="Dragon beard noodles" value="option4" />
  <JffOption label="Peking duck" value="option5" />
</JffSelect>

```vue
<template>
  <JffSelect
    v-model="selected"
    multiple
    placeholder="Please select"
    style="width: 240px;"
  >
    <JffOption
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </JffSelect>
</template>

<script setup>
import { ref } from 'vue'
const selected = ref([])
const options = [
  { value: 'option1', label: 'Cantonese sponge cake' },
  { value: 'option2', label: 'Steamed milk pudding' },
  { value: 'option3', label: 'Oyster omelette' },
  { value: 'option4', label: 'Dragon beard noodles' },
  { value: 'option5', label: 'Peking duck' },
]
</script>
```

:::

## Custom Template

You can customize how each option is rendered.

:::demo

<JffSelect placeholder="Please select" style="width: 240px;">
  <JffOption label="Cantonese sponge cake" value="option1">
    <span style="float: left">Cantonese sponge cake</span>
    <span style="float: right; color: #8492a6; font-size: 13px">option1</span>
  </JffOption>
  <JffOption label="Steamed milk pudding" value="option2">
    <span style="float: left">Steamed milk pudding</span>
    <span style="float: right; color: #8492a6; font-size: 13px">option2</span>
  </JffOption>
  <JffOption label="Oyster omelette" value="option3">
    <span style="float: left">Oyster omelette</span>
    <span style="float: right; color: #8492a6; font-size: 13px">option3</span>
  </JffOption>
</JffSelect>

```vue
<template>
  <JffSelect v-model="selected" placeholder="Please select" style="width: 240px;">
    <JffOption
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
      <span style="float: left">{{ item.label }}</span>
      <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
    </JffOption>
  </JffSelect>
</template>

<script setup>
import { ref } from 'vue'
const selected = ref('')
const options = [
  { value: 'option1', label: 'Cantonese sponge cake' },
  { value: 'option2', label: 'Steamed milk pudding' },
  { value: 'option3', label: 'Oyster omelette' },
  { value: 'option4', label: 'Dragon beard noodles' },
  { value: 'option5', label: 'Peking duck' },
]
</script>
```

:::

## Select API

### Select Attributes

| Attribute | Type | Default | Description |
|------|------|--------|------|
| model-value / v-model | string / number / boolean / object | — | Binding value of selected option |
| multiple | boolean | false | Whether to support multiple selection |
| disabled | boolean | false | Whether to be disabled |
| value-key | string | value | Property name used as unique identifier for value, required when binding value is an object |
| size | string | default | Input box size (large/default/small) |
| clearable | boolean | false | Whether to be clearable |
| placeholder | string | Select | Placeholder |
| filterable | boolean | false | Whether to be searchable |
| allow-create | boolean | false | Whether to allow user to create new entries, must be used with `filterable` |
| remote | boolean | false | Whether to use remote search |
| loading | boolean | false | Whether data is being loaded remotely |
| loading-text | string | Loading | Text to display during remote loading |
| no-match-text | string | No matching data | Text to display when search has no matches |
| no-data-text | string | No data | Text to display when there are no options |
| popper-class | string | — | Class name for the dropdown |
| reserve-keyword | boolean | true | When in multiple selection and searchable mode, whether to keep the current search keyword after selecting an option |
| default-first-option | boolean | false | When pressing Enter in the input box, select the first matching option |
| popper-options | object | — | Custom popper options |
| automatic-dropdown | boolean | false | For non-searchable Select, whether to automatically show the dropdown menu when the input box gets focus |

### Select Events

| Event Name | Parameters | Description |
|--------|------|------|
| change | val, current selected value | Triggered when the selected value changes |
| visible-change | val, true when visible, false when hidden | Triggered when dropdown shows/hides |
| remove-tag | val, tag value removed | Triggered when tag is removed in multiple selection mode |
| clear | — | Triggered when user clicks the clear button in clearable single selection mode |
| blur | (event: FocusEvent) | Triggered when input loses focus |
| focus | (event: FocusEvent) | Triggered when input gains focus |

### Select Slots

| Slot Name | Description |
|--------|------|
| default | Option component list |
| prefix | Select component header content |
| empty | List when there are no options |
| loading | List during remote loading |

### Option Group Attributes

| Attribute | Type | Default | Description |
|------|------|--------|------|
| label | string | — | Group name |
| disabled | boolean | false | Whether to disable all options in this group |

### Option Attributes

| Attribute | Type | Default | Description |
|------|------|--------|------|
| value | string / number / boolean / object | — | Option value |
| label | string / number | — | Option label, defaults to `value` if not set |
| disabled | boolean | false | Whether to disable this option |
