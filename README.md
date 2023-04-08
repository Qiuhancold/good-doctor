# 优医问诊项目

1.项目初始化 项目启动 npm run dev ｜｜ yarn dev ｜｜ pnpm run dev 2.包管理详情见 package.json 3.组件库使用 vant.js
pinia-plugin-persistedstate 插件 实现对数据仓库 pinia 的初始化

### 路由映射

/login 1 登录
/ 1 布局容器
/user ② 个人中心
/user/patient 1 家庭档案
/home ② 首页
/consult/fast 1 快速问诊
/consult/dep 1 选择科室
/consult/illness 1 病情描述
/consult/pay 1 问诊支付
/room 1 问诊室
/user/consult 1 我的问诊
/user/consult/:id 1 问诊详情
/order/pay 1 药品订单支付
/order/pay/result 1 药品订单支付结果
/order/:id 1 药品订单详情
/order/logistics/:id 1 药品订单物流
/login/callback 1 QQ 登录回跳
/article ② 健康百科
/notify ② 消息通知

## 更新流程

目前 user index home 正常渲染
下一次更新预计：医生聊天 pina 的医生状态

> 目前无法获得幕客的设计图权限，百科和消息部分暂时搁置：更加注重功能开发
> 目前除了支付意外 官方的 api 接口都有问题：
> 订单无法找到物流
> 无法问诊
> 药品无法支付
> 高德地图 api 能用，暂时只能给出静态页面

官方接口文档地址：https://www.apifox.cn/apidoc/shared-16a58bff-e4db-465c-9c8b-859c839318ac/api-31781561

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
