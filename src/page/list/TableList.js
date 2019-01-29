import React from "react"
import {Table, Breadcrumb, message} from "antd"
import BasicLayout from "../../layout/BasicLayout"
import "./TableList.css"
import axios from "axios";

const columns = [
    {
        title: "序号",
        key: "key",
        dataIndex: "key",
        width: '20%'
    }, {
        title: "姓名",
        key: "name",
        dataIndex: "name",
        width: '20%'
    }, {
        title: "年龄",
        key: "age",
        dataIndex: "age",
        width: '20%'
    },{
        title: "地址",
        key: "address",
        dataIndex: 'address'
    }];

export default class TableList extends React.Component{
    constructor(){
        super();
        this.state = {
            selectedRowKeys: [],
            onChange: this.OnChange,
            type: "checkbox",
            data: [],
            loading: true
        }
    };

    componentDidMount(){
        this.getList();
    }
    getList = () => {
        axios.post("/api/list-page")
            .then(re => re.data)
            .then(re => {
                this.setState({
                    data: re.data,
                    loading: false
                })
            })
            .catch(re => { message.error("获取数据异常") })
    };

    OnChange = (selectedRowKeys, selectedRows) => {
        this.setState({
            selectedRowKeys
        })
    };

    render(){
        const {data, loading} = this.state;
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
                    <Table rowKey={ record => record.key}
                           loading={loading}
                           dataSource={data}
                           columns={columns} />
                </div>
            </BasicLayout>
        )
    }
}