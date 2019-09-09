/**
 * 高度自计算Table-demo
 * create by hy ON 2019/7/15
 */
import React, {Fragment, PureComponent} from 'react';
import AutoHeightTable from "../../../component/AutoHeightTable";
import {Divider, Form, Icon, Radio, Switch} from 'antd';

const FormItem = Form.Item;

const columns = [
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
		width: 150,
		render: text => <a href="/#">{text}</a>,
	},
	{
		title: 'Age',
		dataIndex: 'age',
		key: 'age',
		width: 70,
	},
	{
		title: 'Address',
		dataIndex: 'address',
		key: 'address',
	},
	{
		title: 'Action',
		key: 'action',
		width: 360,
		render: (text, record) => (
			<span>
        <span>Action 一 {record.name}</span>
        <Divider type="vertical"/>
        <span>Delete</span>
        <Divider type="vertical"/>
        <span className="ant-dropdown-link">
          More actions <Icon type="down"/>
        </span>
      </span>
		),
	},
];

const data = [];
for (let i = 1; i <= 10; i++) {
	data.push({
		key: i,
		name: 'John Brown',
		age: `${i}2`,
		address: `New York No. ${i} Lake Park`,
		description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
	});
}

const expandedRowRender = record => <p>{record.description}</p>;
const title = () => 'Here is title';
const showHeader = true;
const footer = () => 'Here is footer';
const pagination = {position: 'bottom'};

export default class AutoTable extends PureComponent {
	state = {
		bordered: false,
		loading: false,
		pagination,
		size: 'default',
		expandedRowRender,
		title: undefined,
		showHeader,
		footer,
		rowSelection: {},
		hasData: true,
	};

	handleToggle = prop => enable => {
		this.setState({[prop]: enable});
	};

	handleSizeChange = e => {
		this.setState({size: e.target.value});
	};

	handleExpandChange = enable => {
		this.setState({expandedRowRender: enable ? expandedRowRender : undefined});
	};

	handleTitleChange = enable => {
		this.setState({title: enable ? title : undefined});
	};

	handleHeaderChange = enable => {
		this.setState({showHeader: enable ? showHeader : false});
	};

	handleFooterChange = enable => {
		this.setState({footer: enable ? footer : undefined});
	};

	handleRowSelectionChange = enable => {
		this.setState({rowSelection: enable ? {} : undefined});
	};

	handleDataChange = hasData => {
		this.setState({hasData});
	};

	handlePaginationChange = e => {
		const {value} = e.target;
		this.setState({
			pagination: value === 'none' ? false : {position: value},
		});
	};


	render() {
		const state = this.state;
		return <Fragment>
			<span>高度自计算表格-AutoHeightTable</span>
			<div style={{margin: 20}}>
				<Form layout="inline">
					<FormItem label="Bordered">
						<Switch checked={state.bordered} onChange={this.handleToggle('bordered')}/>
					</FormItem>
					<FormItem label="loading">
						<Switch checked={state.loading} onChange={this.handleToggle('loading')}/>
					</FormItem>
					<FormItem label="Title">
						<Switch checked={!!state.title} onChange={this.handleTitleChange}/>
					</FormItem>
					<FormItem label="Column Header">
						<Switch checked={!!state.showHeader} onChange={this.handleHeaderChange}/>
					</FormItem>
					<FormItem label="Footer">
						<Switch checked={!!state.footer} onChange={this.handleFooterChange}/>
					</FormItem>
					<FormItem label="Expandable">
						<Switch checked={!!state.expandedRowRender} onChange={this.handleExpandChange}/>
					</FormItem>
					<FormItem label="Checkbox">
						<Switch checked={!!state.rowSelection} onChange={this.handleRowSelectionChange}/>
					</FormItem>
					<FormItem label="Has Data">
						<Switch checked={!!state.hasData} onChange={this.handleDataChange}/>
					</FormItem>
					<FormItem label="Size">
						<Radio.Group size="default" value={state.size} onChange={this.handleSizeChange}>
							<Radio.Button value="default">Default</Radio.Button>
							<Radio.Button value="middle">Middle</Radio.Button>
							<Radio.Button value="small">Small</Radio.Button>
						</Radio.Group>
					</FormItem>
					<FormItem label="Pagination">
						<Radio.Group
							value={state.pagination ? state.pagination.position : 'none'}
							onChange={this.handlePaginationChange}
						>
							<Radio.Button value="top">Top</Radio.Button>
							<Radio.Button value="bottom">Bottom</Radio.Button>
							<Radio.Button value="both">Both</Radio.Button>
							<Radio.Button value="none">None</Radio.Button>
						</Radio.Group>
					</FormItem>
				</Form>
			</div>
			<div style={{margin: 20}}>
				<AutoHeightTable columns={columns}
				                 dataSource={state.hasData ? data : []}
				                 {...state}
				                 pagination={null}
				                 tableScrollY={100}/>
			</div>
		</Fragment>
	}
}