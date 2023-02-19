import MainComp from '@/components/MainComp.vue'
import userAuth from '@/apiservice/userAuth'
import { mapActions } from 'vuex'
export default {
  name: 'HomeView',
  components: {
    MainComp 
  },
  data() {
    return {
      mobile: '',
      password: '',
      isLoggedIn: false,
    };
  },
  mounted() {
    const user = localStorage.getItem('userData');
    if (user) {
    this.$store.dispatch("setUserData", { payload: JSON.parse(user) });
    this.isLoggedIn = true;
      
    }
  },
  methods: {
    async submitLogin() {
      try {
        const userData = await userAuth.handleLogin(this.mobile, this.password)
        localStorage.setItem('userData', JSON.stringify(userData))
        this.setUserData(userData)
        this.isLoggedIn = true

      } catch (error) {
        alert(error.response.data)
        console.error(error)
      }
    },
    ...mapActions(['setUserData'])
  },
}