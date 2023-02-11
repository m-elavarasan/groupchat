import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  // data() {
  //   return {
  //     isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
  //   };
  // },
  // mounted() {
  //   const userData = localStorage.getItem("userData");
  //   if (userData) {
  //     localStorage.setItem("isLoggedIn", true);
  //     this.$store.dispatch("setUserData", { payload: JSON.parse(userData) });
  //   } else {
  //     localStorage.setItem("isLoggedIn", false);
  //   }
  // },
  render: (h) => h(App),
}).$mount("#app");
