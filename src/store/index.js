import Vue from 'vue'
import Vuex from 'vuex'
import userGroups from '@/apiservice/userGroups';



import userDataStore from './userDataStore'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userData: {},
    groups: [],
  },
  getters: {
     userData: state => state.userData,
     groups: state => state.groups, 
  },
  mutations: {
    setUserData (state, userData) {
      state.userData = userData
    },
    SET_GROUPS(state, groups) {
      state.groups = groups;
    },
  },
  actions: {
    setUserData ({commit}, userData) {
      commit('setUserData', userData)
    },
    async fetchGroups({ commit }, mobile) {
      const groups = await userGroups.fetchGroups(mobile);
      commit('SET_GROUPS', groups);
    },
  },
  module:{
      userDataStore
  }
  })
