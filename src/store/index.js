import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import contracts from './modules/contracts'
import merchant from './modules/merchant'
import provider from './modules/provider'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: 'wt-ui-client',
  storage: window.localStorage,
  modules: ['contracts']
})

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    contracts,
    merchant,
    provider
  },
  strict: debug,
  plugins: [vuexPersist.plugin]
})
