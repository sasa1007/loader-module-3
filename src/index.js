// Uvozimo Vue i potrebne resurse
import LoaderVuex from './LoaderVuex.vue'
import { loaderModule } from './loaderModule'

// Vue 3 plugin
const install = (app, { store }) => {
  if (!store) {
    console.error('Please provide a Vuex store')
    return
  }
  
  // Register the Vuex module
  console.log('Registering loaderModule in store...')
  store.registerModule('loaderModule', loaderModule)
  console.log('Store after registering module:', store.state)
  
  // Register the component globally
  console.log('Registering Vue 3 component:', LoaderVuex)
  app.component('loader-vuex', LoaderVuex)
  console.log('Component registered globally - using Vue 3 component')
}

// Create plugin
const plugin = {
  install
}

// Export everything
export {
  LoaderVuex,
  loaderModule
}

export default plugin
