<template>
  <div
    :class="[
      ns.b('dropdown-item'),
      {
        [ns.m('dropdown-item', 'disabled')]: disabled,
        [ns.m('dropdown-item', 'divided')]: divided,
      },
    ]"
    @click="handleClick"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { inject } from 'vue'
import { useNamespace } from '@justforfun-ui/hooks'
import { dropdownItemProps } from './dropdown'

defineOptions({
  name: 'JffDropdownItem',
})

const props = defineProps(dropdownItemProps)

const ns = useNamespace('dropdown')

const dropdown = inject<{
  handleCommand: (command: any) => void
}>('JFF_DROPDOWN', null)

const handleClick = () => {
  if (props.disabled) return
  dropdown?.handleCommand(props.command)
}
</script>
