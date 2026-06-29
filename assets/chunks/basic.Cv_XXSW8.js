const n=`<template>
  <div class="dropdown-demo">
    <div class="flex flex-wrap gap-4 items-center">
      <JffDropdown trigger="hover">
        <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Hover Me
        </button>
        <template #dropdown>
          <ul class="py-1">
            <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Action 1</li>
            <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Action 2</li>
            <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Action 3</li>
            <li class="border-t border-gray-200 my-1"></li>
            <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500">Danger Action</li>
          </ul>
        </template>
      </JffDropdown>

      <JffDropdown trigger="click">
        <button class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Click Me
        </button>
        <template #dropdown>
          <ul class="py-1">
            <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Item 1</li>
            <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Item 2</li>
          </ul>
        </template>
      </JffDropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import JffDropdown from '@justforfun-ui/components/dropdown/src/dropdown.vue'
<\/script>

<style scoped>
.dropdown-demo {
  padding: 20px;
}
</style>
`;export{n as default};
