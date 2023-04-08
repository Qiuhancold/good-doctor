/*
 * @Author: qh
 * @Date: 2023-04-06 16:53:20
 * @LastEditors: qh
 * @LastEditTime: 2023-04-06 17:10:10
 * @Description: 请填写简介
 * 仅限内部使用
 */
import type { User } from '@/types/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('cp-user',
  () => {
    // 用户信息
    const user = ref<User>()
    // 设置用户，登录后使用
    const setUser = (u: User) => {
      user.value = u
    }
    // 清空用户，退出后使用
    const delUser = () => {
      user.value = undefined
    }
    return { user, setUser, delUser }
  },
  {
    persist: true//持久化
  }
)
