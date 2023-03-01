export default {
  name: 'HomeView',
  data() {
    return {
      mobile: '',
      password: '',
      isLoading:false
    };
  },
  mounted() {
    // console.log("UserOld Data :")
    // const user = localStorage.getItem('userData');
    // if (user) {
    // this.$store.dispatch("AUTH_USER", { payload: JSON.parse(user) });      
    // }
  },
  methods: {
    submitLogin() {
      console.log("Button Cicked")
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
    console.log("inside on onSucces");
  isLoading=true,
    localStorage.setItem("isLogined", true);
    console.log(data);
    // this.$router.push({ name: "home" });
  },

  onFail(err) {
    console.error(err),
    isLoading=false,
    alert(err.data),
    this.resetFun(),
    makeToast("Login Failed")
    localStorage.setItem("isLogined", false);
  },
  resetFun()
  {
    this.mobile= '',
    this.password=''
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
}