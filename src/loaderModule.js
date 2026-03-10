export const loaderModule = {
  namespaced: true,
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
      state.loaderDialog = false
    },
    openLoader(state) {
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
