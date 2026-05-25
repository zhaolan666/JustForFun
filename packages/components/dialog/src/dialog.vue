<template>
  <Teleport to="body">
    <Transition name="dialog-fade">
      <div
        v-if="isVisible"
        :class="[`${ns.namespace.value}-overlay-dialog`]"
        @click="handleMaskClick"
      >
        <div :class="[ns.e('wrapper')]" @click="handleWrapperClick">
          <div :class="[ns.b()]" tabindex="-1" @keydown.esc="handleKeydown">
            <div :class="[ns.e('header')]">
              <span :class="[ns.e('title')]">{{ title }}</span>
              <JffIcon
                v-if="showClose"
                :class="[ns.e('close')]"
                @click="handleClose"
              >
                <Close />
              </JffIcon>
            </div>

            <div :class="[ns.e('body')]">
              <slot />
            </div>

            <div v-if="$slots.footer" :class="[ns.e('footer')]">
              <slot name="footer" />
            </div>
          </div>
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
import { Close } from '@element-plus/icons-vue'

defineOptions({
  name: 'JffDialog',
})

const props = defineProps(dialogProps)
const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'update:visible', value: boolean): void
  (e: 'close'): void
}>()

// Support both v-model and visible prop
const isVisible = computed(() => props.modelValue || props.visible)

const ns = useNamespace('dialog')

const handleClose = () => {
  emit('update:modelValue', false)
  emit('update:visible', false)
  emit('close')
}

const handleMaskClick = () => {
  if (props.closeOnClickModal) {
    handleClose()
  }
}

const handleWrapperClick = (e: MouseEvent) => {
  // Prevent event bubbling to mask
  e.stopPropagation()
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.closeOnPressEscape) {
    handleClose()
  }
}

const handleGlobalKeydown = (e: KeyboardEvent) => {
  if (isVisible.value && e.key === 'Escape' && props.closeOnPressEscape) {
    handleClose()
  }
}

watch(isVisible, (val) => {
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
