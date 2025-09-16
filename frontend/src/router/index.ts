import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/pages/HomePage.vue'
import Courses from '../components/pages/Courses.vue'
import ExercisesPage from '../components/pages/ExercisesPage.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/courses',
    name: 'Courses',
    component: Courses
  },
  {
    path: '/exercises',
    name: 'Exercises',
    component: ExercisesPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
