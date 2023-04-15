import { componentSizeMap } from '@justforfun-ui/constants'

import type { ComponentSize } from '@justforfun-ui/constants'

export const getComponentSize = (size?: ComponentSize) => {
  return componentSizeMap[size || 'default']
}
