/*
 * @Author: qh
 * @Date: 2023-04-07 15:02:10
 * @LastEditors: qh
 * @LastEditTime: 2023-04-07 15:38:14
 * @Description: 请填写简介
 * 仅限内部使用
 */
import { defineConfig } from 'orval';
export default defineConfig({
  petstore: {
    input: {
      target: 'https://petstore.swagger.io/v2/swagger.json',
    // 地址

    },
    output: {
      mode: 'split',
      target: './src/api/index.ts',//主文件
      schemas: './src/api/model',//改下生成的地址
    }


    , //输出目录
  },
});
