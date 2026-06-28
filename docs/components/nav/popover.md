# Popover

A popup box that can contain any content triggered by hover, click, or focus.

## Basic Usage

::: demo popover/basic :::

## Enhanced Examples

::: demo popover/enhanced :::

## API

### Popover Attributes

| Attribute | Type | Default | Description |
|------|------|--------|------|
| trigger | string | click | How to trigger the popover (click/focus/hover/contextmenu) |
| title | string | — | Title, can be overridden by slot #title |
| content | string/Node | — | Content, can be overridden by slot #default |
| width | string/number | 150px | Width |
| placement | string | bottom | Position (top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end) |
| disabled | boolean | false | Whether Popover is disabled |
| visible / v-model:visible | boolean | — | Whether Popover is shown |
| offset | number | 0 | Offset of the popover position |
| transition | string | el-fade-in-linear | Animation name |
| show-after | number | 0 | Delay in ms to appear (only works when trigger is hover) |
| hide-after | number | 0 | Delay in ms to disappear (only works when trigger is hover) |
| auto-close | number/boolean | 0 | Timeout in ms after which popover closes |
| popper-class | string | — | Custom class name for popover's popup |
| show-arrow | boolean | true | Whether to show arrow |

### Popover Events

| Event Name | Parameters | Description |
|--------|------|------|
| show | — | Triggered when Popover shows |
| hide | — | Triggered when Popover hides |
| before-show | — | Triggered when Popover's DOM is about to appear |
| before-hide | — | Triggered when Popover's DOM is about to disappear |
| open-delay-settled | — | Triggered when the delay timer for showing is settled |
| after-enter | — | Triggered when the showing animation ends |
| after-leave | — | Triggered when the hiding animation ends |

### Popover Slots

| Slot Name | Description |
|--------|------|
| default | Content of the popover |
| reference | Element that triggers the popover (HTML tag or component) |
| title | Custom title content |
