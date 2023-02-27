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
    this.$store.dispatch("setUserData", { payload: JSON.parse(user) });      
    }
  },
  methods: {
    async submitLogin() {
      try {
        const userData = await userAuth.handleLogin(this.mobile, this.password)
        localStorage.setItem('userData', JSON.stringify(userData))
        this.setUserData(userData),
        this.$router.push({ name: 'home'})
      } catch (error) {
        alert(error.response.data)
        console.error(error)
      }
    },
    ...mapActions(['setUserData'])
  },
}