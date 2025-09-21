import { createRouter, createWebHistory } from 'vue-router'
import SignPage from '../pages/SignPage.vue'
const routes = [
  {
    path: '/sign',
    name: 'SignPage',
    component: SignPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
