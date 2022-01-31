// ./src/router.js
import Vue from 'vue'
import Router from 'vue-router'
import NotFound from '../views/NotFound.vue'
import Home from '../views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/home/1'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '1',
          name: '1',
          component: () => import('../components/Form1.vue')
        },
        {
          path: '2',
          name: '2',
          component: () => import('../components/Form2.vue')
        },
        {
          path: '3',
          name: '3',
          component: () => import('../components/Form3.vue')
        }
      ]
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    }
  ]
})
