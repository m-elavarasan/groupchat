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
  //   ...mapActions(['intialFetchMessages','getGroupData']),
  //   async getGroupMessage(groupId) {
  //     try {
  //       await this.intialFetchMessages({
  //         groupId,
  //         userId:this.user.userid
  //       })
  //       this.$refs.modal.hide()
  //       this.getGroupData(groupId)
  //       localStorage.setItem('groupId', JSON.stringify(groupId))
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   },
  },
}
