/*
 * @Author: qh
 * @Date: 2023-04-08 14:59:10
 * @LastEditors: qh
 * @LastEditTime: 2023-04-08 14:59:13
 * @Description: 给 cp-nav-bar 组件添加类型
 * 仅限内部使用
 */
import CpNavBar from '@/components/CpNavBar.vue'

declare module 'vue' {
  interface GlobalComponents {
    CpNavBar: typeof CpNavBar
  }
}
