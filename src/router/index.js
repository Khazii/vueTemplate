import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import YourView from '../views/YourView.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/yourview',
    name: 'yourview',
    component: YourView
  },
]

const router = new VueRouter({
  routes
})

export default router