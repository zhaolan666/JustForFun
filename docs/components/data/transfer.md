# Transfer

Transfer data between two columns in a list.

## Basic Usage

::: demo transfer/basic :::

## Enhanced Examples

::: demo transfer/enhanced :::

## Transfer Attributes

| Attribute | Type | Default | Description |
|------|------|--------|------|
| value / v-model | array | — | Binding value, an array of keys of selected items |
| data | array | [] | Data source for the transfer. The data should be an array of objects with key and label properties |
| titles | array | ['List 1', 'List 2'] | Titles for the two panels |
| button-texts | array | ['', ''] | Texts for the buttons |
| filter-placeholder | string | Enter keyword | Placeholder text for the search input |
| filterable | boolean | false | Whether Transfer is filterable |
| filter-method | function | — | Custom filtering method. First parameter is query string, second is each item |
| target-order | string | original | Sorting method for target list. If set to push, newly added items will be pushed to the end; if original, they will keep the same order as data source |
| left-default-checked | array | [] | Array of initial checked items on left panel |
| right-default-checked | array | [] | Array of initial checked items on right panel |
| props | object | { key: 'key', label: 'label' } | Prop aliases for data source |

## Transfer Events

| Event Name | Parameters | Description |
|--------|------|------|
| change | (value: string\|number[], direction: string, movedKeys: string\|number[]) | Emitted when options in the target list change (direction can be 'left' or 'right') |
| left-check-change | (checkedKeys: any[], checkedValues: any[]) | Emitted when selection on left panel changes |
| right-check-change | (checkedKeys: any[], checkedValues: any[]) | Emitted when selection on right panel changes |

## Transfer Slots

| Slot Name | Description |
|--------|------|
| default | Custom content for option. Parameter: { option } |
| left-footer | Content at bottom of left panel |
| right-footer | Content at bottom of right panel |
