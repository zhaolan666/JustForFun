<script setup lang="ts">
import '../style/'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { JffIcon } from '../../icon'
import { MessageProps } from './message'

const iconMaps: any = {
  info: 'info',
  success: 'success',
  error: 'error',
  warning: 'warning',
}

const emit = defineEmits(['destroy', 'close'])
let visible = ref(false)
const props = defineProps(MessageProps)
const close = () => (visible.value = false)
const beforeLeave = () => {
  emit('close')
}
const iconName = computed(() => {
  const { type } = props;
  return iconMaps[type]
})
let timer: null | NodeJS.Timeout = null
const startTimeFn = () => {
  if (props.duration > 0) {
    timer = setTimeout(() => {
      visible.value = true
    }, props.duration)
  }
}

const clearTimeFn = () => {
  clearTimeout(Number(timer))
}

onMounted(() => {
  visible.value = true
  startTimeFn()
})
let styles = computed(() => ({
  top: `${props.offset}px`,
  zIndex: props.zIndex
}))


const defClass = computed(() => ['jff-message--' + props.type, props.center ? 'is-center' : ""])

onUnmounted(() => {
  clearTimeFn()
})

</script>

<template>
  <transition name="jff-message-fade" @beforeleave="beforeLeave" @after-leave="$emit('destory')">
    <div 
    v-show="visible" 
    :id="id" 
    :style="styles" 
    :class="defClass" 
    @mouseenter="clearTimeFn" 
    @mouseleave="startTimeFn">
      <jff-icon 
        :name="iconName" 
        class="jff-message__icon"
      >
        <slot>
          <span class="jff-message__content">{{ message }}</span>
        </slot>
        <jff-icon 
          name="cross" 
          class="jff-message__close-btn" 
          v-if="closeable" 
          @click="close"
        ></jff-icon>
        </jff-icon>
    </div>
  </transition>
</template>
