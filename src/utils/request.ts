/*
 * @Author: qh
 * @Date: 2023-04-07 09:46:02
 * @LastEditors: qh
 * @LastEditTime: 2023-04-07 16:04:57
 * @Description: token请求头携带，错误响应处理，401错误处理
 */
import axios, { AxiosError, type Method } from 'axios'
import { useUserStore } from '@/stores'
import router from '@/router'
import { showToast } from 'vant'
import { Data } from "@/types/request";

const baseURL: string = 'https://consult-api.itheima.net/'
// 1. 新axios实例，基础配置
const instance = axios.create(
  {
    // TODO 1. 基础地址，超时时间
    baseURL,
    timeout: 10000
  }
)

// 2. 请求拦截器，携带token
instance.interceptors.request.use(
  config => {
    // TODO 2. 携带token
    const store = useUserStore()
    if (store.user?.token && config.headers) {
      config.headers['Authorization'] = `Bearer ${store.user?.token}`
    }
    return config;
  }, error => {
    // 请求错误处理
    return Promise.reject(error);
  }
);

// 3. 响应拦截器，剥离无效数据，401拦截
axios.interceptors.response.use(
  res => {
    // TODO 3. 处理业务失败
    // TODO 4. 摘取核心响应数据
    // 后台约定，响应成功，但是code不是10000，是业务逻辑失败
    if (res.data?.code !== 10000) {
      showToast(res.data?.message || '业务失败')
      return Promise.reject(res.data)
    }
    // 业务逻辑成功，返回响应数据，作为axios成功的结果
    return res.data
  },
  err => {
    // TODO 5. 处理401错误
    if (err.response.status === 401) {
      // 删除用户信息
      const store = useUserStore()
      store.delUser()
      // 跳转登录，带上接口失效所在页面的地址，登录完成后回跳使用
      router.push({
        path: '/login',
        query: { returnUrl: router.currentRoute.value.fullPath }
      })
    }
    return Promise.reject(err)
  }
)


// type Data<T> = {
//   code: number
//   message: string
//   data: T
// }

// 4. 请求工具函数
const request = <T> (url: string, method: Method = 'GET', submitData?: object) => {
  return instance.request<T, Data<T>>({
    url,
    method,
    [method.toUpperCase() === 'GET' ? 'params' : 'data']: submitData
  })
}

export { baseURL, instance, request }
