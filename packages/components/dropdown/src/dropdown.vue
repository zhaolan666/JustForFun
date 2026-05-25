<template>
  <div
    ref="dropdownRef"
    :class="[ns.b()]"
    @click="handleClick"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <span :class="[ns.e('trigger')]">
      <slot name="trigger">
        <JffButton type="default">
          下拉菜单
          <JffIcon><ArrowDown /></JffIcon>
        </JffButton>
      </slot>
    </span>
    
    <Transition name="dropdown">
      <div
        v-show="visible"
        :class="[ns.e('menu')]"
        @click.stop
      >
        <slot />
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, provide } from 'vue'
import { useNamespace } from '@justforfun-ui/hooks'
import { dropdownProps } from './dropdown'
import JffIcon from '@justforfun-ui/components/icon'
import JffButton from '@justforfun-ui/components/button'
import { ArrowDown } from '@element-plus/icons-vue'

defineOptions({
  name: 'JffDropdown',
})

const props = defineProps(dropdownProps)
const emit = defineEmits<{
  (e: 'command', command: any): void
}>()

const ns = useNamespace('dropdown')
const dropdownRef = ref<HTMLElement | null>(null)
const visible = ref(false)

const handleClick = () => {
  if (props.trigger === 'click') {
    visible.value = !visible.value
  }
}

const handleMouseEnter = () => {
  if (props.trigger === 'hover') {
    visible.value = true
  }
}

const handleMouseLeave = () => {
  if (props.trigger === 'hover') {
    visible.value = false
  }
}

const handleCommand = (command: any) => {
  emit('command', command)
  if (props.hideOnClick) {
    visible.value = false
  }
}

const handleClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    visible.value = false
  }
}

provide('JFF_DROPDOWN', {
  handleCommand,
})

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
