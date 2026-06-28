# Calendar

Display calendar for date selection.

## Basic Usage

::: demo calendar/basic :::

## Enhanced Examples

::: demo calendar/enhanced :::

## Calendar Attributes

| Attribute | Type | Default | Description |
|------|------|--------|------|
| value / v-model | Date/string/number/array | — | Binding value |
| range | boolean | false | Whether to select a date range (only works with v-model) |
| type | string | date | Display type (date/month/year/date-range/monthrange) |
| format | string | yyyy-MM-dd | Format of displayed value in input box |
| placeholder | string | — | Placeholder text |
| first-day-of-week | number | 7 | First day of the week (1-7, where 1 is Monday) |

## Calendar Events

| Event Name | Parameters | Description |
|--------|------|------|
| change | (value: Date \| Date[]) | Emitted when the user confirms the selected date/value |
| blur | (event: FocusEvent) | Emitted when input blurs |
| focus | (event: FocusEvent) | Emitted when input focuses |

## Calendar Slots

| Slot Name | Description |
|--------|------|
| date-cell | Custom content for date cells. Parameter: { date, data } |
