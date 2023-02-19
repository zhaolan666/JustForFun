import type {}  from 'vue';
import * as components from './components';
import { version } from  './package.json';


const install = function (app: App) {
  Object.entries(component).forEach(([key,value]) => {
    app.component(key,value)
  }) 
}

export default {
  install,
  version
}
