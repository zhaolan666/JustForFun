import { withInstall } from '@justforfun-ui/utils'
import Container from './src/container.vue'
import Header from './src/header.vue'
import Main from './src/main.vue'
import Footer from './src/footer.vue'
import Aside from './src/aside.vue'
import Row from './src/row.vue'
import Col from './src/col.vue'

export const JffContainer = withInstall(Container)
export const JffHeader = withInstall(Header)
export const JffMain = withInstall(Main)
export const JffFooter = withInstall(Footer)
export const JffAside = withInstall(Aside)
export const JffRow = withInstall(Row)
export const JffCol = withInstall(Col)

export default JffContainer

export * from './src/layout'
