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
      let sortGroup=Object.values(this.groups).reverse()
      return sortGroup.filter(group => group.groupName.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
  destroyed() {
    window.removeEventListener("keyup", this.handleEscapeKey);
  },
  mounted() {
    window.addEventListener("keyup", (event) => {
      if (event.key === "Escape") {
        console.log("Escape pressed");
        this.selectedGroup =null;
      }
    }),
    console.log("UserData"+ this.user.userid);
    this.fetchGroups({
      mobile: this.user?.userid,
      success: (groups) => {
        console.log('User Group Fetch successfull');
            },
      fail: (error) => {
        console.error(error);
      }
    });
      },
  methods: {
    getGroupMessage(groupId) {
    this.selectedGroup = groupId;
    this.$emit('fetchmsg',groupId)
    localStorage.setItem('groupId', JSON.stringify(groupId))
    this.$store.dispatch("GETGROUPDATA", {groupId})
    },
  },

};