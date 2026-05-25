import { PKG_NAME, PKG_PREFIX } from '@justforfun-ui/build-constants'
import { buildConfig } from '../build-info'

import type { Module } from '../build-info'

/** used for type generator */
export const pathRewriter = (module: Module) => {
  const config = buildConfig[module]

  return (id: string) => {
    id = id.replace(new RegExp(`${PKG_PREFIX}/theme-chalk`, 'g'), `${PKG_NAME}/theme-chalk`)
    id = id.replace(new RegExp(`${PKG_PREFIX}/`, 'g'), `${config.bundle.path}/`)
    return id
  }
}
