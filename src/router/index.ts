/*
 * @Author: qh
 * @Date: 2023-04-04 11:33:39
 * @LastEditors: qh
 * @LastEditTime: 2023-04-08 15:42:08
 * @Description: 路由
 */
import { readonly } from "vue";
import { createRouter, createWebHistory } from "vue-router";

// createRouter 创建路由实例，===> new VueRouter()
// history 是路由模式，hash模式，history模式
// createWebHistory() 是开启history模块   http://xxx/user
// createWebHashHistory() 是开启hash模式    http://xxx/#/user

// vite 的配置 import.meta.env.BASE_URL 是路由的基准地址，默认是 ’/‘
// https://vitejs.dev/guide/build.html#public-base-path
// 如果将来你部署的域名路径是：http://xxx/my-path/user
// vite.config.ts  添加配置  base: my-path，路由这就会加上 my-path 前缀了

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),//import.meta.env.BASE_URL
  routes: [
    {
      path: '/login',//登录
      component: () => import('@/views/Login/index.vue'),
      children: [
        {
          path: '/callback',//QQ登录回跳
          component: () => import('@/views/Login/callback.vue')
        }
      ]
    },
    {
      path: '/register',//  注册
      component: () => import('@/views/Login/register.vue'),
    },
    {
      path: '/',
      component: () => import('@/views/Layout/index.vue'),
      redirect: '/home',//首页
      children: [
        {
          path: '/home',//首页
          component: () => import('@/views/Home/index.vue')
        },
        {
          path: '/article',//健康百科
          component: () => import('@/views/Article/index.vue')
        },
        {
          path: '/notify',//消息通知
          component: () => import('@/views/Notify/index.vue')
        },
        {
          path: '/user',//个人中心
          component: () => import('@/views/User/index.vue'),
          children: [
            {
              path: '/consult/:id',//我的问诊
              component: () => import('@/views/User/consult.vue')
            }
          ]
        }
      ]
    },
    {
      path: '/order/:id',//药品订单详情
      component: () => import('@/views/Order/index.vue'),
      children: [
        {
          path: '/pay',//药品订单支付
          component: () => import('@/views/Order/pay.vue')
        },
        {
          path: '/result',//药品订单支付结果
          component: () => import('@/views/Order/result.vue')
        },
        {
          path: '/logistics',//药品订单物流
          component: () => import('@/views/Order/logistics.vue')
        }
      ]
    },
    {
      path: '/room',//问诊室
      component: () => import('@/views/Room/index.vue'),

    },
    {
      path: '/consult',//问诊室
      component: () => import('@/views/Consult/dep.vue'),
      children: [
        {
          path: '/fast',//药品订单物流
          component: () => import('@/views/Consult/fast.vue')
        },
        {
          path: '/dep',//药品订单支付结果
          component: () => import('@/views/Consult/dep.vue')
        },
        {
          path: '/illness',//药品订单物流
          component: () => import('@/views/Consult/illness.vue')
        },
        {
          path: '/pay',//药品订单支付
          component: () => import('@/views/Consult/fast.vue')
        },
      ]
    },
  ],
})
