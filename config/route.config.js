
module.exports = [
  {
    path: '/',
    redirect: '/dashboard/analysis'
  }, {
    name: '登录',
    path: '/login',
    component: './pages/Login',
  },{
    path: '/',
    component: './layouts/BasicLayout',
    routes: [
      {
        name: 'Dashboard',
        icon: "dashboard",
        path: '/dashboard',
        routes: [
          {
            path: "/dashboard/analysis",
            component: './pages/dashboard/analysis',
            name: "分析页",
          },
        ]
      },
      {
        name: '异常页',
        icon: "warning",
        path: '/exception',
        routes: [
          {
            path: "/exception/403",
            component: './pages/exception/Exception403',
            name: "403",
          },
          {
            path: "/exception/404",
            component: './pages/exception/Exception404',
            name: "404",
          },
          {
            path: "/exception/500",
            component: './pages/exception/Exception500',
            name: "500",
          },
        ]
      }
    ]
  },
]
