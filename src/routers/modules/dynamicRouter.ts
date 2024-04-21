// 动态路由
export const asnycRoutes = [
  {
    path: "/user",
    name: "user",
    redirect: "/user/center",
    meta: {
      icon: "Odometer",
      title: "用户中心"
    },
    children: [
      {
        path: "/user/center",
        name: "dcenter",
        component: () => import("@/views/user/center/index.vue"),
        meta: {
          icon: "Menu",
          title: "用户主页",
          roles: ["admin", "editor"]
        }
      },
      {
        path: "/user/setting",
        name: "setting",
        component: () => import("@/views/user/setting/index.vue"),
        meta: {
          icon: "Menu",
          title: "用户设置",
          roles: ["admin", "editor"]
        }
      }
    ]
  }
];
