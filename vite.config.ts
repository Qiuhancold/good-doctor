/*
 * @Author: qh
 * @Date: 2023-03-31 11:28:06
 * @LastEditors: qh
 * @LastEditTime: 2023-04-08 15:31:06
 * @Description: 请填写简介
 * 仅限内部使用
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";//install --save-dev @types/node  npm i @types/node --D
// 将 px 转换为 vw
import postcsspxtoviewport from "postcss-px-to-viewport"

import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // 解析单文件组件的插件
    vue(),
    // 自动导入的插件，解析器可以是 vant element and-vue 默认 src/compoenents 自动导入注册
    Components({
      dts: false,
      // 原因：Toast Confirm 这类组件的样式还是需要单独引入，样式全局引入了，关闭自动引入
      resolvers: [VantResolver({ importStyle: false })]
    })
  ],
  // 配置根路径
  resolve: {
    // ↓路径别名，主要是这部分
    alias: {
      "@": path.resolve(__dirname, "src"),
    }
  },
  css: {
    postcss: {
      plugins: [
        postcsspxtoviewport({
          unitToConvert: 'px', // 要转化的单位
          // 设备宽度375计算vw的值
          viewportWidth: 375, // UI设计稿的宽度，一般写 320 750 375
          // 下面的不常用，上面的常用
          unitPrecision: 6, // 转换后的精度，即小数点位数
          propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
          viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
          fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
          selectorBlackList: ['ignore-'], // 指定不转换为视窗单位的类名，
          minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
          mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
          replace: true, // 是否转换后直接更换属性值
          landscape: false // 是否处理横屏情况
        })
      ]
    }
  },
  // base:'/'
})
