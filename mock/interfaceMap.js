/**
 * 根据路由生成mock数据配置
 * create by huyoo ON 2019/1/28
 */
const path = '/api';

module.exports = {
    [`${path}/list-page`]: {
        data: [{
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号'
        }, {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号'
        }]
    }
};