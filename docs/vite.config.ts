import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Unocss from 'unocss/vite'
import presetUno from 'unocss/preset-uno'

export default defineConfig({
  plugins: [
    // 添加JSX
    vueJsx(),
    Unocss({
      presets: [
        presetUno()
      ]
    })
  ]
})

