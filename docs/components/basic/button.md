# Button

Commonly used operation buttons.

## Basic Usage

Use `type`, `plain`, `round`, and `circle` attributes to define the button style.

::: demo button/basic :::

## Enhanced Examples

::: demo button/enhanced :::

## API
  :exposes="buttonExposes"
/>

<script setup>
import ComponentDoc from '../../.vitepress/vitepress/components/ComponentDoc.vue'
import {
  buttonAttributes,
  buttonEvents,
  buttonSlots,
  buttonExposes
} from './button.api'

const basicUsage = {
  title: 'Basic Usage',
  description: '最基础的按钮使用',
  code: `<template><div class="flex flex-wrap gap-3"><JffButton>Default Button</JffButton><JffButton type="primary">Primary</JffButton><JffButton type="success">Success</JffButton><JffButton type="warning">Warning</JffButton><JffButton type="danger">Danger</JffButton></div></template>`,
  language: 'vue'
}

const codeExamples = [
  {
    title: 'Button Source Code',
    description: 'Button 组件核心实现代码',
  code: `<!-- Template 部分 -->
<template>
  <component
    :is="tag"
    ref="_ref"
    v-bind="_props"
    :class="[
      ns.b(),
      ns.m(_type),
      ns.m(_size),
      ns.is('disabled', _disabled),
      ns.is('loading', loading),
      ns.is('plain', plain),
      ns.is('round', round),
      ns.is('circle', circle),
      ns.is('text', text),
      ns.is('link', link),
      ns.is('has-bg', bg),
    ]"
    :style="buttonStyle"
    @click="handleClick"
  >
    <!-- Loading 状态 -->
    <template v-if="loading">
      <slot v-if="\$slots.loading" name="loading" />
      <JffIcon v-else :class="ns.is('loading')">
        <component :is="loadingIcon" />
      </JffIcon>
    </template>

    <!-- 图标 -->
    <JffIcon v-else-if="icon || \$slots.icon">
      <component :is="icon" v-if="icon" />
      <slot v-else name="icon" />
    </JffIcon>

    <!-- 默认内容 -->
    <span
      v-if="\$slots.default"
      :class="{ [ns.em('text', 'expand')]: shouldAddSpace }"
    >
      <slot />
    </span>
  </component>
</template>

<!-- Script 部分 -->
<script setup>
import { JffIcon } from '@justforfun-ui/components/icon'
import { useNamespace } from '@justforfun-ui/hooks'
import { useButton } from './use-button'
import { buttonEmits, buttonProps } from './button'
import { useButtonCustomStyle } from './button-custom'

defineOptions({
  name: 'JffButton',
})

const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)
const buttonStyle = useButtonCustomStyle(props)
const ns = useNamespace('button')

const {
  _ref,
  _size,
  _type,
  _disabled,
  _props,
  shouldAddSpace,
  handleClick
} = useButton(props, emit)

defineExpose({
  ref: _ref,
  size: _size,
  type: _type,
  disabled: _disabled,
  shouldAddSpace,
})
<\/script>`,
    language: 'vue'
  },
  {
    title: 'Different Sizes',
    description: '提供大、中、小三种尺寸',
  code: `<template><div class="flex flex-wrap items-center gap-3"><div class="flex flex-col gap-2"><JffButton size="large">Large</JffButton><JffButton>Default</JffButton><JffButton size="small">Small</JffButton></div><div class="flex flex-col gap-2"><JffButton size="large" type="primary">Large</JffButton><JffButton type="primary">Default</JffButton><JffButton size="small" type="primary">Small</JffButton></div></div></template>`,
    language: 'vue'
  },
  {
    title: 'Button Types',
    description: '多种按钮类型供选择',
  code: `<template><div class="flex flex-wrap gap-3"><JffButton type="primary">Primary</JffButton><JffButton type="success">Success</JffButton><JffButton type="warning">Warning</JffButton><JffButton type="danger">Danger</JffButton><JffButton type="info">Info</JffButton><JffButton>Default</JffButton></div></template>`,
    language: 'vue'
  },
  {
    title: 'Special Styles',
    description: '圆角、文字、链接按钮等特殊样式',
  code: `<template><div class="flex flex-wrap items-center gap-3"><JffButton round>Round</JffButton><JffButton circle>O</JffButton><JffButton type="primary" plain>Plain</JffButton><JffButton type="primary" text>Text</JffButton><JffButton type="primary" link>Link</JffButton><JffButton disabled>Disabled</JffButton></div></template>`,
    language: 'vue'
  },
  {
    title: 'Loading State',
    description: '按钮加载状态',
  code: `<template><div class="flex flex-wrap gap-3"><JffButton loading>Loading</JffButton><JffButton type="primary" loading>Loading</JffButton><JffButton :loading-icon="LoadingIcon" loading>Custom Icon</JffButton></div></template>`,
    language: 'vue'
  },
  {
    title: 'With Icons',
    description: '带图标的按钮',
  code: `<template><div class="flex flex-wrap items-center gap-3"><JffButton type="primary" :icon="EditIcon">Edit</JffButton><JffButton type="primary">Upload<template #icon><UploadIcon /></template></JffButton><JffButton circle :icon="SearchIcon" /><JffButton :icon="StarIcon" /></div></template>`,
    language: 'vue'
  }
]
</script>
