// welcome_page
// posts

import { createStore } from 'vuex'

export default createStore({
  state: {
    pages: []
  },
  getters: {
    pages: state => {
      return state.pages
    } 
  },
  mutations: {
    pages (state, pages) {
      state.pages = pages
    }
  },
  actions: {
    setPages ({ commit }, value) {
      commit('pages', value)
    }
  }
})