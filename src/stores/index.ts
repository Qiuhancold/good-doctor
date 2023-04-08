/*
 * @Author: qh
 * @Date: 2023-03-31 13:58:02
 * @LastEditors: qh
 * @LastEditTime: 2023-04-07 09:39:15
 * @Description: 仓库
 * 将main.js里面的代码封装在index.ts中
 */

import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'


// 创建pinia实例
const pinia = createPinia()
// 使用pinia插件
pinia.use(persist)
// 导出pinia实例，给main使用
export default pinia
// 统一导出，代码简洁，入口唯一
export * from './modules/user'
