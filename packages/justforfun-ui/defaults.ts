import { makeInstaller } from './make-installer'
import Components from './component'
import Plugin from './plugin'

export default makeInstaller([...Components, ...Plugin])
