<template>
  <div class="table-demo-enhanced">
    <div class="p-4">
      <h4 class="font-semibold mb-4">Basic Table</h4>
      <div class="border border-gray-200 rounded-lg overflow-hidden">
        <table class="w-full">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-4 py-3 text-left text-sm font-semibold text-gray-600 border-b">Date</th>
              <th class="px-4 py-3 text-left text-sm font-semibold text-gray-600 border-b">Name</th>
              <th class="px-4 py-3 text-left text-sm font-semibold text-gray-600 border-b">Address</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in tableData" :key="index" class="hover:bg-gray-50">
              <td class="px-4 py-3 text-sm text-gray-700 border-b">{{ item.date }}</td>
              <td class="px-4 py-3 text-sm text-gray-700 border-b">{{ item.name }}</td>
              <td class="px-4 py-3 text-sm text-gray-700 border-b">{{ item.address }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const tableData = [
  { date: '2024-01-01', name: 'Tom', address: 'No. 189, Grove St., Los Angeles' },
  { date: '2024-01-02', name: 'Jack', address: 'No. 190, Grove St., Los Angeles' },
  { date: '2024-01-03', name: 'Alice', address: 'No. 191, Grove St., Los Angeles' },
]
</script>

<style scoped>
.table-demo-enhanced {
  padding: 24px;
}
</style>
