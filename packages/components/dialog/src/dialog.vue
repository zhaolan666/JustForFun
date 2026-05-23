<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="visible && modal"
        :class="[ns.e('mask')]"
        @click="handleMaskClick"
      />
    </Transition>
    
    <Transition name="dialog">
      <div
        v-if="visible"
        :class="[ns.b()]"
        :style="dialogStyle"
        tabindex="-1"
        @keydown.esc="handleKeydown"
      >
        <div :class="[ns.e('header')]">
          <span :class="[ns.e('title')]">{{ title }}</span>
          <jff-icon
            v-if="showClose"
            :class="[ns.e('close')]"
            @click="handleClose"
          ><X /></jff-icon>
        </div>
        
        <div :class="[ns.e('body')]">
          <slot />
        </div>
        
        <div v-if="$slots.footer" :class="[ns.e('footer')]">
          <slot name="footer" />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts" setup>
import { computed, watch, onMounted, onUnmounted } from 'vue'
import { useNamespace } from '@justforfun-ui/hooks'
import { dialogProps } from './dialog'
import JffIcon from '@justforfun-ui/components/icon'
import { X } from '@element-plus/icons-vue'

defineOptions({
  name: 'JffDialog',
})

const props = defineProps(dialogProps)
const emit = defineEmits<{
  (e: 'update:visible', value: boolean): void
  (e: 'close'): void
}>()

const ns = useNamespace('dialog')

const dialogStyle = computed(() => ({
  width: typeof props.width === 'number' ? `${props.width}px` : props.width,
  top: props.top,
}))

const handleClose = () => {
  emit('update:visible', false)
  emit('close')
}

const handleMaskClick = () => {
  if (props.closeOnClickModal) {
    handleClose()
  }
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.closeOnPressEscape) {
    handleClose()
  }
}

const handleGlobalKeydown = (e: KeyboardEvent) => {
  if (props.visible && e.key === 'Escape' && props.closeOnPressEscape) {
    handleClose()
  }
}

watch(() => props.visible, (val) => {
  if (val) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

onMounted(() => {
  document.addEventListener('keydown', handleGlobalKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleGlobalKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.dialog-enter-active,
.dialog-leave-active {
  transition: all 0.3s ease;
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
