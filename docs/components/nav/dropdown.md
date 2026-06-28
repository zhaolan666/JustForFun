# Dropdown Menu

Toggleable menu for displaying lists of links and actions.

## Basic Usage

::: demo dropdown/basic :::

## Enhanced Examples

::: demo dropdown/enhanced :::

## API

### Dropdown Attributes

<ComponentDoc
  :attributes="dropdownAttributes"
  :events="dropdownEvents"
  :slots="dropdownSlots"
/>

### DropdownItem Attributes

<ApiTable
  :columns="dropdownItemColumns"
  :data="dropdownItemAttributes"
/>

<script setup>
import ComponentDoc from '../../.vitepress/vitepress/components/ComponentDoc.vue'
import ApiTable from '../../.vitepress/vitepress/components/ApiTable.vue'
import {
  dropdownAttributes,
  dropdownEvents,
  dropdownSlots,
  dropdownItemAttributes
} from './dropdown.api'

const dropdownItemColumns = [
  { key: 'name', label: 'Attribute', width: '20%' },
  { key: 'description', label: 'Description', width: '45%' },
  { key: 'type', label: 'Type', width: '25%' },
  { key: 'default', label: 'Default', width: '10%' }
]
</script>
