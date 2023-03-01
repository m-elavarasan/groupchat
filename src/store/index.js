import Vue from "vue";
import Vuex from "vuex";
import userGroups from "@/apiservice/userGroups";
import userContact from "@/apiservice/userContact";
import userAuth from "@/apiservice/userAuth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allMsg:[],
    userData: {},
    groupData: {},
    groups: [],
    messages: [],
    contacts: [],
    limit: 10,
    page: 1,
    currentPage: 1,
    totalPages: 1,
    groupId: 0,
    userId: 0,
  },
  getters: {
    allMsg:(state)=> state.allMsg,
    userData: (state) => state.userData,
    groups: (state) => state.groups,
    messages: (state) => state.messages,
    contacts: (state) => state.contacts,
    selectedGroupData: (state) => state.groupData,
  },
  mutations: {
    setUserData(state, userData) {
      state.userData = userData;
    },
    setAllMsg(state, allMsg) {
      state.allMsg = allMsg;
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
    // setUserData({ commit }, userData) {
    //   commit("setUserData", userData)
    // },
    AUTH_USER({ commit }, { success, fail, data }) {
      userAuth.handleLogin({
        data,
        success: (res) => {
          console.log(" AUTH_USER success");
          localStorage.setItem("userData", JSON.stringify(res.data));
          commit("setUserData", res.data);

          success(res.data);
        },
        fail: (err) => {
          fail(err);
          localStorage.setItem("isLogined", false);
        },
      });
    },
    UPDATE_USER({ commit }, { success, fail, data }) {
      userAuth.handleUpdade({
        data,
        success: (res) => {
          commit("setUserData", res.data);

          success(res.data);
        },
        fail: (err) => {
          fail(err);
      },
      });
    },
    FETCHALLMSG({ commit }, { data, success, fail}) {
      console.log(data);
      userGroups.displayAllMsg(data, 
         {
        success: (res) => {
          console.log('success inside store');
          commit("setAllMsg", res);
          success(res.data)
        },
        fail: (err) => {
          fail(err)
        },
      });
    },


    GETGROUPDATA({ commit },{groupId}) {
      console.log("Inside getGroup Action"+ groupId);
  
      userGroups.fetchGroupMembers(groupId,
        {
       success: (res) => {
        console.log(res);
         commit("setGroupData", res)
         console.log('inside getgroupdata success');
       },
       fail: (err) => {
        console.log(err);
      },
     });
  },









    fetchContacts({ commit }, { success, fail }) {
      userContact.fetchContact({
        success: (res) => {
          console.log(" Fetech Contact success");
          commit("setContacts", res);
          success(res.data);
        },
        fail: (err) => {
          fail(err);
        },
      });
    },

 fetchGroups({ commit }, { mobile,success, fail }) {
      userGroups.fetchGroups({mobile, 
        success: (res) => {
          commit("setGroups", res);

          success(res.data);
        },
        fail: (err) => {
          fail(err);
        },
            });
    },
     intialFetchMessages({ commit }, { success, fail, groupId, userId }) {
      this.state.page = 1;
      this.state.groupId = groupId;
      this.state.userId = userId;
      userGroups
        .displayMessagePages(
          this.state.page,
          this.state.limit,
          groupId,
          userId,
          success,
          fail
        )
        .then((data) => {
          commit("setMessage", data.data["Messages:"]);
          commit("setPagination", data.data);
          success(data.data["Messages:"]);
        })
        .catch((error) => {
          fail(error);
        });
    },

    //   async fetchContacts({ commit }) {
    //     const contacts = await userContact.fetchContact();
    //     commit("setContacts", contacts);
    //   },
    //   async fetchGroups({ commit }, mobile) {
    //     const groups = await userGroups.fetchGroups(mobile);
    //     commit("setGroups", groups);
    //   },
    //   async intialFetchMessages({ commit }, { groupId, userId }) {
    //     this.state.page = 1;
    //     console.log(this.state.page, this.state.limit, groupId, userId);
    //     this.state.groupId = groupId;
    //     this.state.userId = userId;
    //     const data = await userGroups.displayMessagePages(
    //       this.state.page,
    //       this.state.limit,
    //       groupId,
    //       userId
    //     );
    //     console.log(data.data.TotalPages);
    //     console.log(data.data.CurrentPage);
    //     console.log(data.data["Messages:"]);
    //     commit("setMessage", data.data["Messages:"]);
    //     commit("setPagination", data.data);
    //   },
    //   async nextFetchMessages({ commit }) {
    //     console.log("inside Next Fetch" + this.state.totalPages);
    //     if (this.state.page <= this.state.totalPages) {
    //       this.state.page= this.state.currentPage+1;
    //       console.log(this.state.page,this.state.limit,this.state.groupId,this.state.userId);
    //       const data = await userGroups.displayMessagePages(
    //         this.state.page,
    //         this.state.limit,
    //         this.state.groupId,
    //         this.state.userId
    //       );
    //       console.log(data.data.TotalPages);
    //       console.log(data.data.CurrentPage);
    //       console.log(data.data["Messages:"]);
    //       commit("updateMessage", data.data["Messages:"]);
    //       commit("setPagination", data.data);
    //     }
    //   },
    //   async getGroupData({ commit }) {
    //     try {
    //       console.log("Inside getGroup Action");
    //       const response = await userGroups.fetchGroupMembers(this.state.groupId);
    //       commit("setGroupData", response);
    //       console.log(response);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   },
  },
  modules: {},
});
