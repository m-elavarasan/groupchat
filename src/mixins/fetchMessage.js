import { mapActions } from 'vuex'

export default {
  computed: {
    user() {
      return JSON.parse(localStorage.getItem("userData"));
    },
  },
  methods: {
    ...mapActions(["fetchGroups"]),

    fetchGroup(){
        this.fetchGroups({
      mobile: this.user.userid,
      success: (groups) => {
            },
      fail: (error) => {
        console.error(error);
      }
    });
  }

  },
}
