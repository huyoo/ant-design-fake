/**
 * node创建请求服务器,响应页面请求
 * create by huyoo ON 2019/1/28
 */

const http = require("http"),
    Mock = require("mockjs"),
    _map = require("./interfaceMap"),
    _filter = require("./interfaceFilter");

http.createServer((req, res) => {
    console.log('url=>', req.url);

    //创建会话报文
    res.writeHead(200, {
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': typeof(req.headers.origin) === "undefined" ? "*" : req.headers.origin,
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Credentials': true,
        'Cache-Control': 'no-cache,no-store', // clear cache
    });

    if (req.method === 'OPTIONS') {
        res.end(null)
    }
    if (req.method === 'POST') {
        let postData = '';
        req.addListener('data', dataBuffer => postData += dataBuffer);
        req.addListener('end', () => {

            //生成mock数据
            // postData = JSON.parse(postData);
            const originData = _map[req.url]
                ? Mock.mock(_map[req.url])
                : '';
            const data = typeof (_filter[req.url]) === 'function'
                ? _filter[req.url](originData, postData)
                : originData;

            setTimeout(() => {
                res.end(JSON.stringify(data))
            }, parseInt(((Math.random() - 0.5) + 1) * 500, 10)) // 随机数
        })
    }
}).listen(1111);//监听1111端口
console.log(`at port 1111`);