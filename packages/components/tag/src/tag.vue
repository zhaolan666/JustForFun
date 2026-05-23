<template>
  <Transition name="fade">
    <span
      v-show="visible"
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
      <jff-icon
        v-if="closable"
        name="X"
        :class="[ns.e('close')]"
        @click="handleClose"
      />
    </span>
  </Transition>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useNamespace } from '@justforfun-ui/hooks'
import { tagProps } from './tag'
import JffIcon from '@justforfun-ui/components/icon'

defineOptions({
  name: 'JffTag',
})

const props = defineProps(tagProps)
const emit = defineEmits<{
  (e: 'close'): void
}>()

const ns = useNamespace('tag')
const visible = ref(true)

const handleClose = () => {
  visible.value = false
  emit('close')
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
