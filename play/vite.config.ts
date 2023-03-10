import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'  // vite 对vue 项目的注册
import DefineOptions from 'unplugin-vue-define-options/vite' // 让开发者能够在编译期间对 Vue 组件进行更细粒度的控制，以实现更高级的功能。

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), DefineOptions()],
})
