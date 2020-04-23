import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in subMenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },

  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: '示例', icon: 'example' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: '表格', icon: 'table' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: '树图', icon: 'tree' }
  //     }
  //   ]
  // },
  {
    path: '/target',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Target',
        component: () => import('@/views/target/index'),
        meta: { title: '标的列表', icon: 'link' }
      }
    ]
  },
  {
    path: '/player',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Player',
        component: () => import('@/views/player/index'),
        meta: { title: '主播列表', icon: 'table' }
      }
    ]
  },
  {
    path: '/earnings',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Earnings',
        component: () => import('@/views/earnings/index'),
        meta: { title: '收益列表', icon: 'link' }
      }
    ]
  },
  {
    path: '/system',
    component: Layout,
    redirect: '/system/menu',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: '系统设置',
      icon: 'example',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'menu',
        component: () => import('@/views/menu/index'),
        name: 'Menu',
        meta: {
          title: '菜单管理',
          icon: 'tree',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'permission',
        component: () => import('@/views/permission/index'),
        name: 'Permission',
        meta: {
          title: '权限管理',
          icon: 'form'
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'role',
        component: () => import('@/views/role/index'),
        name: 'Role',
        meta: {
          title: '角色管理',
          icon: 'example',
          roles: ['admin']
        }
      },
      {
        path: 'customer',
        component: () => import('@/views/customer/index'),
        name: 'Customer',
        meta: {
          title: '商户管理',
          icon: 'tree',
          roles: ['admin']
        }
      }
    ]
  },
  {
    path: '/partners',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Partners',
        component: () => import('@/views/partners/index'),
        meta: { title: '合作伙伴', icon: 'tree' }
      }
    ]
  },
  // {
  //   path: '/form',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Form',
  //       component: () => import('@/views/form/index'),
  //       meta: { title: '测试功能页面', icon: 'tree' }
  //     }
  //   ]
  // },
  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       // path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       path: 'https://www.baidu.com',
  //       meta: { title: '外部链接', icon: 'link' }
  //     }
  //   ]
  // },

  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: '示例', icon: 'example' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: '表格', icon: 'table' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: '树图', icon: 'tree' }
  //     }
  //   ]
  // },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
