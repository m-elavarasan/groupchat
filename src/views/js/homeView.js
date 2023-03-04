import toastMixin from "@/mixins/toastMixin";
export default {
  name: "HomeView",
  data() {
    return {
      mobile: "",
      password: "",
      isLoading: false,
      errorMsgVisible: false,
      errMsg: "",
    };
  },
  mixins: [toastMixin],
  methods: {
    submitLogin() {
      this.isLoading = true;
      this.$store.dispatch("AUTH_USER", {
        success: this.onSuccess,
        fail: this.onFail,
        data: {
          mobileNum: this.mobile,
          password: this.password,
        },
      });
    },
    onSuccess(data) {
      (this.isLoading = false), localStorage.setItem("isLogined", true);
      console.log(data);
      this.$router.push({ name: "home" });
    },

    onFail(err) {
      console.error(err),
        (this.isLoading = false),
        // alert(err.data),
        (this.errMsg = err.data),
        (this.errorMsgVisible = true);
      setTimeout(this.resetFun, 3000);
      localStorage.setItem("isLogined", false);
    },
    resetFun() {
      (this.mobile = ""), (this.password = "");
      this.errorMsgVisible = false;
      this.errMsg = "";
    },
    // async submitLogin() {
    //   try {
    //     const userData = await userAuth.handleLogin(this.mobile, this.password)
    //     localStorage.setItem('userData', JSON.stringify(userData))
    //     this.setUserData(userData),
    //     this.$router.push({ name: 'home'})
    //   } catch (error) {
    //     alert(error.response.data)
    //     console.error(error)
    //   }
    // },
    // ...mapActions(['setUserData'])
  },
};
