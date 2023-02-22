import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import  path from 'path' 

export default defineConfig({
  build: {
    target: 'modules',
    outDir: 'es',
    minify: false,
    rollupOptions: {
      external: ['vue'],
      input: './index.ts',
      output: [
        {
          format: 'es',
          entryFileNames: '[name].mjs',
          preserveModules: true,
          exports: 'named',
          dir: path.resolve(__dirname, '../../build/es')
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: true,
          exports: 'named',
          dir: path.resolve(__dirname, '../../build/lib')
        }
      ]
    },
    lib: {
      entry: './index.ts',
      formats: ['es', 'cjs'],
      name: 'tass-ui'
    }
  },
  plugins: [
    vue(),
    dts({
      entryRoot: 'components',
      outputDir: [
        path.resolve(__dirname, '../../build/es/components'),
        path.resolve(__dirname, '../../build/lib/components')
      ],
      tsConfigFilePath: '../../tsconfig.json'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'components')
    }
  },
  test: {
    environment: 'happy-dom'
  }
});
