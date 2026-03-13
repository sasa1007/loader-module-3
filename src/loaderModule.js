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
      state.loaderDialog = false
    },
    openLoader(state) {
      state.loaderDialog = true
    }
  }
}
