/*
 * @Author: qh
 * @Date: 2023-04-07 11:13:41
 * @LastEditors: qh
 * @LastEditTime: 2023-04-07 11:36:22
 * @Description: 请填写简介
 * 仅限内部使用
 */
import type {
  User,
  // CodeType,
  // UserInfo,
  // PatientList,
  // Patient,
} from "@/types/user";
import { request } from '@/utils/request'

// 密码登录
export const Login = (mobile: string, password: string) => {
  request<User>("/login/password", "POST", { mobile, password });
}
