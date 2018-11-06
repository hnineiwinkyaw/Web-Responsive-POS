import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')

const Colors = () => import('@/views/theme/Colors')
const Typography = () => import('@/views/theme/Typography')
const Course = () => import('@/views/theme/course')

Vue.use(Router)
Vue.use(VueResource)

Vue.http.options.root = "http://localhost:8000";

export default new Router({
  mode: 'hash', // https://router.vuejs.org/api/#mode
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: DefaultContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'theme',
          redirect: '/theme/colors',
          name: 'theme',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'Students',
              name: 'Students',
              component: Colors
            },
            {
              path: 'Admin',
              name: 'Admin',
              component: Typography
            },
            {
              path: 'Course',
              name: 'Course',
              component: Course
            }
           
          ]
        }
        
      ]
    }
  ]
})
