import Vue from 'vue'
import Router from 'vue-router'
import CreateArticle from '../views/paperMannager/CreateArticle.vue'
import ListArticle from '../views/paperMannager/ArticleList.vue'
import EditArticle from '../views/paperMannager/EditArticle.vue'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '主页', icon: 'page' }
    }]
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: '地图', icon: 'earth' },
    children: [
      {
        path: 'tianditu',
        name: 'Tianditu',
        component: () => import('@/views/tianditu/index'),
        meta: { title: '天地图', icon: 'm1' }
      },
      {
        path: 'equipment',
        name: 'Equipment',
        component: () => import('@/views/tianditu/cam'),
        meta: { title: '设备', icon: 'm1' }
      },
      {
        path: 'supermap',
        name: 'Supermap',
        component: () => import('@/views/supermap/index'),
        meta: { title: '摄像头', icon: 'm22' }
      },
      {
        path: 'gridMap',
        name: 'GridMap',
        component: () => import('@/views/gridMap/index'),
        meta: { title: 'OSM地图', icon: 'm3' }
      }
    ]
  },
  {
    path: '/function',
    component: Layout,
    redirect: '/function/draw',
    name: 'Function',
    meta: { title: '绘制与量算', icon: 'tools' },
    children: [
      {
        path: 'draw',
        name: 'Draw',
        component: () => import('@/views/draw/index'),
        meta: { title: '绘制', icon: 'draw' }
      },
      {
        path: 'measure',
        name: 'Measure',
        component: () => import('@/views/measure/index'),
        meta: { title: '量算', icon: 'measure1' }
      }
    ]
  },
  // {
  //   path: '/articles',
  //   component: Layout,
  //   redirect: '/articles/index',
  //   name: 'MyArtic',
  //   meta: { title: '文章管理', icon: 'paper' },
  //   children: [
  //     {
  //       path: '/articles/index',
  //       name: 'index',
  //       component: ListArticle,
  //       meta: { title: '文章列表', icon: 'arcticTab' }
  //     },
  //     {
  //       path: '/articles/create',
  //       name: 'create',
  //       component: CreateArticle,
  //       meta: { title: '添加文章', icon: 'addArctic' }
  //     },
  //     {
  //       path: '/articles/edit/:id',
  //       name: 'edit',
  //       component: EditArticle
  //     }
  //   ]
  // },

  // {
  //   path: '/uploadimg',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/uploadimg/upimg'),
  //       name: 'Uploadimg',
  //       meta: { title: '图像处理', icon: 'bigscreen', affix: true }
  //     }
  //   ]
  // },

  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: { title: 'Profile', icon: 'user', noCache: true }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
