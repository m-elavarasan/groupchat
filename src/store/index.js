import Vue from 'vue'
import Vuex from 'vuex'

import userDataStore from './userDataStore'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userData: {},
  },
  getters: {
     userData: state => state.userData,
  },
  mutations: {
    setUserData (state, userData) {
      state.userData = userData
    },
  },
  actions: {
    setUserData ({commit}, userData) {
      commit('setUserData', userData)
    },
  },
  module:{
      userDataStore
  }
  })
