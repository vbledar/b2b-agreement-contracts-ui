const state = {
  wallet: null
}

const getters = {
  getWallet: (state) => {
    return state.wallet
  }
}

const actions = {
  setWallet ({ commit, state }, wallet) {
    commit('setWallet', wallet)
  },
}

const mutations = {
  setWallet(state, wallet) {
    state.wallet = wallet
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
