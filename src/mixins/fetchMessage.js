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
      console.log('Inside mixins');
        this.fetchGroups({
      mobile: this.user.userid,
      success: (groups) => {
        console.log('User Group Fetch successfull');
            },
      fail: (error) => {
        console.error(error);
      }
    });
  }

  },
}
