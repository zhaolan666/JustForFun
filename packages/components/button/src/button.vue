<template>
  <component :is="tag" ref="_ref" v-bind="_props" :class="[
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
  ]" :style="buttonStyle" @click="handleClick">
    <template v-if="loading">
      <slot v-if="$slots.loading" name="loading" />
      <jff-icon v-else :class="ns.is('loading')">
        <component :is="loadingIcon" />
      </jff-icon>
    </template>
    <jff-icon v-else-if="icon || $slots.icon">
      <component :is="icon" v-if="icon" />
      <slot v-else name="icon" />
    </jff-icon>
    <span v-if="$slots.default" :class="{ [ns.em('text', 'expand')]: shouldAddSpace }">
      <slot />
    </span>
  </component>
</template>

<script lang="ts" setup>
import { JffIcon } from '@justforfun-ui/components/icon'
import { useNamespace } from '@justforfun-ui/hooks'
import { useButton } from './use-button'
import { buttonEmits, buttonProps } from './button'
import { useButtonCustomStyle } from './button-custom'
defineOptions({
  name: 'ElButton',
})
const props = defineProps(buttonProps)
const emit = defineEmits(buttonEmits)
const buttonStyle = useButtonCustomStyle(props)
const ns = useNamespace('button')
const { _ref, _size, _type, _disabled, _props, shouldAddSpace, handleClick } =
  useButton(props, emit)
defineExpose({
  ref: _ref,
  size: _size,
  type: _type,
  disabled: _disabled,
  shouldAddSpace,
})
</script>
