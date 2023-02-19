import { mapActions,mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['userData']),
  },
  methods: {
    ...mapActions(['intialFetchMessages','getGroupData']),
    async getGroupMessage(groupId) {
      try {
        await this.intialFetchMessages({
          groupId,
          userId:this.userData.payload.userid
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
