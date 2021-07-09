import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token_user: null
  },
  getters: {
    token_user: state => state.token_user,
    login_user: state => state.token_user !== null
  },
  mutations: {
    setToken: (state, data) => state.token_user = data
  },
  actions: {
    login(data){
      console.log(data)
    }
  },
})
