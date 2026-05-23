import { defineAsyncComponent } from 'vue'

import Home from './components/Home.vue'
import Layout from './components/Layout.vue'
import NotFound from './components/NotFound.vue'
import Page from './components/Page.vue'

export { Home, Layout, NotFound, Page }

export const VPApp = Layout

export const globals: [string, any][] = []

export default {
  Home,
  Layout,
  NotFound,
  Page,
  VPApp,
  globals
}
