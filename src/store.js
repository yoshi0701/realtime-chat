import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// crate state
const state = {

  currentUser: 'test'
}

//update state
const mutations = {
  SET_USER(state, user) {
    state.currentUser = user;
  }
}


//action

const actions = {
  setUser({ commit }, user)  {
    state.commit('SET_USER', user)
  }
}

//date

const getters = {
  currentUser: state => state.currentUser
}


//vuex store

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store
