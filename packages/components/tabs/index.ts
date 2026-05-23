import { withInstall } from '@justforfun-ui/utils'
import Tabs from './src/tabs.vue'
import TabPane from './src/tab-pane.vue'

export const JffTabs = withInstall(Tabs)
export const JffTabPane = withInstall(TabPane)

export default JffTabs

export * from './src/tabs'
