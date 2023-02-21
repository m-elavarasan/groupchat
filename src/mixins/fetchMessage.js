import { mapActions } from 'vuex'

export default {
  computed: {
    user() {
      return JSON.parse(localStorage.getItem("userData"));
    },
  },
  methods: {
    ...mapActions(['intialFetchMessages','getGroupData']),
    async getGroupMessage(groupId) {
      try {
        await this.intialFetchMessages({
          groupId,
          userId:this.user.userid
        })
        this.$refs.modal.hide()
        this.getGroupData(groupId)
        localStorage.setItem('groupId', JSON.stringify(groupId))
      } catch (error) {
        console.error(error)
      }
    },
  },
}
