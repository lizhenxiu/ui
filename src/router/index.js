import Vue from 'vue'
import Router from 'vue-router'
import VueClipboard from 'vue-clipboard2'
Vue.use(Router)
Vue.use(VueClipboard)
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
    path: '/components/projects',
    component: () => import('@/components/projectCompage/index'),
    children: [
      {
        path: '',
        component: () => import('@/pages/a')
      }]
  },
  {
    path: '/components/comPage',
    component: () => import('@/components/comPage/index'),
    children: [
      {
        path: '',
        component: () => import('@/pages/a')
      },
      {
        path: 'a',
        component: () => import('@/pages/a')
      },
      {
        path: 'font',
        component: () => import('@/pages/font')
      },
      {
        path: 'icon',
        component: () => import('@/pages/icon')
      },
      {
        path: 'radio',
        component: () => import('@/pages/radio')
      },
      {
        path: 'checkbox',
        component: () => import('@/pages/checkbox')
      },
      {
        path: 'select',
        component: () => import('@/pages/select')
      },
      {
        path: 'switch',
        component: () => import('@/pages/switch')
      },
      {
        path: 'input',
        component: () => import('@/pages/input')
      },
      {
        path: 'upload',
        component: () => import('@/pages/upload')
      },
      {
        path: 'transfer',
        component: () => import('@/pages/transfer')
      },
      {
        path: 'table',
        component: () => import('@/pages/table')
      },
      {
        path: 'sprites',
        component: () => import('@/pages/sprites')
      },
      {
        path: 'form',
        component: () => import('@/pages/form')
      },
      {
        path: 'datatimepicker',
        component: () => import('@/pages/datatimepicker')
      }
    ]
  },
  {
    path: '/components/projects/index',
    component: () => import('@/projects1/rongshuWallet/v1.0/index')
  },
  {
    path: '/components/projects/rujinjilu',
    component: () => import('@/projects1/rongshuWallet/v1.0/rujinjilu')
  },
  {
    path: '/components/projects/details1',
    component: () => import('@/projects1/rongshuWallet/v1.0/details1')
  }
]
const router = new Router({
  routes: routes,
  linkActiveClass: 'active',
  history: true
})

export default router
