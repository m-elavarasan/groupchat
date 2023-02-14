import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      page:1,
      limit:10,
      totalPages:'1',

    }
  },
  computed: {
    ...mapGetters(["groups"]),
    user() {
      return JSON.parse(localStorage.getItem("userData"));
    },
  },
  mounted() {
    this.fetchGroups(this.user.userid);
  },
  methods: {
    ...mapActions(["fetchMessages"]),
    ...mapActions(["fetchGroups","getGroupData"]),

    async fetchMessagesClick(groupId) {

      console.log('Page '+this.page,'Limit '+ this.limit,'userid '+this.user.userid,'groupid '+groupId);
      try {
        await this.fetchMessages({
          page: this.page,
          limit: this.limit,
          groupId,
          userId: this.user.userid
        });
      } catch (error) {
        console.error(error);
      }
    },
    selectGroup (groupId) {
      this.$store.commit('setSelectedGroupId', groupId),
      this.getGroupData()
    }
  },
};
