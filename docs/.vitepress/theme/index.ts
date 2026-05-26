import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'

// Import custom styles
import './style.css'

// Import UnoCSS styles
import 'uno.css'

// Import theme-chalk styles from packages
import '@justforfun-ui/theme-chalk/src/index.scss'
// Import dark mode styles
import '@justforfun-ui/theme-chalk/src/dark/css-vars.scss'

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

// Import vitepress API table components
import { globals } from '../vitepress'

export default {
  extends: DefaultTheme,
  Layout: DefaultTheme.Layout,
  enhanceApp({ app }) {
    // Register Jff UI components
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
    app.config.globalProperties.$message = JffMessage
    app.provide('JffMessage', JffMessage)
    app.component("JffDropdown", JffDropdown)
    app.component("JffDropdownItem", JffDropdownItem)
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
