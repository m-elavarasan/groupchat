import { mapGetters } from "vuex";
import fetchMessage from "@/mixins/fetchMessage";
export default {
  data() {
    return {
      selectedGroup: null,
      searchQuery: "",
    };
  },
  mixins: [fetchMessage],
  computed: {
    ...mapGetters(["groups"]),
    user() {
      return JSON.parse(localStorage.getItem("userData"));
    },
    filteredGroups() {
      let sortGroup = Object.values(this.groups).reverse();
      return sortGroup.filter((group) =>
        group.groupName.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  destroyed() {
    window.removeEventListener("keyup", this.handleEscapeKey);
  },
  mounted() {
    window.addEventListener("keyup", (event) => {
      if (event.key === "Escape") {
        this.selectedGroup = null;
      }
    }),
    this.fetchGroups({
      mobile: this.user?.userid,
      success: (groups) => {
      },
      fail: (error) => {
        console.error(error);
      },
    });
  },
  methods: {
    getGroupMessage(groupId) {
      this.selectedGroup = groupId;
      this.$emit("fetchmsg", groupId);
      localStorage.setItem("groupId", JSON.stringify(groupId));
      this.$store.dispatch("GETGROUPDATA", { groupId });
    },
  },
};
