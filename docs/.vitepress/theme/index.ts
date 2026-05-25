import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'

// Import custom styles
import './style.css'

// Import UnoCSS styles
import 'uno.css'

// Import theme-chalk styles from packages
import '@justforfun-ui/theme-chalk/src/index.scss'
// Import dark mode styles
import '@justforfun-ui/theme-chalk/src/drak/css-vars.scss'

// Import components
import JffIcon from '@justforfun-ui/components/icon'
import JffButton from '@justforfun-ui/components/button'
import JffInput from '@justforfun-ui/components/input'
import JffCheckbox, {
  JffCheckboxGroup,
} from '@justforfun-ui/components/checkbox'
import JffRadio, { JffRadioGroup } from '@justforfun-ui/components/radio'
import JffSelect, { JffOption } from '@justforfun-ui/components/select'
import JffSwitch from '@justforfun-ui/components/switch'
import JffBadge from '@justforfun-ui/components/badge'
import JffTag from '@justforfun-ui/components/tag'
import JffAvatar from '@justforfun-ui/components/avatar'
import JffCard from '@justforfun-ui/components/card'
import JffDialog from '@justforfun-ui/components/dialog'
import JffAlert from '@justforfun-ui/components/alert'
import { JffMessage } from '@justforfun-ui/components/message'
import { JffDropdown, JffDropdownItem } from '@justforfun-ui/components/dropdown'
import JffBorder from '@justforfun-ui/components/border'
import {
  JffContainer,
  JffHeader,
  JffAside,
  JffMain,
  JffFooter,
  JffRow,
  JffCol,
} from '@justforfun-ui/components/layout'
import DemoBlock from '../vitepress/components/DemoBlock.vue'
import DemoBox from '../vitepress/components/DemoBox.vue'
import JffDemoContainer from '../vitepress/components/JffDemoContainer.vue'
import MessageDemo from '../vitepress/components/MessageDemo.vue'
import DialogDemo from '../vitepress/components/DialogDemo.vue'
import DialogBasicDemo from '../vitepress/components/DialogBasicDemo.vue'
import DialogFormDemo from '../vitepress/components/DialogFormDemo.vue'
import DialogHeaderDemo from '../vitepress/components/DialogHeaderDemo.vue'
import DialogCenterDemo from '../vitepress/components/DialogCenterDemo.vue'
import DialogFullscreenDemo from '../vitepress/components/DialogFullscreenDemo.vue'
import SwitchDemo from '../vitepress/components/SwitchDemo.vue'

import CheckboxDemo from '../vitepress/components/CheckboxDemo.vue'
import RadioDemo from '../vitepress/components/RadioDemo.vue'
import IconDemo from '../vitepress/components/IconDemo.vue'
export default {
  extends: DefaultTheme,
  Layout: DefaultTheme.Layout,
  enhanceApp({ app }) {
    // Inject custom CSS for code blocks (client-side only)
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const style = document.createElement('style')
      style.textContent = `
        /* 代码块容器 */
        .vp-doc div[class*="language-"] {
          position: relative;
          border-radius: 8px;
          margin: 0 !important;
          padding: 0 !important;
          background-color: var(--vp-code-block-bg);
          overflow: visible;
          height: auto !important;
          min-height: auto !important;
        }
        /* pre 容器 */
        .vp-doc div[class*="language-"] pre {
          margin: 0 !important;
          padding: 8px 16px 4px 16px !important;
          background: transparent;
          overflow-x: visible !important;
          overflow-y: visible;
          height: auto !important;
          min-height: auto !important;
          width: 100%;
        }
        /* code 元素 */
        .vp-doc div[class*="language-"] code {
          font-family: var(--vp-font-family-mono, 'Fira Code', 'Consolas', monospace);
          font-size: 14px;
          line-height: 1.7;
          color: var(--vp-code-color);
          direction: ltr;
          text-align: left;
          white-space: pre;
          word-spacing: normal;
          word-break: normal;
          tab-size: 4;
          hyphens: none;
          background-color: transparent;
          display: block;
        }
        .vp-doc div[class*="language-"] pre code {
          display: block;
          padding: 0;
        }
        /* Shiki 代码高亮样式 */
        .vp-doc div[class*="language-"] .shiki {
          background-color: transparent !important;
          padding: 0 !important;
          overflow: visible !important;
          width: 100%;
        }
        /* 每一行的样式 */
        .vp-doc div[class*="language-"] .shiki .line {
          display: block;
          min-height: 1.5em;
          line-height: 1.5;
          padding: 0;
        }
        /* 空行也要有高度 */
        .vp-doc div[class*="language-"] .shiki .line:empty {
          min-height: 1.5em;
        }
        /* 确保代码颜色正确 */
        .vp-doc div[class*="language-"] .shiki code,
        .vp-doc div[class*="language-"] .shiki span {
          color: var(--vp-code-color) !important;
        }
        /* 暗黑模式 */
        html.dark .vp-doc div[class*="language-"] {
          background-color: var(--vp-code-block-bg);
        }
        html.dark .vp-doc div[class*="language-"] code {
          color: var(--vp-code-color);
        }
        html.dark .vp-doc div[class*="language-"] .shiki code,
        html.dark .vp-doc div[class*="language-"] .shiki span {
          color: var(--vp-code-color) !important;
        }
      `
      document.head.appendChild(style)
    }

    // Register components
    app.use(JffIcon)
    app.use(JffButton)
    app.use(JffInput)
    app.use(JffCheckbox)
    app.use(JffCheckboxGroup)
    app.use(JffRadio)
    app.use(JffRadioGroup)
    app.use(JffSelect)
    app.use(JffOption)
    app.use(JffSwitch)
    app.use(JffBadge)
    app.use(JffTag)
    app.use(JffAvatar)
    app.use(JffCard)
    app.use(JffDialog)
    app.use(JffAlert)
    app.config.globalProperties.$message = JffMessage
    app.provide('JffMessage', JffMessage)
    app.use(JffDropdown)
    app.use(JffDropdownItem)
    app.use(JffBorder)
    app.use(JffContainer)
    app.use(JffHeader)
    app.use(JffAside)
    app.use(JffMain)
    app.use(JffFooter)
    app.use(JffRow)
    app.use(JffCol)
    app.component('DemoBlock', DemoBlock)
    app.component('DemoBox', DemoBox)
    app.component('JffDemoContainer', JffDemoContainer)
    app.component('MessageDemo', MessageDemo)
    app.component('DialogDemo', DialogDemo)
    app.component('DialogBasicDemo', DialogBasicDemo)
    app.component('DialogFormDemo', DialogFormDemo)
    app.component('DialogHeaderDemo', DialogHeaderDemo)
    app.component('DialogCenterDemo', DialogCenterDemo)
    app.component('DialogFullscreenDemo', DialogFullscreenDemo)
    app.component('SwitchDemo', SwitchDemo)
    app.component('CheckboxDemo', CheckboxDemo)
    app.component('RadioDemo', RadioDemo)
    app.component('IconDemo', IconDemo)
  },
} as Theme
