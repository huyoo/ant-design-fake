import React, {Fragment} from "react"
import {Breadcrumb, message, Table} from "antd"
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
	}, {
		title: "地址",
		key: "address",
		dataIndex: 'address'
	}];

const tableList = {
	margin: '20px 20px',
	padding: '30px 0',
	backgroundColor: 'white'
};

export default class TableList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedRowKeys: [],
			onChange: this.OnChange,
			type: "checkbox",
			data: [],
			loading: true
		}
	};

	componentDidMount() {
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
			.catch(() => {
				message.error("获取数据异常")
			})
	};

	OnChange = (selectedRowKeys) => {
		this.setState({
			selectedRowKeys
		})
	};

	render() {
		const {data, loading} = this.state;
		return (
			<Fragment>
				<div className="head">
					<Breadcrumb>
						<Breadcrumb.Item href="/home">首页</Breadcrumb.Item>
						<Breadcrumb.Item>列表页</Breadcrumb.Item>
						<Breadcrumb.Item>查询表格</Breadcrumb.Item>
					</Breadcrumb>
					<div className="title">查询表格</div>
				</div>
				<div style={tableList}>
					<Table rowKey={record => record.key}
					       loading={loading}
					       dataSource={data}
					       columns={columns}/>
				</div>
			</Fragment>
		)
	}
}