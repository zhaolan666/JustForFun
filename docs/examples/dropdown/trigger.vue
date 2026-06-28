<template>
  <div class="demo-dropdown-container">
    <div class="trigger-demo-group">
      <JffDropdown trigger="hover">
        <JffButton>
          Hover trigger
          <i class="ri-arrow-down-s-line dropdown-icon"></i>
        </JffButton>
        <template #dropdown>
          <div class="dropdown-menu-demo">
            <JffDropdownItem>Cantonese sponge cake</JffDropdownItem>
            <JffDropdownItem>Lion head meatball</JffDropdownItem>
          </div>
        </template>
      </JffDropdown>

      <JffDropdown trigger="click">
        <JffButton>
          Click trigger
          <i class="ri-arrow-down-s-line dropdown-icon"></i>
        </JffButton>
        <template #dropdown>
          <div class="dropdown-menu-demo">
            <JffDropdownItem>Cantonese sponge cake</JffDropdownItem>
            <JffDropdownItem>Lion head meatball</JffDropdownItem>
          </div>
        </template>
      </JffDropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { JffDropdown, JffDropdownItem } from '@justforfun-ui/components/dropdown'
import { JffButton } from '@justforfun-ui/components/button'
</script>

<style scoped>
.demo-dropdown-container {
  padding: 20px;
}

.trigger-demo-group {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.dropdown-icon {
  margin-left: 4px;
  font-size: 12px;
}

.dropdown-menu-demo {
  padding: 8px 0;
}
</style>
