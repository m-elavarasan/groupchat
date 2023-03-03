import toastMixin from "@/mixins/toastMixin";
import userAuth from "@/apiservice/userAuth";
export default {
  components: {},
  mixins: [toastMixin],
  data() {
    return {
      userData: {},
    };
  },
  methods: {
    handleLogout() {
      this.displayConfirmation("Confirm to Logout", "danger")
        .then((response) => {
          if (response) {
            userAuth.handleLogout({
              success: () => {
              },
              fail: (err) => {
                console.error(err);
              },
            });
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  mounted() {
    this.userData = JSON.parse(localStorage.getItem("userData")) || {};
  },
};
