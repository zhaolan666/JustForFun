<template>
  <Transition
    name="fade"
    @after-leave="onAfterLeave"
  >
    <span
      v-show="!isDestroyed"
      :class="[
        ns.b(),
        ns.m(type),
        {
          [ns.m('closable')]: closable,
          [ns.m('hit')]: hit,
        },
      ]"
    >
      <slot />
      <JffIcon
        v-if="closable"
        :class="[ns.e('close')]"
        @click.stop="handleClose"
      ><Close /></JffIcon>
    </span>
  </Transition>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useNamespace } from '@justforfun-ui/hooks'
import { tagProps } from './tag'
import JffIcon from '@justforfun-ui/components/icon'
import { Close } from '@element-plus/icons-vue'

defineOptions({
  name: 'JffTag',
})

defineProps(tagProps)
const emit = defineEmits<{
  (e: 'close'): void
}>()

const ns = useNamespace('tag')
const visible = ref(true)
const isDestroyed = ref(false)

const handleClose = () => {
  visible.value = false
  emit('close')
}

const onAfterLeave = () => {
  isDestroyed.value = true
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>
