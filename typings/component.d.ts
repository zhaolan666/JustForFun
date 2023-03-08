import type Icon from '@justforfun-ui/components/icon'
import type Button from '@justforfun-ui/components/button'
import type Input from '@justforfun-ui/components/input'
// For this project development
import '@vue/runtime-core'

declare module '@vue/runtime-core' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    JffIcon: typeof Icon
    JffButton: typeof Button
    JffInput: typeof Input
  }
}

export { }
