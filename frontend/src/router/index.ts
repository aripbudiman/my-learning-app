import { createRouter, createWebHistory } from 'vue-router'
import SignPage from '../pages/SignPage.vue'
import DashboardPage from '../pages/DashboardPage.vue'
import AdminPanel from '../pages/AdminPanel.vue'

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
  },
  {
    path: '/admin-panel',
    name: 'AdminPanel',
    component: AdminPanel
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
