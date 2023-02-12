import userGroups from '@/apiservice/userGroups';

export default {
  state: {
    groups: [],
  },
  mutations: {
    SET_GROUPS(state, groups) {
      state.groups = groups;
    },
  },
  actions: {
    async fetchGroups({ commit }, mobile) {
      const groups = await userGroups.fetchGroups(mobile);
      commit('SET_GROUPS', groups);
    },
  },
  getters: {
    groups: state => state.groups,
  },
};
