/*
 * @Author: qh
 * @Date: 2023-04-08 10:25:10
 * @LastEditors: qh
 * @LastEditTime: 2023-04-08 11:08:25
 * @Description: 导航守卫
 * 仅限内部使用
 */
import routers from "@/router";
import { useUserStore } from '@/stores'
const router = routers
const store = useUserStore()
//登录白名单
const whiteList = ["/login", "/register"];
// 全局前置守卫
router.beforeEach(async (to, from,next) => {

  if (store.user?.token) {
    // 有token


  } else {
    // 没有token将用户重定向到登录页面
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录白名单，直接进入
      next()
    } else {
      return { path: `/login?redirect=${to.fullPath}` }// 否则全部重定向到登录页
    }

  }
})
// 路由后置守卫
router.afterEach(() => {
  // NProgress.done();
});
