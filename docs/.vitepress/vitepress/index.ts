import { defineAsyncComponent } from 'vue'

import Home from './components/Home.vue'
import Layout from './components/Layout.vue'
import NotFound from './components/NotFound.vue'
import Page from './components/Page.vue'
import ApiTable from './components/ApiTable.vue'
import DemoBlock from './components/DemoBlock.vue'
import ComponentDoc from './components/ComponentDoc.vue'
import DropdownDemo from './components/DropdownDemo.vue'
import SelectDemo from './components/SelectDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import BorderDemo from './components/BorderDemo.vue'
import BorderTypeDemo from './components/BorderTypeDemo.vue'
import BorderColorDemo from './components/BorderColorDemo.vue'
import BorderDirectionDemo from './components/BorderDirectionDemo.vue'
import AlertDemo from './components/AlertDemo.vue'
import LayoutDemo from './components/LayoutDemo.vue'
import BadgeDemo from './components/BadgeDemo.vue'
import TagDemo from './components/TagDemo.vue'
import CardDemo from './components/CardDemo.vue'
import FormDemo from './components/FormDemo.vue'
import IconDemo from './components/IconDemo.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import RadioDemo from './components/RadioDemo.vue'
import CheckboxDemo from './components/CheckboxDemo.vue'
import DialogDemo from './components/DialogDemo.vue'

export {
  Home,
  Layout,
  NotFound,
  Page,
  ApiTable,
  DemoBlock,
  ComponentDoc,
  DropdownDemo,
  SelectDemo,
  ButtonDemo,
  BorderDemo,
  BorderTypeDemo,
  BorderColorDemo,
  BorderDirectionDemo,
  AlertDemo,
  LayoutDemo,
  BadgeDemo,
  TagDemo,
  CardDemo,
  FormDemo,
  IconDemo,
  SwitchDemo,
  RadioDemo,
  CheckboxDemo,
  DialogDemo
}

export const VPApp = Layout

export const globals: [string, any][] = [
  ['ApiTable', ApiTable],
  ['DemoBlock', DemoBlock],
  ['ComponentDoc', ComponentDoc],
  ['DropdownDemo', DropdownDemo],
  ['SelectDemo', SelectDemo],
  ['ButtonDemo', ButtonDemo],
  ['BorderDemo', BorderDemo],
  ['BorderTypeDemo', BorderTypeDemo],
  ['BorderColorDemo', BorderColorDemo],
  ['BorderDirectionDemo', BorderDirectionDemo],
  ['AlertDemo', AlertDemo],
  ['LayoutDemo', LayoutDemo],
  ['BadgeDemo', BadgeDemo],
  ['TagDemo', TagDemo],
  ['CardDemo', CardDemo],
  ['FormDemo', FormDemo],
  ['IconDemo', IconDemo],
  ['SwitchDemo', SwitchDemo],
  ['RadioDemo', RadioDemo],
  ['CheckboxDemo', CheckboxDemo],
  ['DialogDemo', DialogDemo],
]

export default {
  Home,
  Layout,
  NotFound,
  Page,
  ApiTable,
  ComponentDoc,
  VPApp,
  globals
}
