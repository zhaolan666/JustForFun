import { withInstall } from '@justforfun-ui/utils'

import Badge from './src/badge.vue'

export const JffBadge = withInstall(Badge)
export default JffBadge

export * from './src/badge'
export type { BadgeInstance } from './src/instance'
