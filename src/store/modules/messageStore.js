import userGroups from "@/apiservice/userGroups";

export default {
  state: {
    allMsg: [],
    groupData: {},
    groups: [],
    messages: [],
    limit: 10,
    page: 1,
    currentPage: 1,
    totalPages: 1,
    groupId: 0,
    userId: 0,
  },
  getters: {
    allMsg: (state) => state.allMsg,
    groups: (state) => state.groups,
    messages: (state) => state.messages,
    selectedGroupData: (state) => state.groupData,
  },
  mutations: {
    setAllMsg(state, allMsg) {
      state.allMsg = allMsg;
    },
    setGroupData(state, groupData) {
      state.groupData = groupData;
    },
    setGroups(state, groups) {
      state.groups = groups;
    },
    setMessage(state, messages) {
      state.messages = messages;
    },
    updateMessage(state, messages) {
      state.messages = [...state.messages, ...messages];
    },
    // setPagination(state, pagination) {
    //   state.currentPage = pagination.CurrentPage;
    //   state.totalPages = pagination.TotalPages;
    // },
  },
  actions: {
    FETCHALLMSG({ commit }, { data, success, fail }) {
      console.log(data);
      userGroups.displayAllMsg(data, {
        success: (res) => {
          commit("setAllMsg", res);
          success(res.data);
        },
        fail: (err) => {
          fail(err);
        },
      });
    },

    GETGROUPDATA({ commit }, { groupId }) {
      userGroups.fetchGroupMembers(groupId, {
        success: (res) => {
          console.log(res);
          commit("setGroupData", res);
        },
        fail: (err) => {
          console.log(err);
        },
      });
    },
    fetchGroups({ commit }, { mobile, success, fail }) {
      userGroups.fetchGroups({
        mobile,
        success: (res) => {
          commit("setGroups", res);

          success(res.data);
        },
        fail: (err) => {
          fail(err);
        },
      });
    },
  },
};
