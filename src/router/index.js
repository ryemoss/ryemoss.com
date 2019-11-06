import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Photos from '../views/Photos.vue'
import Artwork from '../views/Artwork.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Photos
  },
  {
    path: '/photos',
    name: 'photos',
    component: Photos
  },
  {
    path: '/artwork',
    name: 'artwork',
    component: Artwork
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
