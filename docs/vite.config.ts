import path from 'path'
import Inspect from 'vite-plugin-inspect'
import { defineConfig, loadEnv } from 'vite'
import Vuemacros from 'unplugin-vue-macros/dist/vite'
import UnoCSS from 'unocss/vite'
// import mkcert from 'vite-plugin-mkcert'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

import { MarkdownTransform } from './.vitepress/plugins/markdown-transform'

import type { Alias } from 'vite'

const alias: Alias[] = [
  {
    find: '~/',
    replacement: `${path.resolve(__dirname, './.vitepress/vitepress')}/`,
  },
]
if (process.env.DOC_ENV !== 'production') {
  alias.push(
    {
      find: /^justforfun-ui(\/(es|lib))?$/,
      replacement: path.resolve(__dirname, 'packages/justforfun/index.ts'),
    },
    {
      find: /^justforfun-ui\/(es|lib)\/(.*)$/,
      replacement: `${path.resolve(__dirname, 'packages')}/$2`,
    }
  )
}


export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')


  return {
    resolve: {
      alias: "@"
    },
    plugins: [
      Vuemacros({
        setupComponent: false,
        setupSFC: false,
        plugins: {
          vueJsx: vueJsx()
        }
      }),
      // https://github.com/antfu/unplugin-vue-components
      Components({
        dirs: ['.vitepress/vitepress/components'],

        allowOverrides: true,

        // custom resolvers
        resolvers: [
          // auto import icons
          // https://github.com/antfu/unplugin-icons
          IconsResolver(),
        ],

        // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      }),

      // https://github.com/antfu/unplugin-icons
      Icons({
        autoInstall: true,
      }),
      UnoCSS(),
      Inspect(),
      // mkcert(),
    ]

  }
})


