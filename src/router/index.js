import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                  如果设置 `hidden:true` 将不会显示在侧栏中(默认为false)
* alwaysShow: true              如果设置为true，将始终显示根菜单，无论它的子路由长度
*                               如果不设置alwaysShow，只能有一条以上的路线下的孩子,
*                               它将成为嵌套模式，否则不显示根菜单
* redirect: noredirect          如果设置 `redirect:noredirect` 将不会在面包屑中重定向
* name:'router-name'            设置name用于组件保持 <keep-alive> (必须设置！！！)
* meta : {
    title: 'title'              在子菜单和面包屑中显示名称(推荐设置)
    icon: 'svg-name'            图标显示在侧栏中
    breadcrumb: false           如果 false, 该路由页面将隐藏在breadcrumb(默认true)
  }
**/

// 所有权限通用路由表
// 如首页和登录页文档页和一些不用权限的公用页面
export const constantRoutes = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  // 首页控制台
  {
    path: '/',
    component: Layout,
    redirect: 'dashboard',
    hidden: true,
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard'
        // meta: { title: '控制台', icon: 'dashboard', noCache: true, affix: true }
      }
    ]
  },
  // 标的管理
  // {
  //   path: '/targetList',
  //   redirect: '/targetList/target',
  //   // alwaysShow: true, // will always show the root menu
  //   name: 'TargetList',
  //   meta: {
  //     // title: '标的管理',
  //     icon: 'form'
  //   },
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'target',
  //       name: 'Target',
  //       component: () => import('@/views/target/index'),
  //       meta: { title: '标的列表', icon: 'link' }
  //     }
  //   ]
  // },
  // 主播管理
  // {
  //   path: '/playerList',
  //   component: Layout,
  //   redirect: '/playerList/player',
  //   // alwaysShow: true, // will always show the root menu
  //   name: 'PlayerList',
  //   meta: {
  //     //  title: '主播管理',
  //     icon: 'user'
  //   },
  //   children: [
  //     {
  //       path: 'player',
  //       name: 'Player',
  //       component: () => import('@/views/player/index'),
  //       meta: { title: '主播列表', icon: 'table' }
  //     }
  //   ]
  // },
  // 收益管理
  // {
  //   path: '/earningsList',
  //   component: Layout,
  //   redirect: '/earningsList/earnings',
  //   // alwaysShow: true, // will always show the root menu
  //   name: 'EarningsList',
  //   meta: {
  //     // title: '收益管理',
  //     icon: 'example',
  //     roles: ['admin', 'editor'] // you can set roles in root nav
  //   },
  //   children: [
  //     {
  //       path: 'earnings',
  //       name: 'Earnings',
  //       component: () => import('@/views/earnings/index'),
  //       meta: { title: '收益列表', icon: 'link' }
  //     }
  //   ]
  // },
  // 系统设置
  // {
  //   path: '/system',
  //   component: Layout,
  //   redirect: '/system/index',
  //   alwaysShow: true, // will always show the root menu
  //   meta: {
  //     title: '系统设置',
  //     icon: 'tab',
  //     roles: ['admin', 'editor'] // you can set roles in root nav
  //   },
  //   children: [
  //     {
  //       path: 'menu',
  //       component: () => import('@/views/system/menu'),
  //       name: 'Menu',
  //       meta: {
  //         title: '菜单管理',
  //         roles: ['admin'] // or you can only set roles in sub nav
  //       }
  //     },
  //     {
  //       path: 'permission',
  //       component: () => import('@/views/system/permission'),
  //       name: 'Permission',
  //       meta: {
  //         title: '权限管理',
  //         roles: ['admin']
  //         // if do not set roles, means: this page does not require permission
  //       }
  //     },
  //     {
  //       path: 'role',
  //       component: () => import('@/views/system/role'),
  //       name: 'Role',
  //       meta: {
  //         title: '角色管理',
  //         roles: ['admin']
  //       }
  //     },
  //     {
  //       path: 'customer',
  //       component: () => import('@/views/system/customer'),
  //       name: 'Customer',
  //       meta: {
  //         title: '商户管理'
  //         // if do not set roles, means: this page does not require permission
  //       }
  //     }
  //   ]
  // },
  // 权限测试页面
  // {
  //   path: '/permissionTest',
  //   component: Layout,
  //   redirect: '/permissionTest/index',
  //   alwaysShow: true, // will always show the root menu
  //   meta: {
  //     title: '权限测试页面',
  //     icon: 'lock',
  //     roles: ['admin', 'editor'] // you can set roles in root nav
  //   },
  //   children: [
  //     {
  //       path: 'atest',
  //       component: () => import('@/views/permissionTest/TestA'),
  //       name: 'TestA',
  //       meta: {
  //         title: '测试页面A',
  //         roles: ['admin'] // or you can only set roles in sub nav
  //       }
  //     },
  //     {
  //       path: 'btest',
  //       component: () => import('@/views/permissionTest/TestB'),
  //       name: 'TestB',
  //       meta: {
  //         title: '测试页面B'
  //         // roles: ['admin']
  //         // if do not set roles, means: this page does not require permission
  //       }
  //     },
  //     {
  //       path: 'ctest',
  //       component: () => import('@/views/permissionTest/TestC'),
  //       name: 'TestC',
  //       meta: {
  //         title: '测试页面C',
  //         roles: ['admin']
  //       }
  //     }
  //   ]
  // },
  // 合作伙伴
  {
    path: '/partners',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Partners',
        component: () => import('@/views/partners/index'),
        meta: { title: '合作伙伴', icon: 'peoples' }
      }
    ]
  },
  // 参考文档
  {
    path: '/documentation',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/documentation/index'),
        name: 'Documentation',
        meta: { title: '参考文档', icon: 'documentation', affix: true }
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
// 异步挂载的路由
// 动态需要根据权限加载的路由表
export const asyncRoutes = [
  // 标的管理
  {
    path: '/targetList',
    redirect: '/targetList/target',
    // alwaysShow: true, // will always show the root menu
    name: 'TargetList',
    meta: {
      // title: '标的管理',
      icon: 'form'
    },
    component: Layout,
    children: [
      {
        path: 'target',
        name: 'Target',
        component: () => import('@/views/target/index'),
        meta: { title: '标的列表', icon: 'link' }
      }
    ]
  },
  // 主播管理
  {
    path: '/playerList',
    component: Layout,
    redirect: '/playerList/player',
    // alwaysShow: true, // will always show the root menu
    name: 'PlayerList',
    meta: {
      //  title: '主播管理',
      icon: 'user'
    },
    children: [
      {
        path: 'player',
        name: 'Player',
        component: () => import('@/views/player/index'),
        meta: { title: '主播列表', icon: 'table' }
      }
    ]
  },
  // 收益管理
  {
    path: '/earningsList',
    component: Layout,
    redirect: '/earningsList/earnings',
    // alwaysShow: true, // will always show the root menu
    name: 'EarningsList',
    meta: {
      // title: '收益管理',
      icon: 'example',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'earnings',
        name: 'Earnings',
        component: () => import('@/views/earnings/index'),
        meta: { title: '收益列表', icon: 'link' }
      }
    ]
  },
  // 系统设置
  {
    path: '/system',
    component: Layout,
    redirect: '/system/index',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: '系统设置',
      icon: 'tab',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'menu',
        component: () => import('@/views/system/menu'),
        name: 'Menu',
        meta: {
          title: '菜单管理',
          roles: ['admin', 'editor'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'permission',
        component: () => import('@/views/system/permission'),
        name: 'Permission',
        meta: {
          title: '权限管理',
          roles: ['admin', 'editor']
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'role',
        component: () => import('@/views/system/role'),
        name: 'Role',
        meta: {
          title: '角色管理',
          roles: ['admin', 'editor']
        }
      },
      {
        path: 'customer',
        component: () => import('@/views/system/customer'),
        name: 'Customer',
        meta: {
          title: '商户管理',
          roles: ['admin']
          // if do not set roles, means: this page does not require permission
        }
      }
    ]
  },
  // 权限测试页面
  {
    path: '/permissionTest',
    component: Layout,
    redirect: '/permissionTest/index',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: '权限测试页面',
      icon: 'lock',
      roles: ['editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'atest',
        component: () => import('@/views/permissionTest/TestA'),
        name: 'TestA',
        meta: {
          title: '测试页面A',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'btest',
        component: () => import('@/views/permissionTest/TestB'),
        name: 'TestB',
        meta: {
          title: '测试页面B',
          roles: ['admin']
          // if do not set roles, means: this page does not require permission
        }
      },
      {
        path: 'ctest',
        component: () => import('@/views/permissionTest/TestC'),
        name: 'TestC',
        meta: {
          title: '测试页面C',
          roles: ['admin']
        }
      }
    ]
  }
  // // 合作伙伴
  // {
  //   path: '/partners',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Partners',
  //       component: () => import('@/views/partners/index'),
  //       meta: { title: '合作伙伴', icon: 'peoples' }
  //     }
  //   ]
  // },
  // { path: '*', redirect: '/404', hidden: true }
]
