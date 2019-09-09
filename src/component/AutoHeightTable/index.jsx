/**
 * 高度自计算-Table
 * create by hy ON 2019/7/15
 */
import React, {PureComponent} from 'react';
import ReactDOM from "react-dom"
import {Pagination, Spin, Table} from 'antd';
import * as PropTypes from 'prop-types';
import './style.less'


export default class AutoHeightTable extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			pagination: {
				pageSize: 15,
				current: 1,
				total: 0,
				sortField: "rank",
				sortOrder: "descend",
				Quick_value: "",
				...props.pagination
			},
			filters: {},
			sorter: {},
			height: 0,//可显示的表格高度 影响导航条高度和可滚动的表格内容高度
		};
	}

	static propTypes = {
		loading: PropTypes.bool,
		// pagination: PropTypes.object,//分页信息
		className: PropTypes.string,//自定义样式,不会覆盖已有的样式名
		tableScrollY: PropTypes.number,//高度预留值
		scroll: PropTypes.object,//滚动宽度设置
		onChange: PropTypes.func,//表格翻页、排序、切换单页条数时的回调

		//其余api参考Table
		dataSource: PropTypes.array,
		columns: PropTypes.array,
		prefixCls: PropTypes.string,
		useFixedHeader: PropTypes.bool,
		rowSelection: PropTypes.object,
		size: PropTypes.string,
		bordered: PropTypes.bool,
		locale: PropTypes.object,
		dropdownPrefixCls: PropTypes.string,
		sortDirections: PropTypes.array,
	};

	static defaultProps = {
		loading: false,
		pagination: false,
		className: '',
		tableScrollY: 0,
		scroll: {}
	};

	//dom加载后计算height，绑定窗口变化事件
	componentDidMount() {
		this.updateSize();
		window.addEventListener('resize', this.handleResize);
	}

	//移除事件监听
	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize);
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.tableScrollY !== this.props.tableScrollY) {
			this.updateSize()
		}
	}

	//计算dom到顶部的距离
	static getElementTop(element) {
		return element.offsetParent ? (element.offsetTop + AutoHeightTable.getElementTop(element.offsetParent)) : 0;
	}

	//计算表格可显示的高度
	updateSize() {
		let dom = ReactDOM.findDOMNode(this.refs.autoHeightTable);
		let yHeight = document.body.clientHeight - AutoHeightTable.getElementTop(dom) - 35;

		this.setState({height: yHeight});
	}

	//窗口变化事件
	handleResize = () => {
		let _this = this;
		setTimeout(function () {
			_this.updateSize();
		}, 20);//避免屏幕尺寸变化时浏览器卡顿
	};

	//表格筛选排序执行回调
	handleTableChange = (pagination, filters, sorter) => {
		this.setState({
			filters: filters,
			sorter: sorter
		}, this.onChange);
	};

	//分页条页码变化或者选择每页条数时执行回调
	handlePageChange = (page, pageSize) => {
		this.setState({
			pagination: {
				...this.state.pagination,
				current: page,
				pageSize: pageSize
			}
		}, this.onChange);
	};

	//调用props里的onChange方法
	onChange() {
		const {pagination, filters, sorter} = this.state;
		this.props.onChange && this.props.onChange(pagination, filters, sorter);
	}

	render() {
		const {
			loading,
			className,
			scroll,
			tableScrollY,
			pagination,
			...tableConfig
		} = this.props;

		const {height} = this.state;

		return (
			<Spin spinning={loading}>
				{
					pagination && pagination.position !== 'bottom'
						? <Pagination className="auto-height-table-page"
						              showQuickJumper={true}
						              showSizeChanger={true}
						              showTotal={total => `共 ${total} 条`}
						              pageSizeOptions={['15', '30', '100', '150']}
						              {...pagination}
						              onChange={this.handlePageChange}
						              onShowSizeChange={this.handlePageChange}/>
						: null
				}
				<Table {...tableConfig}
				       className={className + " auto-height-table"}
				       ref="autoHeightTable"
				       scroll={{
					       x: scroll.x || false,
					       y: height - 105 - tableScrollY
				       }}
				       onChange={this.handleTableChange}
				       style={{height: height - tableScrollY}}
				       pagination={false}/>
				{
					pagination && pagination.position !== 'top'
						? <Pagination className="auto-height-table-page"
						              showQuickJumper={true}
						              showSizeChanger={true}
						              showTotal={total => `共 ${total} 条`}
						              pageSizeOptions={['15', '30', '100', '150']}
						              {...pagination}
						              onChange={this.handlePageChange}
						              onShowSizeChange={this.handlePageChange}/>
						: null
				}
			</Spin>
		);
	}
}