import type { VNode, ComponentInternalInstance, RendererElement, RendererNode, VNodeProps } from 'vue'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any
    }
    
    interface Element extends VNode {}
    
    interface ElementClass {
      $props?: {}
      $slots?: {}
      $emit?: (...args: any[]) => void
      $el?: any
      $options?: {
        name?: string
      }
    }
    
    interface FragmentElement {
      $props: VNodeProps
    }
    
    interface IntrinsicAttributes {
      key?: string | number
      ref?: any
    }
    
    interface ElementAttributesProperty {
      $props: {}
    }
    
    interface ElementChildrenAttribute {
      children: {}
    }
    
    type ElementType = string | (new () => ElementClass) | ((props: any) => VNode)
  }
}

export {}
