<template>
  <Transition name="fade">
    <div
      v-show="visible"
      :class="[
        ns.b(),
        ns.m(type),
        ns.m(effect),
      ]"
    >
      <JffIcon
        v-if="showIcon"
        :class="[ns.e('icon')]"
      ><component :is="iconName" /></JffIcon>

      <div :class="[ns.e('content')]">
        <span v-if="title" :class="[ns.e('title')]">{{ title }}</span>
        <span :class="[ns.e('message')]">
          <slot />
        </span>
      </div>

      <JffIcon
        v-if="closable"
        :class="[ns.e('close')]"
        @click="handleClose"
      ><Close /></JffIcon>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useNamespace } from '@justforfun-ui/hooks'
import { alertProps } from './alert'
import JffIcon from '@justforfun-ui/components/icon'
import { Close, CircleCheck, WarningFilled, CircleCloseFilled, InfoFilled } from '@element-plus/icons-vue'

defineOptions({
  name: 'JffAlert',
})

const props = defineProps(alertProps)
const emit = defineEmits<{
  (e: 'close'): void
}>()

const ns = useNamespace('alert')
const visible = ref(true)

const iconMap: Record<string, any> = {
  success: CircleCheck,
  warning: WarningFilled,
  danger: CircleCloseFilled,
  info: InfoFilled,
}

const iconName = computed(() => iconMap[props.type] || 'Info')

const handleClose = () => {
  visible.value = false
  emit('close')
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>
