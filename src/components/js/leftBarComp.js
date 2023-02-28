import router from "@/router";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      groupid: "0",
      searchQuery: '',
    };
  },
  computed: {
    ...mapGetters(["groups"]),
    user(){
      return JSON.parse(localStorage.getItem("userData"));
    },
    filteredGroups() {
      return Object.values(this.groups).filter(group => group.groupName.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
  mounted() {
    console.log("UserData"+ this.user.userid);
    this.fetchGroups({
      mobile: this.user.userid,
      success: (groups) => {
        localStorage.setItem('groupId', JSON.stringify(groupId))
      },
      fail: (error) => {
        console.error(error);
      }
    });
      },
  methods: {
    ...mapActions(["fetchGroups","intialFetchMessages","getGroupData"],),
   async getGroupMessage(groupId) {
    try{
      // router.push(`${groupId}`)
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