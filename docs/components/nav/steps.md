# Steps

Guide users through tasks according to steps.

## Basic Usage

::: demo steps/basic :::

## Enhanced Examples

::: demo steps/enhanced :::

## Steps Attributes

| Attribute | Type | Default | Description |
|------|------|--------|------|
| active | number | 0 | Index of the currently active step, starts from 0 |
| direction | string | horizontal | Display direction (vertical/horizontal) |
| align-center | boolean | false | Whether to center step bar |
| simple | boolean | false | Whether to apply simple theme |
| finish-status | string | finish | Status of finished steps (wait/process/finish/error/success) |
| process-status | string | process | Status of current step (wait/process/finish/error/success) |
| end-status | string | wait | Status of end step (wait/process/finish/error/success) |

## Step Attributes

| Attribute | Type | Default | Description |
|------|------|--------|------|
| title | string | — | Step title |
| description | string | — | Optional supplementary description, displayed below the title |
| icon | string | — | Icon class name for the step |
| status | string | — | Current state of the step. If not set, it will be determined by Steps. Can be set to: wait / process / finish / error / success |

## Step Slots

| Slot Name | Description |
|--------|------|
| icon | Custom icon content |
| default | Custom default content |
