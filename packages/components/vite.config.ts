import { defineConfig } from 'vite'
import vue from 'vue'
import DefineOptions from 'unplugin-vue-define-options'

export default defineConfig({
  plugins: [vue(), DefineOptions({})],
})
