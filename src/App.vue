<!--
 * @Author: qh
 * @Date: 2023-03-31 11:28:06
 * @LastEditors: qh
 * @LastEditTime: 2023-04-08 16:29:45
 * @Description: 根组件
-->
<script setup lang="ts">
  import { request } from '@/utils/request'
  import type { User } from './types/user'
  import { Button as VanButton } from 'vant'
  import { useUserStore } from './stores'

  // 测试，请求拦截器，是否携带token，响应拦截器401拦截到登录地址
  const getUserInfo = async () => {
    const res = await request('/patient/myUser')
    console.log(res)
  }

  // 测试，响应拦截器，出现非10000的情况，和返回剥离后的数据
  const store = useUserStore()
  const login = async () => {
    const res = await request<User>('/login/password', 'POST', {
      mobile: '13211112222',
      // 密码 abc123456 测试：出现非10000的情况
      password: 'abc123456',
    })
    store.setUser(res.data)
  }
</script>

<template>
  <router-view></router-view>
</template>

<style>
  #app {
    width: 375px;
  }
</style>
