import { RouteRecordRaw } from "vue-router";
import { HOME_URL, LOGIN_URL, REGISTER_URL } from "@/config";

/**
 * staticRouter (静态路由)
 */

export const staticRouter: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("@/layouts/index.vue"),
    name: "layout",
    meta: {
      title: ""
    },
    redirect: "/home",
    children: [
      {
        path: "/home",
        component: () => import("@/views/home/index.vue"),
        meta: {
          title: "首页"
        }
      }
    ]
  },
  {
    path: LOGIN_URL,
    name: "login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      title: "登录"
    }
  },
  {
    path: REGISTER_URL,
    name: "register",
    component: () => import("@/views/register/index.vue"),
    meta: {
      title: "注册"
    }
  }
];

/**
 * errorRouter (错误页面路由)
 */
export const errorRouter = [
  {
    path: "/403",
    name: "403",
    component: () => import("@/components/ErrorMessage/403.vue"),
    meta: {
      title: "403页面"
    }
  },
  {
    path: "/404",
    component: () => import("@/components/ErrorMessage/404.vue"),
    name: "404",
    meta: {
      title: "404"
    }
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    name: "any"
  }
];
