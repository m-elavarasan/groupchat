import Vue from "vue";
import Vuex from "vuex";
import userGroups from "@/apiservice/userGroups";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: {},
    groups: [],
    messages: [],
    selectedGroup:0,
    currentPage: 0,
    totalPages: 0,
    totalItems: 0,
  },
  getters: {
    userData: (state) => state.userData,
    groups: (state) => state.groups,
    messages: (state) => state.messages,
    currentPage: (state) => state.currentPage,
    totalPages: (state) => state.totalPages,
    totalItems: (state) => state.totalItems,
    SelectedGroup:(state)=>state.selectedGroup,
  },
  mutations: {
    setUserData(state, userData) {
      state.userData = userData;
    },
    setSelectedGroup(state, selectedGroup) {
      state.selectedGroup = selectedGroup;
    },
    SET_GROUPS(state, groups) {
      state.groups = groups;
    },
    SET_MESSAGES(state, messages) {
      state.messages = messages;
    },
    SET_PAGINATION(state, pagination) {
      state.currentPage = pagination.CurrentPage;
      state.totalPages = pagination.TotalPages;
      state.totalItems = pagination.TotalItems;
    },
  },
  actions: {
    setUserData({ commit }, userData) {
      commit("setUserData", userData);
    },
    setSelectedGroup({commit}, selectedGroup){
      commit("setSelectedGroup",selectedGroup)
    },
    async fetchGroups({ commit }, mobile) {
      const groups = await userGroups.fetchGroups(mobile);
      commit("SET_GROUPS", groups);
    },
    async sendMessage({ commit }, payload) {
      try {
        const response = await userGroups.sendMessage(
          payload.groupId,
          payload.senderId,
          payload.messageText
        );
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },
    async fetchMessages({ commit }, { page, limit, groupId, userId }) {
      const { data } = await userGroups.displayMessagePages(
        page,
        limit,
        groupId,
        userId,
        );
       console.log(data);
      commit("SET_MESSAGES", data);
      commit("SET_PAGINATION", data);
    },
    async getMessages({ commit }, payload) {
            try {
              const response = await userGroups.displaySpecific(payload.groupId, payload.userId);
              commit('SET_MESSAGES', response.data);
            } catch (error) {
              console.error(error);
            }
       },
  },
  
});
