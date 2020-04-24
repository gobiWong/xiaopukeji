export const userInfo1 = {
  data: {
    id: 9527,
    rid: 0,
    username: 'admin',
    mobile: '12333323333',
    email: '543332860@qq.com',
    token: 'shijeiuijxi984jxijwqijxjw4ey21uhdoe32_wx.sehhfi_fanzhengzheshiyigexianjibabiandetoken'
  },
  rights: [{
    id: 123,
    authName: '标的管理',
    icon: 'icon-user',
    children: [{
      id: 110,
      authName: '标的列表',
      path: 'target',
      rights: ['view', 'edit', 'add', 'delete']
    }]

  },
  {
    id: 123,
    authName: '主播管理',
    icon: 'icon-user',
    children: [{
      id: 110,
      authName: '主播列表',
      path: 'player',
      rights: ['view', 'edit', 'add', 'delete']
    },
    {
      id: 110,
      authName: '主播分类',
      path: 'categories',
      rights: ['view', 'edit', 'add', 'delete']
    }]

  },
  {
    id: 123,
    authName: '收益管理',
    icon: 'icon-user',
    children: [{
      id: 110,
      authName: '收益列表',
      path: 'earnings',
      rights: ['view', 'edit', 'add', 'delete']
    }]

  },
  {
    id: 123,
    authName: '系统设置',
    icon: 'icon-user',
    children: [{
      id: 110,
      authName: '菜单管理',
      path: 'users',
      rights: ['view', 'edit', 'add', 'delete']
    },
    {
      id: 110,
      authName: '权限管理',
      path: 'users',
      rights: ['view', 'edit', 'add', 'delete']
    },
    {
      id: 110,
      authName: '角色管理',
      path: 'users',
      rights: ['view', 'edit', 'add', 'delete']
    },
    {
      id: 110,
      authName: '商户管理',
      path: 'users',
      rights: ['view', 'edit', 'add', 'delete']
    }]

  },
  {
    id: 123,
    authName: '合作伙伴',
    icon: 'icon-user',
    path: 'earnings',
    rights: ['view', 'edit', 'add', 'delete']
  }
  ],
  meta: {
    msg: '登录成功',
    status: 200
  }
}
