import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DemoView from '../views/DemoView.vue'
import MainView from '../views/MainView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: HomeView,
    meta: {
      requiresAuth: false
    }
  },
  {
    path:'/',
    name:'home',
    component: MainView,
    meta:{
      requiresAuth:true
    }
  },
  // {
  //   path:'/:groupId',
  //   name:'home',
  //   meta:{
  //       requiresAuth:true
  //     },
  //     default: () => import('../views/MainView.vue'),
  // },

  {
    path: '/demo',
    name: 'demo',
    component: DemoView,
    meta: {
      requiresAuth: true
    }
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const userData = localStorage.getItem('userData')
  const requiresAuth = to.meta.requiresAuth
  if (!userData && requiresAuth) {
    next({
      path: '/login',
      replace: true
    })
  } else if (userData && to.path === '/login') {
    next({ path: '/' })
  } else {
    next()
  }
})


export default router
