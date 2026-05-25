<template>
  <div
    ref="selectRef"
    :class="[
      ns.b(),
      {
        [ns.m('disabled')]: disabled,
        [ns.m('opened')]: visible,
        [ns.m('clearable')]: clearable && modelValue,
      },
    ]"
    @click="handleClick"
  >
    <div :class="[ns.e('input')]">
      <span v-if="selectedLabel" :class="[ns.e('selected')]">
        {{ selectedLabel }}
      </span>
      <span v-else :class="[ns.e('placeholder')]">
        {{ placeholder }}
      </span>
      <JffIcon
        v-if="clearable && modelValue"
        :class="[ns.e('clear')]"
        @click.stop="handleClear"
      ><Close /></JffIcon>
      <JffIcon
        :class="[ns.e('arrow')]"
      ><ArrowDown /></JffIcon>
    </div>

    <Transition name="slide">
      <div
        v-show="visible"
        :class="[ns.e('dropdown')]"
        @click.stop
      >
        <slot />
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted, provide } from 'vue'
import { useNamespace } from '@justforfun-ui/hooks'
import { selectProps } from './select'
import JffIcon from '@justforfun-ui/components/icon'
import { Close, ArrowDown } from '@element-plus/icons-vue'

defineOptions({
  name: 'JffSelect',
})

const props = defineProps(selectProps)
const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
  (e: 'change', value: any): void
}>()

const ns = useNamespace('select')
const selectRef = ref<HTMLElement | null>(null)
const visible = ref(false)
const options = ref<any[]>([])

const selectedLabel = computed(() => {
  const option = options.value.find(opt => opt.value === props.modelValue)
  return option?.label || ''
})

const handleClick = () => {
  if (props.disabled) return
  visible.value = !visible.value
}

const handleClear = () => {
  emit('update:modelValue', '')
  emit('change', '')
}

const handleOptionClick = (value: any, label: string) => {
  emit('update:modelValue', value)
  emit('change', value)
  visible.value = false
}

const handleClickOutside = (event: MouseEvent) => {
  if (selectRef.value && !selectRef.value.contains(event.target as Node)) {
    visible.value = false
  }
}

provide('JFF_SELECT', {
  props,
  addOption: (option: any) => {
    options.value.push(option)
  },
  removeOption: (value: any) => {
    options.value = options.value.filter(opt => opt.value !== value)
  },
  selectOption: handleOptionClick,
})

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.2s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
