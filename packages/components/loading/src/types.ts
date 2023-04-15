import type { MaybeRef } from '@vueuse/core'

export type LoadingOptionsResolved = {
  parent: LoadingParentElement
  background: MaybeRef<string>
  svg: MaybeRef<string>
  svgViewBox: MaybeRef<string>
  spinner: MaybeRef<boolean | string>
  text: MaybeRef<string>
  fullscreen: boolean
  lock: boolean
  customClass: MaybeRef<string>
  visible: boolean
  target: HTMLElement
  beforeClose?: () => boolean
  closed?: () => void
}
export type LoadingOptions = Partial<
  Omit<LoadingOptionsResolved, 'parent' | 'target'> & {
    /**
     * @description the DOM node Loading needs to cover. Accepts a DOM object or a string. If it's a string, it will be passed to `document.querySelector` to get the corresponding DOM node
     */
    target: HTMLElement | string
    /**
     * @description same as the `body` modifier of `v-loading`
     */
    body: boolean
  }
>

export interface LoadingParentElement extends HTMLElement {
  vLoadingAddClassList?: () => void
}
