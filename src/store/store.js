import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
// import VueJwtDecode from 'vue-jwt-decode'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],

  state: {
    examplevalue: null
  },
  mutations: {
    SET_EXAMPLE(state, example) {
      state.examplevalue = example
    }
  },
  actions: {
    setAlerts(context, example) {
      context.commit('SET_EXAMPLE', example)
    }
  },
  getters: {
    getExample: state => {
      return state.example
    }
  }
})