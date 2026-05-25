# Form

Used for creating forms with data validation and submission.

## Basic Usage

:::demo

<JffForm inline>
  <JffFormItem label="Username">
    <JffInput placeholder="Please enter username" />
  </JffFormItem>
  <JffFormItem label="Password">
    <JffInput type="password" placeholder="Please enter password" />
  </JffFormItem>
  <JffFormItem>
    <JffButton type="primary">Submit</JffButton>
  </JffFormItem>
</JffForm>

```vue
<template>
  <JffForm :model="form" @submit="handleSubmit">
    <JffFormItem label="Username" prop="username">
      <JffInput v-model="form.username" placeholder="Please enter username" />
    </JffFormItem>
    <JffFormItem label="Password" prop="password">
      <JffInput v-model="form.password" type="password" placeholder="Please enter password" />
    </JffFormItem>
    <JffFormItem>
      <JffButton type="primary" native-type="submit">Submit</JffButton>
    </JffFormItem>
  </JffForm>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  username: '',
  password: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', form)
}
</script>
```

:::

## Form Validation

:::demo

<JffForm inline>
  <JffFormItem label="Email">
    <JffInput placeholder="Please enter email" />
  </JffFormItem>
  <JffFormItem label="Age">
    <JffInput placeholder="Please enter age" />
  </JffFormItem>
  <JffFormItem>
    <JffButton type="primary">Validate Form</JffButton>
  </JffFormItem>
</JffForm>

```vue
<template>
  <JffForm :model="validateForm" :rules="rules" ref="formRef">
    <JffFormItem label="Email" prop="email">
      <JffInput v-model="validateForm.email" placeholder="Please enter email" />
    </JffFormItem>
    <JffFormItem label="Age" prop="age">
      <JffInput v-model.number="validateForm.age" placeholder="Please enter age" />
    </JffFormItem>
    <JffFormItem>
      <JffButton type="primary" @click="handleValidate">Validate Form</JffButton>
    </JffFormItem>
  </JffForm>
</template>

<script setup>
import { reactive, ref } from 'vue'

const formRef = ref()
const validateForm = reactive({
  email: '',
  age: ''
})

const rules = {
  email: [
    { required: true, message: 'Please enter email', trigger: 'blur' },
    { type: 'email', message: 'Please enter a valid email format', trigger: 'blur' }
  ],
  age: [
    { required: true, message: 'Please enter age', trigger: 'blur' },
    { type: 'number', min: 1, max: 100, message: 'Age must be between 1 and 100', trigger: 'blur' }
  ]
}

const handleValidate = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      alert('Validation successful!')
    } else {
      alert('Validation failed!')
    }
  })
}
</script>
```

:::

## Form Attributes

| Attribute           | Type          | Default | Description                       |
| -------------- | ------------- | ------ | -------------------------- |
| model          | object        | -      | Form data object               |
| rules          | object        | -      | Form validation rules               |
| inline         | boolean       | false  | Whether to display as inline form               |
| label-position | string        | right  | Label position (left/right/top) |
| label-width    | string/number | -      | Label width                   |

## Form Events

| Event Name | Parameters | Description           |
| ------ | ---- | -------------- |
| submit | -    | Triggered when form is submitted |

## FormItem Attributes

| Attribute        | Type          | Default | Description       |
| ----------- | ------------- | ------ | ---------- |
| prop        | string        | -      | Form field name |
| label       | string        | -      | Label text   |
| label-width | string/number | -      | Label width   |
| required    | boolean       | false  | Whether to be required   |
