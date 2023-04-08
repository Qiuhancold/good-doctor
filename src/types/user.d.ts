/*
 * @Author: qh
 * @Date: 2023-04-06 16:52:30
 * @LastEditors: qh
 * @LastEditTime: 2023-04-06 16:52:33
 * @Description: 用户状态仓库
 */
// 用户信息
export type User = {
  /** token令牌 */
  token: string
  /** 用户ID */
  id: string
  /** 用户名称 */
  account: string
  /** 手机号 */
  mobile: string
  /** 头像 */
  avatar: string
}
