<template>
  <div style="padding-top: 50px">
    <jff-input v-model="state" />
  </div>
  <jff-button v-model="btnState" type="danger" size="large" disabled is-loading="loading">Danger</jff-button>
  <jff-icon size="large" color="'green'" type="error">
    <EditIcon />
  </jff-icon>
  <div>---------------------------------------------</div>
  <div id="btn1" style="cursor:pointer;" @click="btnDom">去掘金1</div>
  <select>
    <option>Vue.js</option>
    <option>React.js</option>
    <option>Solid.js</option>
    <option>svelte.js</option>
  </select>
  <form>
    <input type="text" name="username">
    <button type="reset">重置</button>
    <button type="submit" value="submitState" :disabled="isUse">提交</button>
  </form>
  <button id="btn2" type="button">按钮</button>
  <div>----------------------------------------------</div>
  <jff-button type="primary">Primary</jff-button>
  <jff-button type="success" plain>Success</jff-button>
  <jff-button type="info" round>Info</jff-button>
  <jff-button type="warning" circle>Warning</jff-button>
  <jff-button type="danger" disabled>Danger</jff-button>
  <jff-button aria-setsize="small">按钮</jff-button>
  <jff-button size="small">按钮</jff-button>
  <h1>h1</h1>
  <h2>h2</h2>
  <h3>h3</h3>
  <h4>h4</h4>
  <h5>h5</h5>
  <h6>h6</h6>
  <div>
    <jff-button type="primary" :icon="Edit" />
  </div>
  <div>
    <jff-button type="danger">
      <template #icon>
        <Edit />
      </template>
    </jff-button>
    <slot />
  </div>
  <div style="background-color: #ccc; border: 1px solid #ccc">
    <jff-icon v-if="icon || $slots.icon">
      <component :is="icon" v-if="icon" />
      <slot v-else name="icon" />
    </jff-icon>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, computed } from 'vue'
import EditIcon from './EditIcon.vue'
import { Edit } from '@element-plus/icons-vue'

const state = ref('')
const btnState = ref('')
const icon = ref(true)

const useSubmitState = computed(() => {
  return submitState
})

console.log(useSubmitState)

watch(
  () => {
    return state.value, btnState.value;
  },
  (newVal) => {
    console.log('state值：', newVal)
  }
)
// ................................................
const isUse = ref(false)
const submitState = ref('')

const btnDom = () => {
  alert('按回车键1')
}
// ................................................

</script>
