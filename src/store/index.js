import Vue from "vue";
import Vuex from "vuex";
import userGroups from "@/apiservice/userGroups";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: {},
    groupData: {},
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
    selectedGroupData:(state)=>state.groupData
  },
  mutations: {
    setUserData(state, userData) {
      state.userData = userData;
    },
    setSelectedGroup(state, selectedGroup) {
      state.selectedGroup = selectedGroup;
    },
    setGroups(state, groups) {
      state.groups = groups;
    },
    setMessage(state, messages) {
      state.messages = messages;
    },
    setPagination(state, pagination) {
      state.currentPage = pagination.CurrentPage;
      state.totalPages = pagination.TotalPages;
      state.totalItems = pagination.TotalItems;
    },
    setGroupData(state, groupData) {
      state.groupData = groupData;
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
      commit("setGroups", groups);
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
      const  data  = await userGroups.displayMessagePages(
        page,
        limit,
        groupId,
        userId,
        );
        // console.log(response.data.TotalPages);
        // console.log(response.data.CurrentPage);
       console.log(data.data['Messages:']);
      commit("setMessage",data.data['Messages:']);
      commit("setPagination", data.data['Messages:']);
    },
      async getMessages({ commit }, payload) {
              try {
                const response = await userGroups.displaySpecific(payload.groupId, payload.userId);
                commit('setMessage', response.data);
              } catch (error) {
                console.error(error);
              }
        },

       async getGroupData({ commit}, selectedGroup) {
        try {
          console.log('Inside getGroup Action');
          const response = await userGroups.fetchGroupMembers(selectedGroup);
          commit("setGroupData", response);
        } catch (error) {
          console.error(error);
        }
      },
  },
  
});
