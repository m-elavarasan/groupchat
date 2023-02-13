import userGroups from '@/apiservice/userGroups';

export default {
  state: {
    groups: [],
  },
  mutations: {
    setGroups(state, groups) {
      state.groups = groups;
    },
  },
  actions: {
    async fetchGroups({ commit }, mobile) {
      const groups = await userGroups.fetchGroups(mobile);
      commit('setGroups', groups);
    },
  },
  getters: {
    groups: state => state.groups,
  },
};
