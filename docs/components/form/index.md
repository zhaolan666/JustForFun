# Form 表单

用于创建表单，支持数据验证和提交。

## 基础用法

<demo-block>
<template #demo>
<jff-form :model="form" @submit="handleSubmit">
  <jff-form-item label="用户名" prop="username">
    <jff-input v-model="form.username" placeholder="请输入用户名" />
  </jff-form-item>
  <jff-form-item label="密码" prop="password">
    <jff-input v-model="form.password" type="password" placeholder="请输入密码" />
  </jff-form-item>
  <jff-form-item>
    <jff-button type="primary" native-type="submit">提交</jff-button>
  </jff-form-item>
</jff-form>
</template>
<template #code>
```vue
<jff-form :model="form" @submit="handleSubmit">
  <jff-form-item label="用户名" prop="username">
    <jff-input v-model="form.username" placeholder="请输入用户名" />
  </jff-form-item>
  <jff-form-item label="密码" prop="password">
    <jff-input v-model="form.password" type="password" placeholder="请输入密码" />
  </jff-form-item>
  <jff-form-item>
    <jff-button type="primary" native-type="submit">提交</jff-button>
  </jff-form-item>
</jff-form>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  username: '',
  password: ''
})

const handleSubmit = () => {
  console.log('表单提交:', form)
}
</script>
```
</template>
</demo-block>

## 表单验证

<demo-block>
<template #demo>
<jff-form :model="validateForm" :rules="rules" ref="formRef">
  <jff-form-item label="邮箱" prop="email">
    <jff-input v-model="validateForm.email" placeholder="请输入邮箱" />
  </jff-form-item>
  <jff-form-item label="年龄" prop="age">
    <jff-input v-model.number="validateForm.age" placeholder="请输入年龄" />
  </jff-form-item>
  <jff-form-item>
    <jff-button type="primary" @click="handleValidate">验证表单</jff-button>
  </jff-form-item>
</jff-form>
</template>
<template #code>
```vue
<jff-form :model="validateForm" :rules="rules" ref="formRef">
  <jff-form-item label="邮箱" prop="email">
    <jff-input v-model="validateForm.email" placeholder="请输入邮箱" />
  </jff-form-item>
  <jff-form-item label="年龄" prop="age">
    <jff-input v-model.number="validateForm.age" placeholder="请输入年龄" />
  </jff-form-item>
  <jff-form-item>
    <jff-button type="primary" @click="handleValidate">验证表单</jff-button>
  </jff-form-item>
</jff-form>

<script setup>
import { reactive, ref } from 'vue'

const formRef = ref()
const validateForm = reactive({
  email: '',
  age: ''
})

const rules = {
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' }
  ],
  age: [
    { required: true, message: '请输入年龄', trigger: 'blur' },
    { type: 'number', min: 1, max: 100, message: '年龄必须在1-100之间', trigger: 'blur' }
  ]
}

const handleValidate = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      alert('验证成功!')
    } else {
      alert('验证失败!')
    }
  })
}
</script>
```
</template>
</demo-block>

## Form 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| model | object | - | 表单数据对象 |
| rules | object | - | 表单验证规则 |
| inline | boolean | false | 是否行内表单 |
| label-position | string | right | 标签位置（left/right/top） |
| label-width | string/number | - | 标签宽度 |

## Form 事件

| 事件名 | 参数 | 说明 |
|--------|------|------|
| submit | - | 表单提交时触发 |

## FormItem 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| prop | string | - | 表单字段名 |
| label | string | - | 标签文本 |
| label-width | string/number | - | 标签宽度 |
| required | boolean | false | 是否必填 |
