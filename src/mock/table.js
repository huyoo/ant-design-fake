/**
 * create by huyu_ ON 2019/1/24
 */
import Mock from "mockjs"

Mock.mock("/list-page", {
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
});

Mock.setup({timeout: 2000});