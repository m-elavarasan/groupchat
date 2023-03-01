import userContact from "@/apiservice/userContact";
export default ({
  state: {
    contacts: [],
    
  },
  getters: {
    contacts: (state) => state.contacts,
    
  },
  mutations: {
    setContacts(state, contacts) {
      state.contacts = contacts;
    },
  },
  actions: {
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
  },
});
