<template>
  <div>
    <template v-if="!isLoggedIn">
      <div class="d-flex flex-column align-items-center mt-5">
        <h2 class="text-primary mb-5">Welcome to ChatApp</h2>
        <form class="w-50 p-3 bg-light border border-primary rounded" @submit.prevent="submitLogin">
          <div class="form-group">
            <label for="mobile">Mobile</label>
            <input type="text" class="form-control" id="mobile" v-model="mobile">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password" v-model="password">
          </div>
          <button type="submit" class="btn btn-primary w-100 mt-3">Submit</button>
        </form>
      </div>
    </template>
    <template v-else>
      <MainCompTesting />
    </template>
  </div>
</template>

<script>
import MainCompTesting from '@/components/testing/MainCompTesting.vue'
import userAuth from '@/apiservice/userAuth'
import { mapActions } from 'vuex'
export default {
  name: 'HomeView',
  components: {
    MainCompTesting 
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
        console.log(userData);
        localStorage.setItem('userData', JSON.stringify(userData))
        this.setUserData(userData)
        this.isLoggedIn = true

      } catch (error) {
        console.error(error)
      }
    },
    ...mapActions([
      'setUserData'
    ])
  },
}
</script>
