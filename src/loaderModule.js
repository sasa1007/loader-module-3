const state = {
  loaderDialog: false
}

const mutations = {
  SHOW_LOADER(state) {
    state.loaderDialog = true
  },
  HIDE_LOADER(state) {
    state.loaderDialog = false
  }
}

const actions = {
  show({ commit }) {
    commit('SHOW_LOADER')
  },
  hide({ commit }) {
    commit('HIDE_LOADER')
  }
}

const getters = {
  isLoading: state => state.loaderDialog
}

export const loaderModule = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
