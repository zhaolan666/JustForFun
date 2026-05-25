// Augment vue module to include all exports from runtime-dom
// This fixes type resolution issues when importing from 'vue'
// The issue is that vue.d.ts is truncated when installed via pnpm with TypeScript peer dependencies
declare module 'vue' {
  export * from '@vue/runtime-dom'
}
