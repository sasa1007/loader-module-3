export const loaderModule = {
  namespaced: false,
  state() {
    return {
      loaderDialog: false
    }
  },
  getters: {
    isLoading: (state) => state.loaderDialog
  },
  mutations: {
    closeLoader(state) {
      console.log('closeLoader')
      state.loaderDialog = false
    },
    openLoader(state) {
      console.log('openLoader')
      state.loaderDialog = true
    },
  },
  actions: {
    show({ commit }) {
      commit('openLoader')
    },
    hide({ commit }) {
      commit('closeLoader')
    }
  }
}
