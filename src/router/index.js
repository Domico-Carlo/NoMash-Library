import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '@/views/LoginView.vue'
import { ref } from 'vue'
import AccessRestrictedView from '@/views/AccessRestrictedView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/accessdenied',
    name: 'AccessDenied',
    component: AccessRestrictedView
  }
]

const isAuthenticated = ref(false)

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to) => {
  if (to.name === 'About' && !isAuthenticated.value) {
    // redirect unauthenticated users to the login page
    return { name: 'AccessDenied' }
  }
  return true
})

export default router
export { isAuthenticated }