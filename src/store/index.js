import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search:"",
    login:false,
  },
  getters: {
    
  },
  mutations: {
    setProduct(state, product){
      state.product = product;
    },
    setCari(state,search){
      state.search = search;
    },
    // ini untuk login
    setLogin(state,login){
      state.login = login;
    },
  },
  actions: {
  },
  modules: {
  }
})

