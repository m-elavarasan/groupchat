import { mapGetters, mapActions } from "vuex";

export default {
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
    ...mapActions(["fetchGroups"]),

    async fetchMessages(groupId) {
      console.log(this.user.userid);
      try {
        await this.getMessages({
          groupId,
          userId: this.user.userid,
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
