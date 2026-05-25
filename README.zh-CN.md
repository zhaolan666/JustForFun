<p align='center'>
  <img src='https://i.328888.xyz/2023/02/20/XGsVU.jpeg' alt='Vitesse - Opinionated Vite Starter Template' width='600'/>
</p>

<p align='center'>
快速<sup><em>JustForFun</em></sup>构建 Web视图<br>
</p>

<br>

<p align='center'>
<a href="#">在线 Demo</a>
</p>

<br>

<p align='center'>
<a href="https://github.com/zhaolan666/JustForFun/blob/dev/README.md">English</a> | <b>简体中文</b>
</p>

<br>

## JustForFun

---

> 一个简单，快速，易于使用的Vue3组合UI框架

- 🔥 开箱即用
- 🦾 支持 Typescirpt, JSX语法
- 📥 丰富的自定义组件
- 📑 代码风格统一，代码质量良好
- 😃 按需引入, 不需要担心下载额外的插件

JustForFun-UI 是因为兴趣使然，没有什么特别的原因。

### 下载

---

```bash
$ npm i justforfun-ui -D

```

### 快速上手

---

```ts
import Vue from 'vue'
import JffUI from 'justforfun-ui'

Vue.use(JffUI)

// or
import {
  Button,
  Tab,
  // ...
} from 'justforfun-ui'

Vue.component(Button.name, Button)
Vue.component(Tab.name, Tab)
```

For more examples, see our documentation to [get started](https://en.wikipedia.org/wiki/Wikipedia).

### 浏览器支持

---

如果你有任何关于此项目的问题, 请 [联系 我们](https://github.com/zhaolan666/JustForFun/issues).

### 框架组成

---

#### 插件

- [husky](https://typicode.github.io/husky/) - Git 钩子管理器
- [commitlint](https://commitlint.js.org/#/) 验证提交信息
- [jsdom](https://github.com/jsdom/jsdom) - 跨平台测试DOM等功能
- [chalk](https://github.com/chalk/chalk) - 终端主题美化
- [cz-git](https://github.com/streamich/git-cz) - 使用了 [Angular](https://github.com/angular/angular) 规范的 Git 提交信息规范的工具

#### 编码风格

- [ESLint](https://eslint.org/) - 配置为 [@antfu/eslint-config](https://github.com/antfu/eslint-config), 单引号, 无分号.
- [Prettier](https://prettier.io/) - 约束代码风格

#### 开发工具

- [TypeScript](https://www.typescriptlang.org/)
- [Vitest](https://vitest.dev/) - 基于 Vite 的单元测试框架
- [pnpm](https://pnpm.io/) - 快, 节省磁盘空间的包管理器
- [sass](https://sass-lang.com/) - 采用 BEM 规范
- [Netlify](https://www.netlifycms.org/) - 零配置的部署
- [VS Code 扩展](https://code.visualstudio.com/)
  - [Vite](https://vitejs.dev/) - 自动启动 Vite 服务器
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 3 `<script setup>` IDE 支持
  - [ESLint](https://eslint.org/) - 代码质量检查

### 特别鸣谢

---

中文文档是由以下社区开发人员提供的:

- mingdu

这些社区开发人员使英语文文档成为可能:

- mingdu

### 加入讨论组

---

发送邮箱到 wy1412185335@163.com

### LICENSE

---

证书由[MIT](https://github.com/zhaolan666/JustForFun/blob/main/LICENSE)提供
