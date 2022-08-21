module.exports = [
  {
    path: '/',
    redirect: '/dashboard/analysis'
  },
  {
    path: '/',
    component: './layouts/AuthorizedLayout',
    routes: [
      {
        name: '登录',
        path: '/login',
        component: './pages/Login',
        hideInMenu: true
      },
      {
      path: '/',
      component: './layouts/BasicLayout',
      routes: [
        {
          name: 'menu.dashboard',
          icon: "dashboard",
          path: '/dashboard',
          routes: [
            {
              path: "/dashboard/analysis",
              component: './pages/dashboard/analysis',
              name: "menu.dashboard.analysis",
              authority: ['admin'],
            },
          ]
        },
        {
          name: 'menu.exception',
          icon: "warning",
          path: '/exception',
          routes: [
            {
              path: "/exception/403",
              component: './pages/exception/Exception403',
              name: "menu.exception.not-permission",
            },
            {
              path: "/exception/404",
              component: './pages/exception/Exception404',
              name: "menu.exception.not-find",
            },
            {
              path: "/exception/500",
              component: './pages/exception/Exception500',
              name: "menu.exception.server-error",
            },
          ]
        }
      ]
    }],
  }
]
