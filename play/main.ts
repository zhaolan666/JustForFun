import { createApp } from 'vue'
import JffIcon from '@justforfun-ui/components/icon'
import JffButton, { JffButtonGroup } from '@justforfun-ui/components/button'
import JffInput from '@justforfun-ui/components/input'
import { JffContainer, JffHeader, JffMain, JffFooter, JffRow, JffCol } from '@justforfun-ui/components/layout'
import JffBorder from '@justforfun-ui/components/border'
import { JffCheckbox, JffCheckboxGroup } from '@justforfun-ui/components/checkbox'
import { JffRadio, JffRadioGroup } from '@justforfun-ui/components/radio'
import { JffSelect, JffOption } from '@justforfun-ui/components/select'
import JffSwitch from '@justforfun-ui/components/switch'
import JffBadge from '@justforfun-ui/components/badge'
import JffAvatar from '@justforfun-ui/components/avatar'
import JffCard from '@justforfun-ui/components/card'
import JffTag from '@justforfun-ui/components/tag'
import { JffTabs, JffTabPane } from '@justforfun-ui/components/tabs'
import { JffDropdown, JffDropdownItem } from '@justforfun-ui/components/dropdown'
import JffAlert from '@justforfun-ui/components/alert'
import JffDialog from '@justforfun-ui/components/dialog'
import '@justforfun-ui/theme-chalk/src/index.scss'

console.log('Styles loaded')
import App from './src/App.vue'

const app = createApp(App)

app.use(JffIcon)
app.use(JffButton)
app.use(JffButtonGroup)
app.use(JffInput)
app.use(JffBorder)

app.component('JffContainer', JffContainer)
app.component('JffHeader', JffHeader)
app.component('JffMain', JffMain)
app.component('JffFooter', JffFooter)
app.component('JffRow', JffRow)
app.component('JffCol', JffCol)

app.component('JffCheckbox', JffCheckbox)
app.component('JffCheckboxGroup', JffCheckboxGroup)
app.component('JffRadio', JffRadio)
app.component('JffRadioGroup', JffRadioGroup)
app.component('JffSelect', JffSelect)
app.component('JffOption', JffOption)
app.component('JffSwitch', JffSwitch)
app.component('JffBadge', JffBadge)
app.component('JffAvatar', JffAvatar)
app.component('JffCard', JffCard)
app.component('JffTag', JffTag)
app.component('JffTabs', JffTabs)
app.component('JffTabPane', JffTabPane)
app.component('JffDropdown', JffDropdown)
app.component('JffDropdownItem', JffDropdownItem)
app.component('JffAlert', JffAlert)
app.component('JffDialog', JffDialog)

// Components registered successfully

app.mount('#app')
