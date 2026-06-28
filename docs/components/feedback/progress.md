# Progress

Used to show the current progress of an operation.

## Basic Usage

::: demo progress/basic :::

## Enhanced Examples

::: demo progress/enhanced :::

## API

### Progress Attributes

| Attribute | Type | Default | Description |
|------|------|--------|------|
| percentage | number | 0 | Percentage (required) |
| type | string | line | Progress bar type (line/circle/dashboard) |
| stroke-width | number | 6 | Width of the progress bar (px) |
| text-inside | boolean | false | Whether to place the percentage inside the progress bar |
| status | string | — | Current status of the progress bar (success/exception/warning) |
| color | string/function/array | — | Custom color for the progress bar |
| width | number | — | Width of the circle progress bar (px) |
| show-text | boolean | true | Whether to display percentage text |

### Progress Events

| Event Name | Parameters | Description |
|--------|------|------|

### Progress Slots

| Slot Name | Description | Parameters |
|--------|------|------|
| default | Custom content, parameter is { percentage } | percentage |
