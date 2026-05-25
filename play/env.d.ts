///  <reference types="vite/client" />
///  <reference types="vue/macros-global" />

// Augment vue module to include runtime-dom exports
declare module 'vue' {
  export * from '@vue/runtime-dom'
}
