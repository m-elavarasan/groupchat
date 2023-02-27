import Vue from "vue";
import Vuex from "vuex";
import userGroups from "@/apiservice/userGroups";
import userContact from "@/apiservice/userContact";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: {},
    groupData: {},
    groups: [],
    messages: [],
    contacts:[],
    limit: 10,
    page: 1,
    currentPage: 1,
    totalPages: 1,
    groupId: 0,
    userId: 0,
  },
  getters: {
    userData: (state) => state.userData,
    groups: (state) => state.groups,
    messages: (state) => state.messages,
    contacts: (state)=>state.contacts,
    selectedGroupData: (state) => state.groupData,
  },
  mutations: {
    setUserData(state, userData) {
      state.userData = userData;
    },
    setGroupData(state, groupData) {
      state.groupData = groupData;
    },
    setGroups(state, groups) {
      state.groups = groups;
    },
    setContacts(state, contacts) {
      state.contacts = contacts;
    },
    setMessage(state, messages) {
      state.messages = messages;
    },
    updateMessage(state, messages) {
      state.messages = [...state.messages, ...messages];
    },
    setPagination(state, pagination) {
      state.currentPage = pagination.CurrentPage;
      state.totalPages = pagination.TotalPages;
    },
  },
  actions: {
    setUserData({ commit }, userData) {
      commit("setUserData", userData)
    },






    
    async fetchContacts({ commit }) {
      const contacts = await userContact.fetchContact();
      commit("setContacts", contacts);
    },
    async fetchGroups({ commit }, mobile) {
      const groups = await userGroups.fetchGroups(mobile);
      commit("setGroups", groups);
    },
    async intialFetchMessages({ commit }, { groupId, userId }) {
      this.state.page = 1;
      console.log(this.state.page, this.state.limit, groupId, userId);
      this.state.groupId = groupId;
      this.state.userId = userId;
      const data = await userGroups.displayMessagePages(
        this.state.page,
        this.state.limit,
        groupId,
        userId
      );
      console.log(data.data.TotalPages);
      console.log(data.data.CurrentPage);
      console.log(data.data["Messages:"]);
      commit("setMessage", data.data["Messages:"]);
      commit("setPagination", data.data);
    },
    async nextFetchMessages({ commit }) {
      console.log("inside Next Fetch" + this.state.totalPages);
      if (this.state.page <= this.state.totalPages) {
        this.state.page= this.state.currentPage+1;
        console.log(this.state.page,this.state.limit,this.state.groupId,this.state.userId);
        const data = await userGroups.displayMessagePages(
          this.state.page,
          this.state.limit,
          this.state.groupId,
          this.state.userId
        );
        console.log(data.data.TotalPages);
        console.log(data.data.CurrentPage);
        console.log(data.data["Messages:"]);
        commit("updateMessage", data.data["Messages:"]);
        commit("setPagination", data.data);
      }
    },
    async getGroupData({ commit }) {
      try {
        console.log("Inside getGroup Action");
        const response = await userGroups.fetchGroupMembers(this.state.groupId);
        commit("setGroupData", response);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },
  },
  modules: {},
});
