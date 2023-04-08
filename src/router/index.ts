/*
 * @Author: qh
 * @Date: 2023-04-04 11:33:39
 * @LastEditors: qh
 * @LastEditTime: 2023-04-07 17:12:13
 * @Description: 路由
 */
import { readonly } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import home from '@/views/home/index.vue'
import login from '@/views/login/index.vue'
import user from '@/views/user/index.vue'

const Home = home
const Login = login
const User = user

const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/login',
    component: Home
  },
  {
    path: '/user',
    component: Home
  },
]

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
  routes,
})
