import { withInstallFunction } from '@justforfun-ui/utils'

import Message from './src/method'

export const JffMessage = withInstallFunction(Message, '$message')
export default JffMessage

export * from './src/message'
