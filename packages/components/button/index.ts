import Button from './src/button.vue';
import ButtonGroup from './src/button-group.vue';
import { withInstall } from '@justforfun-ui/utils'

export const JffButton = withInstall(Button,() => ButtonGroup)
export const JffButtonGroup = withInstall(ButtonGroup)

export default JffButton

export * from './src/button'
export type { ButtonInstance, ButtonGroupInstance } from './src/instance'
