import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Portfolio from './pages/Portfolio.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router