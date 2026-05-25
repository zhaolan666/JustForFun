import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue' // vite 对vue 项目的注册
import vueJsx from '@vitejs/plugin-vue-jsx'
import DefineOptions from 'unplugin-vue-define-options/vite' // 让开发者能够在编译期间对 Vue 组件进行更细粒度的控制，以实现更高级的功能。
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), DefineOptions()],
  resolve: {
    alias: {
      '@justforfun-ui/components': path.resolve(
        __dirname,
        '../packages/components',
      ),
      '@justforfun-ui/theme-chalk': path.resolve(
        __dirname,
        '../packages/theme-chalk',
      ),
      '@justforfun-ui/utils': path.resolve(__dirname, '../packages/utils'),
      '@justforfun-ui/hooks': path.resolve(__dirname, '../packages/hooks'),
      '@justforfun-ui/constants': path.resolve(
        __dirname,
        '../packages/constants',
      ),
      '@justforfun-ui/locale': path.resolve(__dirname, '../packages/locale'),
    },
    dedupe: ['vue', '@vueuse/core', 'lodash-unified', 'async-validator'],
  },
})
