import router from "@/router";
import { mapGetters, mapActions } from "vuex";
import fetchMessage from "@/mixins/fetchMessage";
export default {
  data() {
    return {
      selectedGroup: null,
      searchQuery: '',
    };
  },
  mixins:[fetchMessage],
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
        console.log('User Group Fetch successfull');
            },
      fail: (error) => {
        console.error(error);
      }
    });
      },
  methods: {
   async getGroupMessage(groupId) {
    this.selectedGroup = groupId;
    this.$emit('fetchmsg',groupId)
    localStorage.setItem('groupId', JSON.stringify(groupId))
    this.$store.dispatch("GETGROUPDATA", {groupId})
    },
  },

};