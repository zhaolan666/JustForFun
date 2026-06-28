<template>
  <div class="jff-api-table-container">
    <h3 v-if="title" class="jff-api-table-title">{{ title }}</h3>
    <div class="jff-table-wrapper">
      <table class="jff-api-table">
        <thead>
          <tr>
            <th v-for="col in columns" :key="col.key" :style="{ width: col.width }">
              {{ col.label }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, idx) in data" :key="idx" class="jff-table-row">
            <td v-for="col in columns" :key="col.key" class="jff-table-cell" :data-col="col.key">
              <template v-if="col.key === 'name'">
                <code class="jff-api-name">{{ row[col.key] }}</code>
              </template>
              <template v-else-if="col.key === 'type'">
                <code class="jff-api-type">{{ row[col.key] }}</code>
              </template>
              <template v-else-if="col.key === 'default'">
                <code v-if="row[col.key]" class="jff-api-default">{{ row[col.key] }}</code>
                <span v-else class="jff-api-default-empty">—</span>
              </template>
              <template v-else>
                <span class="jff-cell-content">{{ row[col.key] }}</span>
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  title?: string
  columns: Array<{
    key: string
    label: string
    width?: string
  }>
  data: Array<Record<string, any>>
}>()
</script>

<style lang="scss">
.jff-api-table-container {
  display: block !important;
  width: 100% !important;
  overflow: visible !important;
  min-height: auto !important;
  max-height: none !important;
  height: auto !important;
  visibility: visible !important;
  opacity: 1 !important;
  position: relative !important;
}

.jff-api-table-title {
  font-size: 1.125rem !important;
  font-weight: 600 !important;
  color: #2c3e50 !important;
  margin: 0 0 16px 0 !important;
}

.jff-table-wrapper {
  display: block !important;
  width: 100% !important;
  overflow-x: auto !important;
  overflow-y: visible !important;
  border-radius: 10px !important;
  border: 1px solid #e2e8f0 !important;
  background: #ffffff !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03) !important;
  min-height: auto !important;
  max-height: none !important;
  height: auto !important;
  
  &::-webkit-scrollbar {
    height: 6px !important;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f5f9 !important;
    border-radius: 3px !important;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #cbd5e1 !important;
    border-radius: 3px !important;
    
    &:hover {
      background: #94a3b8 !important;
    }
  }
}

.jff-api-table {
  display: table !important;
  width: 100% !important;
  border-collapse: separate !important;
  border-spacing: 0 !important;
  font-size: 0.875rem !important;
  line-height: 1.6 !important;
  min-height: auto !important;
  max-height: none !important;
  height: auto !important;

  th,
  td {
    display: table-cell !important;
    padding: 14px 18px !important;
    text-align: left !important;
    vertical-align: middle !important;
    border-bottom: 1px solid #eef2f6 !important;
  }

  th {
    background-color: #fafbfc !important;
    font-weight: 600 !important;
    color: #475569 !important;
    white-space: nowrap !important;
    font-size: 0.8125rem !important;
    letter-spacing: 0.01em !important;
    text-transform: capitalize !important;
    border-bottom: 2px solid #e2e8f0 !important;
  }

  td {
    color: #334155 !important;
  }

  .jff-cell-content {
    display: block !important;
    line-height: 1.65 !important;
    word-wrap: break-word !important;
    overflow-wrap: break-word !important;
  }

  .jff-table-row {
    transition: all 0.15s ease !important;
    
    &:hover {
      background-color: #f8fafc !important;
      
      td {
        border-bottom-color: #e2e8f0 !important;
      }
    }
    
    &:last-child td {
      border-bottom: none !important;
    }
    
    &:nth-child(even) {
      background-color: #fafbfd !important;
      
      &:hover {
        background-color: #f8fafc !important;
      }
    }
  }
}

.jff-api-name {
  color: #2563eb !important;
  font-weight: 600 !important;
  font-family: SF Mono, Consolas, Liberation Mono, Menlo, monospace !important;
  background: #eff6ff !important;
  padding: 1px 7px !important;
  border-radius: 3px !important;
  font-size: 0.8125em !important;
  border: none !important;
  white-space: nowrap !important;
  display: inline-block !important;
  width: auto !important;
  height: auto !important;
}

.jff-api-type {
  color: #7c3aed !important;
  font-family: SF Mono, Consolas, Liberation Mono, Menlo, monospace !important;
  background: #f5f3ff !important;
  padding: 1px 7px !important;
  border-radius: 3px !important;
  font-size: 0.8125em !important;
  border: none !important;
  white-space: normal !important;
  display: inline-block !important;
  line-height: 1.5 !important;
  max-width: 100% !important;
  word-wrap: break-word !important;
  overflow-wrap: break-word !important;
  width: auto !important;
  height: auto !important;
}

.jff-api-default {
  color: #059669 !important;
  font-family: SF Mono, Consolas, Liberation Mono, Menlo, monospace !important;
  background: #ecfdf5 !important;
  padding: 1px 7px !important;
  border-radius: 3px !important;
  font-size: 0.8125em !important;
  border: none !important;
  white-space: nowrap !important;
  display: inline-block !important;
  width: auto !important;
  height: auto !important;
}

.jff-api-default-empty {
  color: transparent !important;
  font-size: 0 !important;
  padding: 0 !important;
  margin: 0 !important;
}

html.dark .jff-table-wrapper {
  border-color: #334155 !important;
  background: #0f172a !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.2) !important;

  &::-webkit-scrollbar-track {
    background: #1e293b !important;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #475569 !important;
    
    &:hover {
      background: #64748b !important;
    }
  }
}

html.dark .jff-api-table {
  th {
    background-color: #1e293b !important;
    color: #94a3b8 !important;
    border-bottom-color: #334155 !important;
  }

  td {
    color: #cbd5e1 !important;
    border-bottom-color: #1e293b !important;
  }

  .jff-table-row {
    &:nth-child(even) {
      background-color: #172033 !important;
      
      &:hover {
        background-color: #1a2744 !important;
        
        td {
          border-bottom-color: #334155 !important;
        }
      }
    }
    
    &:hover {
      background-color: #1a2744 !important;
      
      td {
        border-bottom-color: #334155 !important;
      }
    }
  }
}

html.dark .jff-api-name {
  color: #60a5fa !important;
  background: rgba(37, 99, 235, 0.15) !important;
}

html.dark .jff-api-type {
  color: #a78bfa !important;
  background: rgba(124, 58, 237, 0.15) !important;
}

html.dark .jff-api-default {
  color: #34d399 !important;
  background: rgba(5, 150, 105, 0.15) !important;
}

html.dark .jff-api-default-empty {
  color: #475569 !important;
}

html.dark .jff-api-table-title {
  color: #e2e8f0 !important;
}
</style>
