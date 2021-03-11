import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Map from '../views/Map.vue'
import MapDetail from '../views/MapDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/map/',
    name: 'City List',
    component: Map
  },
  {
    path: '/map/:id',
    name: 'City Detail',
    component: MapDetail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
