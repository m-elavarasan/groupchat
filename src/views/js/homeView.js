import userAuth from '@/apiservice/userAuth'
import { mapActions } from 'vuex'
export default {
  name: 'HomeView',
  components: {
  },
  data() {
    return {
      mobile: '',
      password: '',
    };
  },
  mounted() {
    const user = localStorage.getItem('userData');
    if (user) {
    this.$store.dispatch("AUTH_USER", { payload: JSON.parse(user) });      
    }
  },
  methods: {
    submitLogin() {
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
    localStorage.setItem("isLogined", true);
    console.log(data);
    this.$router.push({ name: "home" });
  },
  onFail(err) {
    console.log("inside on onLogin");
    localStorage.setItem("isLogined", false);
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