# 项目待重构

项目已经两年未更新，使用到的框架技术落后主流版本太多，现考虑重构，暂定使用 ```typescript + react17 + mobx + antd4+ + less```为架构。搭建ing...


## 旧版本
```react(16.9) + react-router(5.0) + redux(4.0.1) + antd(3.23.1) + less + *```  [链接](https://github.com/huyoo/ant-pro-of-react/tree/v1)

## 关注点
- 使用 hooks 重构
- ~~代码检查和风格统一~~
- mobx
- 登入登出
- 用户权限
- ~~路由配置化，屏蔽菜单和 router 细节~~(需改进)
- 移动端展示效果
- 多语言、布局方式切换
- ~~组件迁移~~(由独立组件库实现，[链接](https://github.com/huyoo/huyoo-ui))
   1. 表格下拉选择-TableSelect 
   2. cron配置器-CronBuilder
   3. 可拖拽弹窗-DragModal
   4. 带请求的选择-SelectWithService
   5. 带请求的树形选择-TreeSelectWithService
   6. 表格穿梭-TableTransfer
   7. 加载动画组件-Loading
