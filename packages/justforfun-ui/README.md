# JustForFun UI - 按需导入指南

##  安装

```bash
npm install justforfun-ui
# 或
yarn add justforfun-ui
# 或
pnpm add justforfun-ui
```

## 🎯 按需导入方式

### 方式 1：自动按需导入（推荐）

使用 `unplugin-vue-components` 实现自动按需导入，无需手动 import 组件。

#### Vite 配置

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { JustForFunResolver } from 'justforfun-ui/resolver'

export default defineConfig({
  plugins: [
    Vue(),
    Components({
      resolvers: [
        JustForFunResolver({
          importStyle: 'css', // 或 'scss'，false（不自动导入样式）
        }),
      ],
    }),
  ],
})
```

#### 使用方式

```vue
<template>
  <JffButton>按钮</JffButton>
  <JffInput v-model="text" />
  <JffDialog v-model="visible">对话框</JffDialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// 无需手动导入组件，自动按需加载！
const visible = ref(false)
const text = ref('')
</script>
```

### 方式 2：手动按需导入组件

```ts
// 导入单个组件
import { JffButton } from 'justforfun-ui/components'
import { JffInput } from 'justforfun-ui/components'

// 或从具体路径导入
import JffButton from 'justforfun-ui/components/button'
import JffInput from 'justforfun-ui/components/input'
```

#### 手动导入样式

```ts
// CSS 方式
import 'justforfun-ui/theme-chalk/button.css'
import 'justforfun-ui/theme-chalk/input.css'

// SCSS 方式（需要项目支持 SCSS）
import '@justforfun-ui/theme-chalk/src/button.scss'
import '@justforfun-ui/theme-chalk/src/input.scss'
```

### 方式 3：完整导入（不推荐）

```ts
// 导入所有组件
import JustForFun from 'justforfun-ui'

// 导入所有样式
import 'justforfun-ui/theme-chalk/index.css'
```

## 🎨 样式按需加载

### 使用 CSS

```ts
import 'justforfun-ui/theme-chalk/button.css'
import 'justforfun-ui/theme-chalk/input.css'
```

### 使用 SCSS

```scss
// 导入单个组件样式
@use '@justforfun-ui/theme-chalk/src/button.scss';
@use '@justforfun-ui/theme-chalk/src/input.scss';

// 或使用变量自定义主题
@use '@justforfun-ui/theme-chalk/src/common/var.scss' as * with (
  $button-bg-color: #409EFF
);
@use '@justforfun-ui/theme-chalk/src/button.scss';
```

### 动态加载样式

```ts
import { loadButton, loadInput } from 'justforfun-ui/style-loader'

// 异步加载样式
loadButton()
loadInput()
```

##  完整示例

### Vue 3 + Vite + TypeScript

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { JustForFunResolver } from 'justforfun-ui/resolver'

export default defineConfig({
  plugins: [
    Vue(),
    Components({
      dts: 'src/components.d.ts', // 生成类型声明文件
      resolvers: [
        JustForFunResolver({
          importStyle: 'css',
          prefix: 'Jff',
        }),
      ],
    }),
  ],
})
```

```vue
<!-- App.vue -->
<template>
  <div class="app">
    <JffButton type="primary">主要按钮</JffButton>
    <JffInput v-model="inputValue" placeholder="请输入..." />
    <JffCheckbox v-model="checked">复选框</JffCheckbox>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// 组件自动导入，无需手动 import

const inputValue = ref('')
const checked = ref(false)
</script>
```

### Nuxt 3

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    // 如果使用 Nuxt 模块
  ],
  vite: {
    plugins: [
      Components({
        resolvers: [
          JustForFunResolver({
            importStyle: 'css',
          }),
        ],
      }),
    ],
  },
})
```

##  Tree Shaking 优化

### Webpack 配置

```js
// webpack.config.js
module.exports = {
  optimization: {
    usedExports: true,
    sideEffects: true,
  },
}
```

### Rollup 配置

```js
// rollup.config.js
export default {
  // ...
  treeshake: {
    moduleSideEffects: true,
  },
}
```

## 📊 打包体积对比

| 导入方式 | 打包体积 | 说明 |
|---------|---------|------|
| 完整导入 | ~500KB | 包含所有组件和样式 |
| 按需导入（组件） | ~50KB | 仅包含使用的组件 |
| 按需导入（组件 + 样式） | ~80KB | 仅包含使用的组件和样式 |

## ⚠️ 注意事项

1. **样式导入顺序**：某些组件依赖基础样式，需要确保基础样式先加载
2. **SCSS 变量覆盖**：使用 SCSS 时，变量覆盖需要在导入组件样式之前
3. **TypeScript 类型**：使用 `components.d.ts` 自动生成类型声明
4. **生产环境**：确保构建工具启用了 tree-shaking

## 🔗 相关资源

- [Vue 3 文档](https://vuejs.org/)
- [Vite 文档](https://vitejs.dev/)
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
