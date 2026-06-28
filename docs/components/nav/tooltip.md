# Tooltip

Used to display informative text when users hover over, focus on, or click an element.

## Basic Usage

::: demo tooltip/basic :::

## Enhanced Examples

::: demo tooltip/enhanced :::

## API

### Tooltip Attributes

| Attribute | Type | Default | Description |
|------|------|--------|------|
| content | string/Node | — | Content, can be overridden by slot #content |
| placement | string | top | Position of the tooltip (top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end) |
| effect | string | dark | Theme (dark/light) |
| disabled | boolean | false | Whether Tooltip is disabled |
| offset | number | 0 | Offset of the tooltip position |
| transition | string | el-fade-in-linear | Animation name |
| show-after | number | 0 | Delay in ms to appear (only works when trigger is hover) |
| hide-after | number | 0 | Delay in ms to disappear (only works when trigger is hover) |
| auto-close | number/boolean | 0 | Timeout in ms after which tooltip closes (0 means no auto close) |
| show-arrow | boolean | true | Whether to show arrow |
| popper-class | string | — | Custom class name for tooltip's popup |
| enterable | boolean | true | Whether mouse can enter tooltip's popup |
| virtual-triggering | boolean | false | Whether to enable virtual triggering |
| virtual-ref | — | — | Reference element for virtual triggering |

### Tooltip Events

| Event Name | Parameters | Description |
|--------|------|------|
| show | — | Triggered when tooltip shows |
| hide | — | Triggered when tooltip hides |
| before-show | — | Triggered when tooltip's DOM is about to appear |
| before-hide | — | Triggered when tooltip's DOM is about to disappear |
| open-delay-settled | — | Triggered when the delay timer for showing is settled |

### Tooltip Slots

| Slot Name | Description |
|--------|------|
| content | Custom content of the tooltip |
| default | Element that triggers the tooltip (replaces reference element) |
