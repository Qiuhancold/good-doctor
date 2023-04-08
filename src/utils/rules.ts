/*
 * @Author: qh
 * @Date: 2023-04-08 17:04:02
 * @LastEditors: qh
 * @LastEditTime: 2023-04-08 17:04:05
 * @Description: 表单校验规则
 * 仅限内部使用
 */
// 表单校验
export const mobileRules = [
  { required: true, message: '请输入手机号' },
  { pattern: /^1[3-9]\d{9}$/, message: '手机号格式不正确' }
]

export const passwordRules = [
  { required: true, message: '请输入密码' },
  { pattern: /^\w{8,24}$/, message: '密码需8-24个字符' }
]
