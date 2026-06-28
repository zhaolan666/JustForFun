import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'

// Import custom styles
import './style.css'

// 测试 SCSS 编译
import './test-scss.scss'

// Import UnoCSS styles
import 'uno.css'

// Import theme-chalk styles from packages
import '@justforfun-ui/theme-chalk/src/index.scss'
// Import dark mode styles
import '@justforfun-ui/theme-chalk/src/dark/css-vars.scss'

// Import components - 直接导入原始 .vue 文件，避免包装函数导致的渲染问题
import JffIcon from '@justforfun-ui/components/icon/src/icon.vue'
import JffButton from '@justforfun-ui/components/button/src/button.vue'
import JffInput from '@justforfun-ui/components/input/src/input.vue'
import JffCheckbox from '@justforfun-ui/components/checkbox/src/checkbox.vue'
import JffCheckboxGroup from '@justforfun-ui/components/checkbox/src/checkbox-group.vue'
import JffRadio from '@justforfun-ui/components/radio/src/radio.vue'
import JffRadioGroup from '@justforfun-ui/components/radio/src/radio-group.vue'
import JffSelect from '@justforfun-ui/components/select/src/select.vue'
import JffOption from '@justforfun-ui/components/select/src/option.vue'
import JffSwitch from '@justforfun-ui/components/switch/src/switch.vue'
import JffBadge from '@justforfun-ui/components/badge/src/badge.vue'
import JffTag from '@justforfun-ui/components/tag/src/tag.vue'
import JffAvatar from '@justforfun-ui/components/avatar/src/avatar.vue'
import JffCard from '@justforfun-ui/components/card/src/card.vue'
import JffDialog from '@justforfun-ui/components/dialog/src/dialog.vue'
import JffAlert from '@justforfun-ui/components/alert/src/alert.vue'
import JffDropdown from '@justforfun-ui/components/dropdown/src/dropdown.vue'
import JffDropdownItem from '@justforfun-ui/components/dropdown/src/dropdown-item.vue'
import JffTabs from '@justforfun-ui/components/tabs/src/tabs.vue'
import JffTabPane from '@justforfun-ui/components/tabs/src/tab-pane.vue'
import JffBorder from '@justforfun-ui/components/border/src/border.vue'
import JffContainer from '@justforfun-ui/components/layout/src/container.vue'
import JffHeader from '@justforfun-ui/components/layout/src/header.vue'
import JffAside from '@justforfun-ui/components/layout/src/aside.vue'
import JffMain from '@justforfun-ui/components/layout/src/main.vue'
import JffFooter from '@justforfun-ui/components/layout/src/footer.vue'
import JffRow from '@justforfun-ui/components/layout/src/row.vue'
import JffCol from '@justforfun-ui/components/layout/src/col.vue'

// Import vitepress API table components
import { globals } from '../vitepress'

export default {
  extends: DefaultTheme,
  Layout: DefaultTheme.Layout,
  enhanceApp({ app }) {
    // Register Jff UI components - 直接注册原始组件对象
    app.component("JffIcon", JffIcon)
    app.component("JffButton", JffButton)
    app.component("JffInput", JffInput)
    app.component("JffCheckbox", JffCheckbox)
    app.component("JffCheckboxGroup", JffCheckboxGroup)
    app.component("JffRadio", JffRadio)
    app.component("JffRadioGroup", JffRadioGroup)
    app.component("JffSelect", JffSelect)
    app.component("JffOption", JffOption)
    app.component("JffSwitch", JffSwitch)
    app.component("JffBadge", JffBadge)
    app.component("JffTag", JffTag)
    app.component("JffAvatar", JffAvatar)
    app.component("JffCard", JffCard)
    app.component("JffDialog", JffDialog)
    app.component("JffAlert", JffAlert)
    app.component("JffDropdown", JffDropdown)
    app.component("JffDropdownItem", JffDropdownItem)
    app.component("JffTabs", JffTabs)
    app.component("JffTabPane", JffTabPane)
    app.component("JffBorder", JffBorder)
    app.component("JffContainer", JffContainer)
    app.component("JffHeader", JffHeader)
    app.component("JffAside", JffAside)
    app.component("JffMain", JffMain)
    app.component("JffFooter", JffFooter)
    app.component("JffRow", JffRow)
    app.component("JffCol", JffCol)

    // Register VitePress API table and demo components
    globals.forEach(([name, comp]) => {
      app.component(name, comp)
    })
  },
} as Theme
