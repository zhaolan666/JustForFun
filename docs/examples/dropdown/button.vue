<template>
  <div class="demo-dropdown-container">
    <JffDropdown split-button type="primary">
      Dropdown
      <template #dropdown>
        <div class="dropdown-menu-demo">
          <JffDropdownItem>Cantonese sponge cake</JffDropdownItem>
          <JffDropdownItem>Lion head meatball</JffDropdownItem>
          <JffDropdownItem>Snail rice noodles</JffDropdownItem>
          <JffDropdownItem>Steamed milk pudding</JffDropdownItem>
          <JffDropdownItem>Oyster omelette</JffDropdownItem>
        </div>
      </template>
    </JffDropdown>
  </div>
</template>

<script lang="ts" setup>
import { JffDropdown, JffDropdownItem } from '@justforfun-ui/components/dropdown'
</script>

<style scoped>
.demo-dropdown-container {
  padding: 20px;
}

.dropdown-menu-demo {
  padding: 8px 0;
}
</style>
