<template>
  <div class="select-demo">
    <h4 style="margin: 0 0 16px 0; color: #333;">[v] Select Demo Component</h4>
    
    <div style="padding: 20px; background: white; border: 1px solid #e4e7ed; border-radius: 8px;">
      <h5 style="margin: 0 0 12px 0; color: #666;">Basic Usage</h5>
      
      <!-- Basic Select -->
      <div style="margin-bottom: 24px;">
        <label style="display: block; margin-bottom: 8px; font-size: 14px; color: #606266;">Basic Select:</label>
        <div class="select-wrapper" style="width: 240px;">
          <button 
            class="select-trigger"
            @click="toggleSelect('basic')"
          >
            {{ basicSelected || 'Please select' }}
            <span class="select-arrow">▼</span>
          </button>
          
          <Transition name="dropdown">
            <div 
              v-if="activeSelect === 'basic'" 
              class="select-dropdown"
              @mouseleave="activeSelect = null"
            >
              <div 
                v-for="option in options" 
                :key="option.value"
                class="select-option"
                :class="{ selected: basicSelected === option.label, disabled: option.disabled }"
                @click="!option.disabled && (basicSelected = option.label)"
              >
                {{ option.label }}
              </div>
            </div>
          </Transition>
        </div>
        <div style="margin-top: 8px; font-size: 12px; color: #909399;">
          Selected: {{ basicSelected || 'None' }}
        </div>
      </div>

      <!-- Multiple Select -->
      <div style="margin-bottom: 24px;">
        <label style="display: block; margin-bottom: 8px; font-size: 14px; color: #606266;">Multiple Selection:</label>
        <div class="select-wrapper" style="width: 400px;">
          <button 
            class="select-trigger multiple"
            @click="toggleSelect('multiple')"
          >
            <span v-if="multipleSelected.length === 0" style="color: #c0c4cc;">Please select</span>
            <span v-else>
              <span 
                v-for="(item, index) in multipleSelected" 
                :key="index"
                class="tag"
              >
                {{ item }} <span @click.stop="removeMultiple(item)">×</span>
              </span>
            </span>
            <span class="select-arrow">▼</span>
          </button>
          
          <Transition name="dropdown">
            <div 
              v-if="activeSelect === 'multiple'" 
              class="select-dropdown"
              @mouseleave="activeSelect = null"
            >
              <div 
                v-for="option in options" 
                :key="option.value"
                class="select-option"
                :class="{ selected: multipleSelected.includes(option.label), disabled: option.disabled }"
                @click="!option.disabled && toggleMultiple(option.label)"
              >
                <span v-if="multipleSelected.includes(option.label)" class="checkmark">[OK]</span>
                {{ option.label }}
              </div>
            </div>
          </Transition>
        </div>
        <div style="margin-top: 8px; font-size: 12px; color: #909399;">
          Selected: {{ multipleSelected.join(', ') || 'None' }}
        </div>
      </div>

      <!-- Disabled Option -->
      <div>
        <label style="display: block; margin-bottom: 8px; font-size: 14px; color: #606266;">Disabled Options:</label>
        <div class="select-wrapper" style="width: 240px;">
          <button 
            class="select-trigger"
            @click="toggleSelect('disabled')"
          >
            {{ disabledSelected || 'Please select' }}
            <span class="select-arrow">▼</span>
          </button>
          
          <Transition name="dropdown">
            <div 
              v-if="activeSelect === 'disabled'" 
              class="select-dropdown"
              @mouseleave="activeSelect = null"
            >
              <div 
                v-for="option in options" 
                :key="option.value"
                class="select-option"
                :class="{ selected: disabledSelected === option.label, disabled: option.disabled }"
                @click="!option.disabled && (disabledSelected = option.label)"
              >
                {{ option.label }}
                <span v-if="option.disabled" class="disabled-badge">Disabled</span>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeSelect = ref<string | null>(null)
const basicSelected = ref('')
const disabledSelected = ref('')
const multipleSelected = ref<string[]>(['Cantonese sponge cake', 'Dragon beard noodles'])

const options = [
  { label: 'Cantonese sponge cake', value: 'option1' },
  { label: 'Steamed milk pudding', value: 'option2', disabled: true },
  { label: 'Oyster omelette', value: 'option3' },
  { label: 'Dragon beard noodles', value: 'option4' },
  { label: 'Peking duck', value: 'option5' }
]

function toggleSelect(name: string) {
  activeSelect.value = activeSelect.value === name ? null : name
}

function toggleMultiple(label: string) {
  const index = multipleSelected.value.indexOf(label)
  if (index > -1) {
    multipleSelected.value.splice(index, 1)
  } else {
    multipleSelected.value.push(label)
  }
}

function removeMultiple(label: string) {
  const index = multipleSelected.value.indexOf(label)
  if (index > -1) {
    multipleSelected.value.splice(index, 1)
  }
}
</script>

<style scoped>
.select-demo {
  padding: 24px;
  background: #fafafa;
  border-radius: 8px;
}

.select-wrapper {
  position: relative;
  display: inline-block;
}

.select-trigger {
  width: 100%;
  padding: 8px 32px 8px 12px;
  background: white;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  color: #606266;
  text-align: left;
  position: relative;
  transition: all 0.3s ease;
}

.select-trigger:hover {
  border-color: #409eff;
}

.select-arrow {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 12px;
  color: #c0c4cc;
}

.select-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  width: 100%;
  max-height: 274px;
  padding: 8px 0;
  background: white;
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  overflow-y: auto;
}

.select-option {
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
  color: #606266;
  transition: background-color 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.select-option:hover {
  background-color: #ecf5ff;
  color: #409eff;
}

.select-option.selected {
  color: #409eff;
  font-weight: 500;
}

.select-option.disabled {
  color: #c0c4cc;
  cursor: not-allowed;
}

.select-option.disabled:hover {
  background-color: transparent;
  color: #c0c4cc;
}

.checkmark {
  margin-right: 8px;
  color: #409eff;
}

.disabled-badge {
  font-size: 12px;
  color: #f56c6c;
  background: #fef0f0;
  padding: 2px 6px;
  border-radius: 2px;
}

.tag {
  display: inline-flex;
  align-items: center;
  margin: 2px 4px 2px 0;
  padding: 2px 8px;
  background: #ecf5ff;
  color: #409eff;
  border-radius: 4px;
  font-size: 12px;
}

.tag span {
  margin-left: 4px;
  cursor: pointer;
  color: #909399;
}

.tag span:hover {
  color: #f56c6c;
}

.select-trigger.multiple {
  height: auto;
  min-height: 36px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

/* 过渡动画 */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.25s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
