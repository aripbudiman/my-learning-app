import { createRouter, createWebHistory } from 'vue-router'
import SignPage from '../pages/SignPage.vue'
import DashboardPage from '../pages/DashboardPage.vue'

const routes = [
  {
    path: '/sign',
    name: 'SignPage',
    component: SignPage
  },
  {
    path: '/',
    name: 'DashboardPage',
    component: DashboardPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
