<template>
  <div class="dropdown-demo">
    <h4 style="margin: 0 0 16px 0; color: #333;">[v] Dropdown Demo Component</h4>

    <div style="padding: 20px; background: white; border: 1px solid #e4e7ed; border-radius: 8px;">
      <h5 style="margin: 0 0 12px 0; color: #666;">Dropdown Component Placeholder</h5>

      <p style="color: #999; font-size: 13px; margin: 8px 0;">
        [!] The real JffDropdown component cannot be loaded in VitePress environment due to dependency issues.
      </p>

      <div style="margin-top: 16px; padding: 16px; background: #f5f7fa; border-radius: 4px;">
        <strong>Component Structure (Expected):</strong>
        <ul style="margin: 8px 0 0 20px; color: #666; font-size: 13px;">
          <li><code>JffDropdown</code> - Container component</li>
          <li><code>JffDropdownItem</code> - Menu item component</li>
        </ul>
      </div>

      <!-- [OK] Key fix: Use wrapper container for hover event binding -->
      <div
        class="dropdown-wrapper"
        @mouseenter="showMenu = true"
        @mouseleave="showMenu = false"
      >
        <button
          class="dropdown-trigger"
          :class="{ active: showMenu }"
        >
          Dropdown Menu v
        </button>

        <Transition name="dropdown">
          <div
            v-if="showMenu"
            class="dropdown-menu"
          >
            <div
              class="dropdown-item"
              @mouseover="hovered = 'cake'"
            >Cantonese sponge cake</div>
            <div
              class="dropdown-item"
              @mouseover="hovered = 'meatball'"
            >Lion head meatball</div>
            <div
              class="dropdown-item disabled"
              @mouseover="hovered = 'noodles'"
            >Snail rice noodles</div>
            <div
              class="dropdown-item disabled"
              @mouseover="hovered = 'pudding'"
            >Steamed milk pudding (disabled)</div>
            <div class="dropdown-divider"></div>
            <div
              class="dropdown-item"
              @mouseover="hovered = 'omelette'"
            >Oyster omelette</div>
          </div>
        </Transition>
      </div>

      <div v-if="hovered" class="hover-status">
        [i] Hovering: {{ hovered }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showMenu = ref(false)
const hovered = ref<string | null>(null)
</script>

<style scoped>
.dropdown-demo {
  padding: 24px;
  background: #fafafa;
  border-radius: 8px;
}

/* [OK] Wrapper container: position relative for menu positioning */
.dropdown-wrapper {
  position: relative;
  display: inline-block;
  margin-top: 12px;
}

.dropdown-trigger {
  padding: 8px 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.dropdown-trigger:hover,
.dropdown-trigger.active {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  min-width: 200px;
  background: white;
  border: 1px solid #e4e7ed;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  z-index: 1000;
  overflow: hidden;
}

.dropdown-item {
  padding: 10px 16px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  transition: all 0.2s ease;
}

.dropdown-item:hover:not(.disabled) {
  background: #f5f7fa;
  color: #667eea;
  padding-left: 20px;
}

.dropdown-item.disabled {
  color: #c0c4cc;
  cursor: not-allowed;
  opacity: 0.6;
}

.dropdown-divider {
  height: 1px;
  background: #e4e7ed;
  margin: 4px 0;
}

.hover-status {
  margin-top: 12px;
  padding: 8px 12px;
  background: #f0f9eb;
  border: 1px solid #e1f3d8;
  border-radius: 4px;
  font-size: 13px;
  color: #67c23a;
}

/* Transition animations */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-8px) scale(0.95);
}
</style>
