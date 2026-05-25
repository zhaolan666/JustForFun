import { PKG_NAME, PKG_PREFIX } from '@justforfun-ui/build-constants'

import type { Plugin } from 'rollup'

export function JustForFunUIAlias(): Plugin {
  const themeChalk = 'theme-chalk'
  const sourceThemeChalk = `${PKG_PREFIX}/${themeChalk}` as const
  const bundleThemeChalk = `${PKG_NAME}/${themeChalk}` as const

  return {
    name: 'justforfun-ui-alias-plugin',
    resolveId(id) {
      if (!id.startsWith(sourceThemeChalk)) return
      return {
        id: id.replace(sourceThemeChalk, bundleThemeChalk),
        external: 'absolute',
      }
    },
  }
}
