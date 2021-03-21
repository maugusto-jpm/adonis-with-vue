import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

import actions from './actions'
import state from './state'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: process.env.LOCAL_STORAGE_KEY,
  storage: window.localStorage,
})

export default new Vuex.Store({
  actions,
  state,
  getters,
  mutations,
  plugins: [vuexPersist.plugin],
})
