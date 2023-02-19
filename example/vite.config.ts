import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import dts from 'vite-plugin-dts'
import { resolve } from 'path'
export default defineConfig(
  {
    build: {
      target: 'modules',
      //打包文件目录
      outDir: "es",
      //压缩
      minify: false,
      //css分离
      //cssCodeSplit: true,
      rollupOptions: {
        //忽略打包vue文件
        external: ['vue'],
        input: ['src/index.ts'],
        output: [
          {
            format: 'es',
            //不用打包成.es.js,这里我们想把它打包成.js
            entryFileNames: '[name].js',
            //让打包目录和我们目录对应
            preserveModules: true,
            //配置打包根目录
            dir: 'es',
            preserveModulesRoot: 'src'
          },
          {
            format: 'cjs',
            entryFileNames: '[name].js',
            //让打包目录和我们目录对应
            preserveModules: true,
            //配置打包根目录
            dir: 'lib',
            preserveModulesRoot: 'src'
          }
        ]
      },
      lib: {
        entry: './index.ts',
        formats: ['es', 'cjs']
      }
    },
    plugins: [
      vue(),
      dts({
        outputDir: resolve(__dirname, './dist/es/src'),
        //指定使用的tsconfig.json为我们整个项目根目录下掉,如果不配置,你也可以在components下新建tsconfig.json
        tsConfigFilePath: '../../tsconfig.json',
      }),
      dts({
         //因为这个插件默认打包到es下，我们想让lib目录下也生成声明文件需要再配置一个
        outputDir: resolve(__dirname, './dist/lib/src'),
        tsConfigFilePath: '../../tsconfig.json'
      }),
      {
        name: 'style',
        generateBundle(config, bundle) {
            //这里可以获取打包后的文件目录以及代码code
            const keys = Object.keys(bundle)

            for (const key of keys) {
                const bundler: any = bundle[key as any]
                //rollup内置方法,将所有输出文件code中的.less换成.css,因为我们当时没有打包less文件

                this.emitFile({
                    type: 'asset',
                    fileName: key,//文件名名不变
                    source: bundler.code.replace(/\.less/g, '.css')
                })
            }
        }
      }
    ],
    resolve: {
      alias: {
          '@': resolve(__dirname, 'src'),
      },
  }
  }
)






// /// <reference types="vitest" />
// import path from 'path'
// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import Pages from 'vite-plugin-pages'
// import Components from 'unplugin-vue-components/vite'
// import AutoImport from 'unplugin-auto-import/vite'


// export default defineConfig({
//   resolve: {
//     alias: {
//       '~/': `${path.resolve(__dirname, 'src')}/`,
//     },
//   },
//   plugins: [
//     vue({
//       reactivityTransform: true,
//     }),
//     Pages(),
//     AutoImport({
//       imports: [
//         'vue',
//         'vue/macros',
//         '@vueuse/core',
//       ],
//       dts: true,
//     }),
//     Components({
//       dts: true,
//     }),
//   ],
//   test: {
//     environment: 'jsdom',
//   },
// })
