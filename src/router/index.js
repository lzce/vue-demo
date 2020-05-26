import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    children: [
      {
        path: 'demo',
        name: 'Demo',
        component: () => import('../views/Demo1.vue')
      }
    ]
  },
  {
    path: '/demo2',
    component: () => import('../views/Demo2.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
