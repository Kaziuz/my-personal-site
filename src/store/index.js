// welcome_page
// posts

import { createStore } from 'vuex'

export default createStore({
  state: {
    pages: [],
    posts: []
  },
  getters: {
    pages: state => {
      return state.pages
    },
    posts: state => {
      return state.posts
    }
  },
  mutations: {
    pages (state, pages) {
      state.pages = pages
    },
    posts  (state, posts) {
      state.posts = posts
    }
  },
  actions: {
    setPages ({ commit }, value) {
      commit('pages', value)
    },
    setPosts ({ commit }, value) {
      commit('posts', value)
    }
  }
})