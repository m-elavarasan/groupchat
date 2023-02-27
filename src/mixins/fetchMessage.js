import { mapActions } from 'vuex'

export default {
  computed: {
    user() {
      return JSON.parse(localStorage.getItem("userData"));
    },
    id() {
      return JSON.parse(localStorage.getItem("groupId"))
    }
  },
  methods: {
    ...mapActions(['intialFetchMessages','getGroupData','GETALLMESSAGE']),
    async getGroupMessage() {
      try {
        console.log("inside getGroupMessage");
        await this.GETALLMESSAGE({
          groupId:this.id,
          userId:this.user.userid
        })
        // this.$refs.modal.hide()
        this.getGroupData(this.id)
        localStorage.setItem('groupId', JSON.stringify(this.id))
      } catch (error) {
        console.error(error)
      }
    },
  },
}
