<script setup lang="ts">
const handlerClick = (evt: MouseEvent): void => {
  console.log(evt)
}

console.log('testing...')
</script>

<template>
  <Jff-ButtonGroup>
    <Jff-Button size="small" @click="handlerClick">button</Jff-Button>
    <Jff-Button size="small" type="primary">button</Jff-Button>
    <Jff-Button size="small" type="success">button</Jff-Button>
    <Jff-Button size="small" type="danger">button</Jff-Button>
    <Jff-Button size="small" type="warning">button</Jff-Button>
    <Jff-Button size="small" type="info">button</Jff-Button>
  </Jff-ButtonGroup>

  <br />
  <Jff-Button>按钮默认尺寸</Jff-Button>
  <Jff-Button size="medium">按钮默认尺寸</Jff-Button>
  <Jff-Button size="small">按钮默认尺寸</Jff-Button>
  <Jff-Button size="mini">按钮默认尺寸</Jff-Button>
  <Jff-Button size="tiny">按钮默认尺寸</Jff-Button>
  <br />

  <Jff-Button plain type="primary">朴素按钮</Jff-Button>
  <Jff-Button round type="primary">椭圆</Jff-Button>
  <Jff-Button disabled type="primary">禁止</Jff-Button>
  <Jff-Button circle type="primary">圆</Jff-Button>
</template>
