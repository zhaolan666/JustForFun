# On-demand Import

JustForFun UI supports multiple on-demand import methods to help you optimize bundle size and achieve better Tree Shaking results.

## Method 1: Automatic On-demand Import (Recommended)

Use the [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) plugin to achieve automatic on-demand import of components.

### 1. Install Plugin

```bash
npm install -D unplugin-vue-components
```

### 2. Configure Vite

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import { JustForFunResolver } from 'justforfun-ui/resolver'

export default defineConfig({
  plugins: [
    Components({
      resolvers: [
        JustForFunResolver({
          importStyle: 'css', // or 'scss', false
          prefix: 'Jff',
        }),
      ],
    }),
  ],
})
```

### 3. Use Components

```vue
<template>
  <JffButton>Button</JffButton>
  <JffInput v-model="text" />
</template>

<script setup lang="ts">
// Components are automatically imported, no manual import needed!
const text = ref('')
</script>
```

## Method 2: Manual On-demand Import

### Import from components

```typescript
// Named imports
import { JffButton, JffInput, JffDialog } from 'justforfun-ui/components'

// Single component import
import JffButton from 'justforfun-ui/components/button'
import JffInput from 'justforfun-ui/components/input'
```

### Import Styles

```typescript
// CSS styles
import 'justforfun-ui/theme-chalk/button.css'
import 'justforfun-ui/theme-chalk/input.css'

// SCSS source (supports custom theme variables)
import '@justforfun-ui/theme-chalk/src/button.scss'
import '@justforfun-ui/theme-chalk/src/input.scss'
```

### Complete Example

```vue
<template>
  <JffButton type="primary">Primary Button</JffButton>
  <JffInput v-model="text" placeholder="Please enter content" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { JffButton, JffInput } from 'justforfun-ui/components'
import 'justforfun-ui/theme-chalk/button.css'
import 'justforfun-ui/theme-chalk/input.css'

const text = ref('')
</script>
```

## Method 3: Use Style Loader

JustForFun UI provides a style loader that supports asynchronous loading of component styles.

```typescript
import { loadButton, loadInput } from 'justforfun-ui/style-loader'

// Load styles asynchronously
loadButton()
loadInput()
```

## Method 4: Full Import

If you need to use all components, you can choose full import:

```typescript
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import JffUI from 'justforfun-ui'
import 'justforfun-ui/theme-chalk/index.css'

const app = createApp(App)
app.use(JffUI)
app.mount('#app')
```

## Tree Shaking Results

Using on-demand import can significantly reduce bundle size:

| Scenario | Before | After | Reduction |
|------|--------|--------|------|
| Full Import | ~500KB | ~500KB | - |
| On-demand Import 1 Component | ~500KB | ~30KB | 94% ↓ |
| On-demand Import 3 Components | ~500KB | ~80KB | 84% ↓ |
| On-demand Import + Styles | ~500KB | ~120KB | 76% ↓ |

## Build Tool Configuration

### Webpack

```javascript
// webpack.config.js
module.exports = {
  optimization: {
    usedExports: true,
    sideEffects: true,
  },
}
```

### Rollup

```javascript
// rollup.config.js
export default {
  treeshake: {
    moduleSideEffects: true,
  },
}
```

### Vite

Vite supports Tree Shaking by default, no additional configuration needed.

## Custom Theme Variables (SCSS)

You can customize theme variables using SCSS:

```scss
// Custom theme variables
@use '@justforfun-ui/theme-chalk/src/common/var.scss' with (
  $button-bg-color: #409EFF,
  $button-font-color: #fff
);

// Import component styles
@use '@justforfun-ui/theme-chalk/src/button.scss';
```

## Notes

1. **Style Import Order**: Base styles (e.g., button.scss) should be imported before components that depend on them
2. **SCSS Variable Override**: Variables need to be overridden before importing component styles
3. **TypeScript Types**: Use `dts: 'src/components.d.ts'` to automatically generate type declarations
4. **Production Environment**: Ensure your build tool has tree-shaking and sideEffects enabled

## Related Documentation

- [Installation Guide](/guide/install)
- [Quick Start](/guide/quickstart)
- [Components](/components/basic/button)
