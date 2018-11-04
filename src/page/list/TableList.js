import React from "react"
import {Table, Breadcrumb} from "antd"
import "antd/dist/antd.css"
import BasicLayout from "../../layout/BasicLayout"
import "./TableList.css"

const dataSource = [
    {
        key: '1',
        name: '胡彦斌',
        age: 32,
        // address: '西湖区湖底公园1号'
    }, {
        key: '2',
        name: '胡彦祖',
        age: 42,
        // address: '西湖区湖底公园1号'
    }];


const columns = [
    {
        title: "姓名",
        key: "name",
        dataIndex: "name"
    }, {
        title: "年龄",
        key: "age",
        dataIndex: "age"
    }/*, {
        title: "序号",
        key: "key",
        dataIndex: "key"
    }*/
];

export default class TableList extends React.Component{
    constructor(){
        super();
        this.state = {
            selectedRowKeys: [],
            onChange: this.OnChange,
            type: "checkbox"
        }
    };

    OnChange = (selectedRowKeys, selectedRows) => {
        this.setState({
            selectedRowKeys
        })
    };

    render(){
        return (
            <BasicLayout>
                <div className="head">
                    <Breadcrumb>
                        <Breadcrumb.Item href="/home">首页</Breadcrumb.Item>
                        <Breadcrumb.Item>列表页</Breadcrumb.Item>
                        <Breadcrumb.Item>查询表格</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="title">查询表格</div>
                </div>

                <div className="table_list">
                    <Table rowKey={ record => {{/*console.log(record);*/} return record.key}} loading={false} dataSource={dataSource} columns={columns} />
                </div>
            </BasicLayout>
        )
    }
}