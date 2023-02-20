<p align='center'>
  <img src='https://i.328888.xyz/2023/02/20/XGsVU.jpeg' alt='Vitesse - Opinionated Vite Starter Template' width='600'/>
</p>

<p align='center'>
Build web view with  <b>JustForFun</b><sup><em>(fast)</em></sup><br>
</p>

<br>

<p align='center'>
<a href="#">Live Demo</a>
</p>

<br>

<p align='center'>
<b>English</b> | <a href="https://github.com/zhaolan666/JustForFun/blob/dev/README.zh-CN.md">简体中文</a>
</p>

<br>

## JustForFun
---
> A simple, quick and easy to use Vue3 combined UI framework
- 🔥 Out of the box 
- 🦾 Supports the Typescirpt JSX syntax
- 📥 Rich custom components
- 📑 Code style is unified, code quality is good
- 😃 On-demand introduction Don't worry about downloading extra plug-ins

JustForFun-UI is because of interest, and there is no special reason
### Install
---
``` bash
$ npm i @justforfun-ui -D

```
### Quick Start
---
``` ts
import Vue from 'vue'
import JffUI from '@justforfun-ui'

Vue.use(JffUI)

// or 
import {
  Button,
  Tab
  // ...
} from '@justforfun-ui'

Vue.component(Button.name, Button)
Vue.component(Tab.name, Tab)

```
For more examples, see our documentation to [get started](https://en.wikipedia.org/wiki/Wikipedia)

### Browser Support
---
If you have any questions, please [Issues us](https://github.com/zhaolan666/JustForFun/issues)

### Frame composition
---
#### Plugins
- [husky](https://typicode.github.io/husky/) - Git hook manager
- [commitlint](https://commitlint.js.org/#/) - Verify submission information
- [jsdom](https://github.com/jsdom/jsdom) - Cross-platform testing of features such as DOM
- [chalk](https://github.com/chalk/chalk) - Terminal theme beautification
- [cz-git](https://github.com/streamich/git-cz) - Tools that use the [Angular](https://github.com/angular/angular) specification for Git commit information specification

#### Coding style
- [ESLint](https://eslint.org/) - Be configured as [@antfu/eslint-config](https://github.com/antfu/eslint-config), Single quotation marks, no semicolons.
- [Prettier](https://prettier.io/) - Constrained code style.


#### Development tool
- [TypeScript](https://www.typescriptlang.org/) 
- [Vitest](https://vitest.dev/) - Vite based unit testing framework.
- [pnpm](https://pnpm.io/) - Fast, disk space saving package manager.
- [sass](https://sass-lang.com/) - Adopt the BEM specification
- [Netlify](https://www.netlifycms.org/) - Zero-configuration deployment
- [VS Code extend](https://code.visualstudio.com/)
  - [Vite](https://vitejs.dev/) - Automatically start the Vite server
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 3 `<script setup>` IDE support
  - [ESLint](https://eslint.org/) - Code quality check


### Special Thanks
---
Chinese documentation is provided by the following community developers:
- mingdu

These community developers make English documentation possible:
- mingdu

### Join Discussion Group
---
Send an email to wy1412185335@163.com
### LICENSE
---
[MIT](https://github.com/zhaolan666/JustForFun/blob/main/LICENSE)
