import installer from './defaults'


export * from '@justforfun-ui/components'
export * from '@justforfun-ui/constants'
export * from '@justforfun-ui/hooks'
export * from '@justforfun-ui/directives'
export * from './make-installer'

export const install = installer.install
export const version = installer.version
export default installer

export { default as dayjs } from 'dayjs'
