<template>
  <div class="dropdown-demo-enhanced">
    <div class="flex flex-wrap gap-4 items-center">
      <JffDropdown trigger="click">
        <button class="px-4 py-2 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors">
          Click Me
        </button>
        <template #dropdown>
          <ul class="py-1">
            <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Action 1</li>
            <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Action 2</li>
            <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Action 3</li>
            <li class="border-t border-gray-200 my-1"></li>
            <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Disabled Action</li>
          </ul>
        </template>
      </JffDropdown>

      <JffDropdown trigger="hover">
        <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
          Hover Me
        </button>
        <template #dropdown>
          <ul class="py-1">
            <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Hover Item 1</li>
            <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Hover Item 2</li>
          </ul>
        </template>
      </JffDropdown>

      <JffDropdown trigger="click" @command="handleCommand">
        <button class="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors">
          With Command
        </button>
        <template #dropdown>
          <ul class="py-1">
            <JffDropdownItem command="save">Save</JffDropdownItem>
            <JffDropdownItem command="delete">Delete</JffDropdownItem>
          </ul>
        </template>
      </JffDropdown>
    </div>

    <p class="mt-4 text-gray-500 text-sm">Selected command: {{ selectedCommand || 'None' }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import JffDropdown from '@justforfun-ui/components/dropdown/src/dropdown.vue'
import JffDropdownItem from '@justforfun-ui/components/dropdown/src/dropdown-item.vue'

const selectedCommand = ref<string | null>(null)

const handleCommand = (command: string) => {
  selectedCommand.value = command
}
</script>

<style scoped>
.dropdown-demo-enhanced {
  padding: 24px;
}
</style>
