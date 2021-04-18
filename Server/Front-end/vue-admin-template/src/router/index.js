import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
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
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },

  {
    path: '/student',
    component: Layout,
    redirect: '/student/table',
    name: 'Student info',
    meta: { title: 'Students', icon: 'student' },
    children: [
      {
        path: 'list',
        name: 'List',
        component: () => import('@/views/student/list'),
        meta: { title: 'View', icon: 'table' }
      },
      {
        path: 'add',
        name: 'Add',
        component: () => import('@/views/student/add'),
        meta: { title: 'Add', icon: 'tree' }
      },
      {
        path: 'search',
        name: 'Search',
        component: () => import('@/views/student/search'),
        meta: { title: 'Search', icon: 'search' }
      }
    ]
  },

  {
    path: '/teacher',
    component: Layout,
    redirect: '/teacher/table',
    name: 'Teacher info',
    meta: { title: 'Teachers', icon: 'teacher' },
    children: [
      {
          path: 'list',
          name: 'List',
          component: () => import('@/views/teacher/list'),
          meta: { title: 'View', icon: 'table' }
      },
      {
        path: 'add',
        name: 'Add',
        component: () => import('@/views/teacher/add'),
        meta: { title: 'Add', icon: 'tree' }
      },
      {
        path: 'search',
        name: 'Search',
        component: () => import('@/views/teacher/search'),
        meta: { title: 'Search', icon: 'search' }
      }
    ]
  },

  {
    path: '/class',
    component: Layout,
    redirect: '/class/table2',
    name: 'Example',
    meta: { title: 'Classes', icon: 'fly' },
    children: [
      {
        path: 'list',
        name: 'Table',
        component: () => import('@/views/clazz/list'),
        meta: { title: 'View', icon: 'table' }
      },
      {
        path: 'add',
        name: 'Tree',
        component: () => import('@/views/clazz/add'),
        meta: { title: 'Add', icon: 'tree' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    redirect: '/user/',
    name: 'Example',
    meta: { title: 'Profile', icon: 'user' },
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/user/update'),
        meta: { title: 'Change info', icon: 'tree' }
      },
      {
        path: 'add',
        name: 'Tree',
        component: () => import('@/views/user/updatePassword'),
        meta: { title: 'Change password', icon: 'tree' }
      }
    ]
  },
  //   {
  //     path: '/form',
  //     component: Layout,
  //     children: [
  //       {
  //         path: 'index',
  //         name: 'Form',
  //         component: () => import('@/views/form/index'),
  //         meta: { title: 'Form', icon: 'form' }
  //       }
  //     ]
  //   },

  //   {
  //     path: '/nested',
  //     component: Layout,
  //     redirect: '/nested/menu1',
  //     name: 'Nested',
  //     meta: {
  //       title: 'Nested',
  //       icon: 'nested'
  //     },
  //     children: [
  //       {
  //         path: 'menu1',
  //         component: () => import('@/views/nested/menu1/index'), // Parent   router-view
  //         name: 'Menu1',
  //         meta: { title: 'Menu1' },
  //         children: [
  //           {
  //             path: 'menu1-1',
  //             component: () => import('@/views/nested/menu1/menu1-1'),
  //             name: 'Menu1-1',
  //             meta: { title: 'Menu1-1' }
  //           },
  //           {
  //             path: 'menu1-2',
  //             component: () => import('@/views/nested/menu1/menu1-2'),
  //             name: 'Menu1-2',
  //             meta: { title: 'Menu1-2' },
  //             children: [
  //               {
  //                 path: 'menu1-2-1',
  //                 component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //                 name: 'Menu1-2-1',
  //                 meta: { title: 'Menu1-2-1' }
  //               },
  //               {
  //                 path: 'menu1-2-2',
  //                 component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //                 name: 'Menu1-2-2',
  //                 meta: { title: 'Menu1-2-2' }
  //               }
  //             ]
  //           },
  //           {
  //             path: 'menu1-3',
  //             component: () => import('@/views/nested/menu1/menu1-3'),
  //             name: 'Menu1-3',
  //             meta: { title: 'Menu1-3' }
  //           }
  //         ]
  //       },
  //       {
  //         path: 'menu2',
  //         component: () => import('@/views/nested/menu2/index'),
  //         name: 'Menu2',
  //         meta: { title: 'menu2' }
  //       }
  //     ]
  //   },

  //   {
  //     path: 'external-link',
  //     component: Layout,
  //     children: [
  //       {
  //         path: 'https://casio-3.github.io/',
  //         meta: { title: 'External Link', icon: 'link' }
  //       }
  //     ]
  //   },

  {
    path: '/test', // url路径
    component: Layout, // 此处不用动，这个全局统一的一个布局文件
    children: [
      {
        path: 'test', // 二级路径
        name: 'test',
        component: () => import('@/views/test/test'), // 懒加载，此处写所添加文件的路径
        meta: {
          title: 'Test', icon: 'example' // 配置选项可配置测试名称和图标
        }
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