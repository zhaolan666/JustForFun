# Quick Start

Get started with JustForFun-UI in a few simple steps.

## Installation

### npm

```bash
npm install justforfun-ui
```

### yarn

```bash
yarn add justforfun-ui
```

### pnpm

```bash
pnpm add justforfun-ui
```

## Basic Usage

### Full Import

Import all components in your main entry file:

```typescript
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import JffUI from 'justforfun-ui'
import 'justforfun-ui/dist/style.css'

const app = createApp(App)
app.use(JffUI)
app.mount('#app')
```

### On-demand Import

Import only the components you need:

```typescript
import { JffButton, JffInput } from 'justforfun-ui'
import 'justforfun-ui/dist/button/style.css'
import 'justforfun-ui/dist/input/style.css'
```

### Auto Import (Recommended)

Install the auto-import plugin:

```bash
npm install unplugin-vue-components -D
```

Configure in `vite.config.ts`:

```typescript
import Components from 'unplugin-vue-components/vite'
import { JffUIResolver } from 'justforfun-ui/resolver'

export default {
  plugins: [
    Components({
      resolvers: [JffUIResolver()]
    })
  ]
}
```

## Component Usage

### Button Component

```vue
<template>
  <JffButton type="primary" size="small" plain>Primary Button</JffButton>
  <JffButton type="success" size="large">Success Button</JffButton>
  <JffButton type="error" size="default" plain>Error Button</JffButton>
  <JffButton type="default" size="mini">Mini Button</JffButton>
</template>
```

### Input Component

```vue
<template>
  <JffInput 
    v-model="value" 
    placeholder="Please input something"
    size="default"
    disabled
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>
```

## Link Button

::: warning
When using link buttons, make sure to handle routing properly to avoid full page reloads.
:::

::: danger
Avoid using too many button types in a single form, as it may confuse users.
:::

::: info
Button sizes include: mini, small, default, large
:::

## GitHub Repository

Source code: [https://github.com/zhaolan666/JustForFun](https://github.com/zhaolan666/JustForFun)

## Next Steps

1. Explore the [Components](/components/basic/button) section for detailed documentation
2. Check out the [Introduction](/guide/introduction) for feature overview
