
import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import MainView from "../views/MainView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: HomeView,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/",
    name: "home",
    component: MainView,
    meta: {
      requiresAuth: true,
    },
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const userData = localStorage.getItem("userData");
  const requiresAuth = to.meta.requiresAuth;
  if (!userData && requiresAuth) {
    next({
      path: "/login",
      replace: true,
    });
  } else if (userData && to.path === "/login") {
    next({ path: "/" });
  } else {
    next();
  }
});

export default router;

