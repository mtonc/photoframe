import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  signedIn: false,
  accessToken: null
}

const mutations = {
  GET_TOKEN (state, token) {
    state.accessToken = token
  },
  SIGN_IN (state) {
    state.signedIn = true
  }
}

const getters = {
  theToken: state => {
    return state.accessToken
  },
  signedIn: state => {
    return state.signedIn
  }
}

var store = new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters
})

export default store