import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/home/index.vue"
import Earn from '../components/earn/index.vue'
import Lend from '../components/lend/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
  return { x: 0, y: 0 }
  },
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home,
  },{
      path: "/earn",
      name: "earn",
      component: Earn
  },{
    path: "/lend",
    name: "lend",
    component: Lend
  },{
      path: "/",
      redirect: '/home'
  }
]
})
