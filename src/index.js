// Uvozimo Vue i potrebne resurse
import LoaderVuex from './LoaderVuex.vue'
import { loaderModule } from './loaderModule'

const install = (app, { store }) => {
  if (!store) {
    console.error('Please provide a Vuex store')
    return
  }

  // Register the Vuex module
  store.registerModule('loaderModule', loaderModule)

  // Register the component globally
  app.component('loader-vuex', LoaderVuex)
}

// Create plugin
const plugin = {
  install
}

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue && GlobalVue.use) {
  GlobalVue.use(plugin)
}

// Export everything
export {
  LoaderVuex,
  loaderModule
}

export default {
  LoaderVuex,
  loaderModule
}
