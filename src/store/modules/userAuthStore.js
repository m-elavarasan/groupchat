import userAuth from "@/apiservice/userAuth";

export default {
  state: {
    userData: {},
    userId: 0,
  },
  getters: {
    userData: (state) => state.userData,
  },
  mutations: {
    setUserData(state, userData) {
      state.userData = userData;
    },
  },
  actions: {
    AUTH_USER({ commit }, { success, fail, data }) {
      userAuth.handleLogin({
        data,
        success: (res) => {
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
    UPDAT_LOCAL_DATA({ commit }, data) {
      console.log(data);
      commit("setUserData", data);
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
  },
};
