import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '@/views/LoginView.vue'
import { ref } from 'vue'
import AccessRestrictedView from '@/views/AccessRestrictedView.vue'
import FirebaseSigninView from '@/views/FirebaseSigninView.vue'
import FirebaseRegisterView from '@/views/FirebaseRegisterView.vue'
import LogoutView from '@/views/LogoutView.vue'
import AddBookView from '@/views/AddBookView.vue'
import BookListView from '@/views/BookListView.vue'
import WeatherView from '@/views/WeatherView.vue'

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
  },
  {
    path: '/FireLogin',
    name: 'FireLogin',
    component: FirebaseSigninView
  },
  {
    path: '/FireRegister',
    name: 'FireRegister',
    component: FirebaseRegisterView
  },
  {
    path: '/FireLogout',
    name: 'FireLogout',
    component: LogoutView
  },
  {
    path: '/addbook',
    name: 'AddBook',
    component: AddBookView
  },
  {
    path: '/booklist',
    name: 'BookList',
    component: BookListView
  },
  {
    path: '/weather',
    name: 'Weather',
    component: WeatherView
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