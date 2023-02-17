/// <reference types="vitest" />

import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue(),
    AutoImport({
      imports: [
        'vue',
        'vue/macros',
        '@vueuse/core',
      ],
      dts: true,
    }),
    Components({
      dts: true,
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        charset: true,
        math: 'always', // 括号内才使用数学计算
        mainColor: '#ff4400', // 全局变量
      },
    },
  },
  test: {
    environment: 'js-dom',
  },

})
