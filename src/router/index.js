import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Photos from '../views/Photos.vue'
import Artwork from '../views/Artwork.vue'
import About from '../views/About.vue'
import Experience from '../views/Experience.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
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
  },
  {
    path: '/experience',
    name: 'experience',
    component: Experience
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
