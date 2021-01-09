import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login'
import Signup from '../components/signup'
import Section from '../components/section'
import Dashboard from '../components/dashboard'
import Search from '../components/search'
import Ask from '../components/ask'
import Intern from '../components/Intern'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Section',
    component: Section
  },
  {
    path: '/section',
    name: 'Section',
    component: Section
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/ask',
    name: 'Ask',
    component: Ask
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },

  {
    path: '/intern',
    name: 'Intern',
    component: Intern
  }
  // {
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
