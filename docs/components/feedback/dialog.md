# Dialog

Informs the user while preserving the current page state, and carries related operations.

## Basic Usage

Dialog pops up a dialog box, suitable for scenarios requiring more customization.

::: demo dialog/basic :::

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
