///  <reference types="vite/client" />

// Augment vue module to include runtime-dom exports
declare module 'vue' {
  export * from '@vue/runtime-dom'
}
