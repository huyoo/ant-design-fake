/**
 * 前端拦截请求，返回mock数据
 * 这个拦截请求和node返回mock数据实现功能一致
 *
 * 区别在页面的请求是否发送出去，前端拦截不能在浏览器显示请求，而且app.js需要引入index.js文件；
 * node返回数据，需要再启动一个服务器，而且请求数据需要作代理
 *
 * create by huyoo ON 2019/1/29
 */

import Mock from "mockjs";
import tableApi from "./table"

for(let url in tableApi){
    Mock.mock(url, tableApi[url])
}

Mock.setup({timeout: 1000});