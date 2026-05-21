---
title: Button
---

# 按钮
<script>
export default {
  data() {
    return {
      button: '默认'
    }
  }
}
</script>

<template>
  <jff-button>{{button}}</jff-button>
  <jff-button type="primary">主色</jff-button>
  <jff-button type="success">成功</jff-button>
  <jff-button type="info">提示</jff-button>
</template>


### 使用
```html
<jff-button>默认</jff-button>
<jff-button type="primary">主色</jff-button>
<jff-button type="success">成功</jff-button>
<jff-button type="info">提示</jff-button>
```
