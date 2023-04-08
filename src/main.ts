/*
 * @Author: qh
 * @Date: 2023-03-31 11:28:06
 * @LastEditors: qh
 * @LastEditTime: 2023-04-07 09:31:34
 * @Description: 入口文件
 */
import { createApp } from 'vue'
import App from './App.vue'
import pinia from './stores'

import router from './router'

// 样式全局使用
import 'vant/lib/index.css'
import './styles/main.scss'
import './style.css'

const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount('#app')
