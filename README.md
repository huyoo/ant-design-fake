<h1 align="center">Ant Design Fake</h1>

使用 react 原生技术栈搭建的管理系统，仿照了 [ant-design-pro](https://pro.ant.design)， 这是 Antd Pro 的[预览地址](https://preview.pro.ant.design)。  

项目使用 Github Actions 自动打包，最终将部署到 Github Pages，这是部署后的[地址](https://huyoo.github.io/ant-design-fake).

## 项目重构中
重构升级中，摒弃 class 组件，全部使用 hooks 开发，技术栈如下:
```text
typescript
react18
mobx
antd4+
less
echarts
```

## 关注点
- 使用 hooks 重构（ing）
- ~~代码检查和风格统一~~
- ~~mobx~~
- ~~登入登出~~
- ~~用户权限~~
- ~~路由配置化，屏蔽菜单和 router 细节~~(需改进)
- 移动端展示效果
- ~~多语言~~
- 主题、布局方式切换
- mock 数据
- ~~组件迁移~~(由独立组件库实现，[链接](https://github.com/huyoo/huyoo-ui))
   1. 表格下拉选择-TableSelect 
   2. cron配置器-CronBuilder
   3. 可拖拽弹窗-DragModal
   4. 带请求的选择-SelectWithService
   5. 带请求的树形选择-TreeSelectWithService
   6. 表格穿梭-TableTransfer
   7. 加载动画组件-Loading

## v1版本
```react(16.9) + react-router(5.0) + redux(4.0.1) + antd(3.23.1) + less + *```  [链接](https://github.com/huyoo/ant-pro-of-react/tree/v1)
