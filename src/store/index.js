import Vue from 'vue'
import Vuex from 'vuex'
import userAuthStore from './modules/userAuthStore'
import messageStore from './modules/messageStore'
import contactStore from './modules/contactStore'
Vue.use(Vuex)

const modules = {
  userAuthStore,
  messageStore,
  contactStore

}

const store = new Vuex.Store({
  modules
})

export default store 