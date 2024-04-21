import { createRouter, createWebHashHistory } from "vue-router";
import { staticRouter, errorRouter } from "@/routers/modules/staticRouter";
import NProgress from "@/config/nprogress";
const router = createRouter({
  // 路由模式——hash
  history: createWebHashHistory(),
  routes: [...staticRouter, ...errorRouter],
  // 滚动行为
  scrollBehaviour() {
    return {
      left: 0,
      height: 0
    };
  }
});

/**
 * @description 路由拦截 beforeEach
 * */
router.beforeEach((to, from, next) => {
  // 1.NProgress 开始
  NProgress.start();
  // 2.动态设置标题
  const title = import.meta.env.VITE_APP_TITLE;
  document.title = to.meta.title ? `${to.meta.title} - ${title}` : title;
  console.log(to);
  next();
});

/**
 * @description 路由跳转结束
 * */
router.afterEach(() => {
  NProgress.done();
});

export default router;
