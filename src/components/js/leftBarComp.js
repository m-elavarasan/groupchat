import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      groupid: "0",
    };
  },
  computed: {
    ...mapGetters(["groups"]),
    user(){
      return JSON.parse(localStorage.getItem("userData"));
    }
  },
  mounted() {
    console.log("UserData"+ this.user.userid);
    this.fetchGroups(this.user.userid);
  },
  methods: {
    ...mapActions(["fetchGroups","intialFetchMessages","getGroupData"],),
   async getGroupMessage(groupId) {
    try{
        await this.intialFetchMessages({
        groupId,
        userId: this.user.userid,
        }),
        this.getGroupData(groupId)
        localStorage.setItem('groupId', JSON.stringify(groupId))
      }
      catch (error) {
        console.error(error);
      }
    },
  },

};
