import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const routes = [
  {
    path: '/',
    component: () => import('@/components/indexPage/index')
  },
  {
    path: '/components/indexPage',
    redirect: '/'
  },
  {
    path: '/components/comPage',
    component: () => import('@/components/comPage/index'),
    children: [
      {
        path: 'a',
        component: () => import('@/pages/a')
      },
      {
        path: 'b',
        component: () => import('@/pages/b')
      },
      {
        path: 'c',
        component: () => import('@/pages/c')
      }
    ]
  }
]
const router = new Router({
  routes: routes,
  linkActiveClass: 'active',
  history: true
})
export default router
