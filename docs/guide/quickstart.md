# Quick start 
## Notice before use
1. install 
``` shell
npm install justforfun-ui --save-dev
```
2. Single mounted
``` js
// main.js
import JffUI from 'justforfun-ui'
```
3. Mount on demand  as vue
``` js
import JffUI from 'justforfun-ui'
import AutoImport from 'unplugin-auto-import'
import Componetnt from 'unplugin-vue-components'
```
4. Template usage example
``` vue
<template>
  <Jff-button type="primary" size="small" plain>button</Jff-button>
  <Jff-button type="success" size="large">button</Jff-button>
  <Jff-button type="error" size="default" plain>button</Jff-button>
  <Jff-button type="default" size="mini">button</Jff-button>
</template>
```

## Link Button
::: warning 
do something ...
:::


::: danger
you are danger
::: 


::: info
Record something
:::
