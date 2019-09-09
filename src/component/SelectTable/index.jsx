/**
 * create by hy ON 2019/8/2
 *
 * Created by liusonglin on 2018/7/13.
 * placeholder 文本框显示文本
 * multiple 是否多选
 * selectChange 选择表格后执行的函数，传入了选择行的数据
 * beforeSelect 选择表格前函数
 * config 配置对象 {
 * columns 表格列
 * key 实际传递的值
 * text 文本框显示的值
 * dataService 获取表格数据的函数
 * }
 */
import React, {Component} from 'react';
import ReactDOM from "react-dom"
import {Icon, Input} from 'antd';
import SimpleTable from "./SimpleTable";
import * as PropTypes from "prop-types"

class SelectTable extends Component {
	static propTypes = {
		defaultValue: PropTypes.any,
		allowClear: PropTypes.bool,
		value: PropTypes.any,//
		placeholder: PropTypes.string,//下拉表格placeholder
		onChange: PropTypes.func,//提供给表单使用，不需要自己实现
		selectChange: PropTypes.func,//选中数据的回调函数
		params: PropTypes.object,//请求参数
		/** 表格配置 */
		config: PropTypes.shape({
			text: PropTypes.string.isRequired,//显示值
			key: PropTypes.string.isRequired,//表单收集的值，对应的字段
			searchService: PropTypes.func,//查询服务
			dataService: PropTypes.func.isRequired,//获取数据的服务
			keyFieldType: PropTypes.string,//参数处理配置
			columns: PropTypes.array.isRequired//展示列配置
		}).isRequired,
		forceMatch: PropTypes.bool,//是否强制匹配数据
		objVal: PropTypes.bool//是否表单获取值为对象
	};

	constructor(props) {
		super(props);

		console.log(props);
		this.state = {
			textValue: '',
			value: this.props.value ? this.props.value : '',
			searchValue: '',
			pageInfo: {},
			loading: false,
			selectedRows: [],
			show: false,
			style: {},
			dataSource: [],
			filterData: [],
			showClear: false,
			matchStatus: 0, //匹配状态 0未匹配 1成功 2失败 3中
		};
		this.params = props.params
	}

	componentWillMount() {
		const {value = '', defaultValue = ''} = this.props;

		if (value || defaultValue) {
			this.getInitialData(value || defaultValue);
		}

		// if (!value && !defaultValue) {
		// 	this.setState({textValue: '', value: ''});
		// 	return;
		// }

		// if (initValue && !this.props.value) {
		// 	// this.getInitData()
		// } else {
		// 	// this.getDataSource()
		// }
	}

	componentDidMount() {
		this.toggleEventListener('add');
	}

	componentWillUnmount() {
		this.toggleEventListener('remove');
	}

	//传入参数，级联操作
	componentWillReceiveProps(nextProps) {

		if (nextProps.value && typeof nextProps.value === 'string' && nextProps.value.indexOf(',') === -1) {
			// if (this.state.value !== nextProps.value) {
			// 	this.initialValue(nextProps.value)
			// }
		} else if (this.state.textValue && !nextProps.value) {
			// if (this.state.searchValue || this.state.searchValue.length > 0) {
			// 	this.getDataSource();
			// 	this.setState({textValue: '', value: '', searchValue: ''})
			// } else {
			// 	this.setState({textValue: '', value: ''})
			// }
		}

		//校验新的值
		if (!compare(nextProps.value, this.props.value)) {
			//TODO：匹配数据
			if (!nextProps.value) {
				this.setState({
					textValue: '',
					value: ''
				}, () => {
					if (this.props.onChange) {
						this.props.onChange('');
					}
				})
			}
		}

		//校验新的参数,新参数会重置组件值和状态
		if (!compare(nextProps.params, this.props.params)) {
			this.setState({
				searchValue: '',
				pageInfo: {},
				textValue: '',
				value: ''
			}, () => {
				if (this.props.onChange) {
					this.props.onChange('');
				}
			})
		}

		if (nextProps.params && this.props.params && !compare(nextProps.params, this.props.params)) {
			this.params = nextProps.params;

			// if (this.props.initValue) {
			// 	// this.getInitData()
			// } else {
			// 	// this.getDataSource();
			// }

			// if (Object.values(this.props.params)[0]) {
			// 	this.setState({
			// 		searchValue: '',
			// 		pageInfo: {}
			// 	}, () => {
			// 		if (this.props.value === nextProps.value && !isEmpty(nextProps.value)) {
			// 			if (this.props.onChange) {
			// 				this.props.onChange('');
			// 			}
			// 		}
			// 	})
			// }
		}
	}

	// componentDidUpdate() {
	// 	if (this.state.show) {
	// 		this.innerInput.input.focus()
	// 	}
	// }

	//添加移除事件
	toggleEventListener = (type = 'add') => {
		document[`${type}EventListener`]('mousedown', this.handleClickOutside);

		if (this.props.allowClear) {
			const inputRef = ReactDOM.findDOMNode(this.inputRef);
			inputRef[`${type}EventListener`]('mouseenter', this.showClear);
			inputRef[`${type}EventListener`]('mouseleave', this.hideClear);
		}
	};

	showClear = () => {
		this.setState({
			showClear: true
		})
	};
	hideClear = () => {
		this.setState({
			showClear: false
		})
	};

	handleClickOutside = (e) => {
		if (this.selectTableRef && !this.selectTableRef.contains(e.target) && this.state.show) {
			this.setState({show: false})
		}
	};

	// initialValue = async (value) => {
	// 	if (value && !(this.state.defaultData)) {
	// 		const {text, key, keyFieldType} = this.props.config;
	// 		// if (this.props.config.searchService) {
	// 		// 	let searchParam = {keyword: value};
	// 		// 	this.props.config.searchService(this.state.dataSource, searchParam, [key])
	// 		// 		.then(data => {
	// 		// 			if (data && data.length > 0) {
	// 		// 				this.setState({value: value, textValue: data[0][text]});
	// 		// 			}
	// 		// 		})
	// 		// } else {
	//
	// 		let searchParam = {};
	// 		let fieldType = keyFieldType ? keyFieldType : "String";
	// 		searchParam['Q_EQ_' + key + '__' + fieldType] = value;
	// 		await this.props.config.dataService({...searchParam})
	// 			.then(res => {
	//
	// 				let list = res.rows || res;
	//
	// 				let result = this.buildByColumns(list);
	// 				if (result && result.length > 0) {
	// 					let index = result.findIndex(item => item[key] === value);
	// 					this.setState({
	// 						value: value,
	// 						textValue: index !== -1 ? result[index][text] : ""
	// 					})
	// 				}
	// 			})
	// 		// }
	// 	}
	// };

	getInitialData(value) {
		this.setState({matchStatus: 3});

		this.props.config.dataService({
			...value,
			...this.params,
			Q_EQ_frozen__bool: 0
		})
			.then((res) => {
				let list = res && res.rows ? res.rows : res,
					{onChange, forceMatch} = this.props;
				let result = this.buildByColumns(list);

				if (!result) {
					//没有匹配值
					forceMatch && onChange && onChange('data match fail');
					this.setState({matchStatus: 2});
				} else if (result.length === 1) {
					let {textVal, keyVal} = this.getValue(result[0]);

					this.setState({
						textValue: textVal,
						value: keyVal,
						matchStatus: 1
					}, () => {
						onChange && onChange(keyVal, list[0]);
					})
				} else if (result.length > 1) {

					//TODO 多结果匹配值 待优化
					if (this.props.config.searchService) {
						let searchParam = {keyword: value};
						result = searchListByKey(result, searchParam, ['erpCode']);
					}

					if (!result.length) {
						forceMatch && onChange && onChange('data match fail');

						this.setState({matchStatus: 2});
						return;
					} else if (result.length > 1) {
						console.warn('匹配到多个值');
					}

					let {textVal, keyVal} = this.getValue(result[0]);

					this.setState({
						textValue: textVal,
						value: keyVal,
						matchStatus: 1
					},)
				}
			});
	};

	getDataSource(value = {}, pageInfo = {}) {
		//有数据有搜索方法时不再发起请求
		if (this.state.dataSource.length && this.props.config.searchService) {
			this.setState({loading: false});
			return;
		}

		this.setState({loading: true});

		this.props.config.dataService({
			...value,
			...pageInfo,
			...this.params,
			Q_EQ_frozen__bool: 0
		})
			.then(res => {
				this.setState({
					dataSource: res,
					filterData: res,
					loading: false,
				});
			})
			.catch(() => {
				this.setState({loading: false});
			})
	};

	pageChange = (pagination) => {
		this.setState({pageInfo: pagination});
		this.getDataSource({Quick_value: this.state.searchValue}, pagination);
	};

	handleSearch = (values) => {
		if (this.props.config.searchService) {
			let searchParam = {keyword: values};
			this.props.config.searchService(this.state.dataSource, searchParam)
				.then(data => {
					this.setState({filterData: data.rows ? data.rows : data})
				})
		} else {
			let searchParam = {Quick_value: values};
			this.getDataSource(searchParam)
		}
		this.setState({searchValue: values})
	};

	rowOnChange = (selectedRows) => {
		const {multiple, onChange, selectChange} = this.props;

		if (!selectedRows.length) {
			return;
		}

		if (multiple) {

		} else {
			let {textVal, keyVal} = this.getValue(selectedRows[0]);

			this.setState({
				show: false,
				textValue: textVal,
				value: keyVal,
				selectedRows: [],
				matchStatus: 0
			}, () => {
				onChange && onChange(keyVal, selectedRows[0]);
				selectChange && selectChange(selectedRows[0])
			});
		}
	};

	showSelect = (e) => {
		if (this.props.disabled) {
			return;
		}

		if (this.props.beforeSelect) {
			if (!this.props.beforeSelect(e))
				return
		}
		const style = {
			position: 'absolute',
			width: '400px',
			marginLeft: window.innerWidth - getX(this.inputRef.input) > 400 ? 0 : -(400 - this.inputRef.input.clientWidth),
			zIndex: 10,
			boxShadow: '0 2px 8px rgba(0, 0, 0, .15)'
		};

		this.setState({show: true, style: style});
		this.getDataSource();
	};

	clean = () => {
		this.setState({
			textValue: '',
			value: '',
			selectedRows: [],
			matchStatus: 0
		}, () => {
			this.props.onChange && this.props.onChange('');
			this.props.selectChange && this.props.selectChange('');
		})
	};

	//根据key和text获取对应的值
	getValue = (row) => {
		const {config: {key = '', text = ''}} = this.props;

		let keys = key.split('.'), texts = text.split('.'), textVal = row, keyVal = row;

		//TODO: 表单值没有匹配值检查，并将结果提示在表单校验中
		keys.forEach(item => {
			keyVal = keyVal[item] || '';
		});

		//TODO: 显示值没有匹配值检查，并将结果提示在表单校验中
		texts.forEach(item => {
			textVal = textVal[item] || '';
		});

		return {textVal, keyVal};
	};

	buildByColumns = (list) => {
		const {columns} = this.props.config;
		for (let i = 0; i < list.length; i++) {
			let data = list[i];
			columns.forEach(item => {
				if (item.render) {
					item.render(data[item.dataIndex], data, i)
				}
			})
		}
		return list;
	};

	getButton = () => {
		const {disabled, allowClear} = this.props, {value, matchStatus, show, showClear} = this.state;
		if (disabled) {
			return []
		}

		let suffix = [];

		//匹配状态
		switch (matchStatus) {
			case 1:
				suffix.push(<Icon type="check-circle"
				                  theme="filled"
				                  key='check-circle'
				                  style={{color: '#52c41a', marginRight: 3, fontSize: 12}}/>);
				break;
			case 2:
				suffix.push(<Icon type="exclamation-circle"
				                  theme="filled"
				                  key='exclamation-circle'
				                  style={{color: 'red', marginRight: 3, fontSize: 12}}/>);
				break;
			case 3:
				suffix.push(<Icon type="loading"
				                  key='loading'
				                  style={{marginRight: 3, fontSize: 12}}/>);
				break;
			default:
		}

		//是否值需要清空
		if (allowClear && value && showClear) {
			suffix.push(<Icon key='select-table-clean'
			                  type="close-circle"
			                  theme="filled"
			                  onClick={this.clean}
			                  style={{fontSize: 12, cursor: 'pointer', color: '#C7C7C7'}}/>)
		} else {
			//是否展示数据表格
			suffix.push(<Icon key="select-table-show"
			                  type={show ? "up" : 'down'}
			                  onClick={this.showSelect}
			                  style={{fontSize: 12, cursor: 'pointer', color: '#C7C7C7'}}/>);
		}

		return suffix;
	};

	render() {
		const {
				disabled,
				value,
				placeholder,
				sequence,
				multiple,
				config: {columns},
			} = this.props,
			{
				textValue,
				style,
				show,
				selectedRows,
				loading,
				filterData
			} = this.state;

		let suffix = this.getButton();

		return (
			<div id="searchTable" ref={(ref) => this.selectTableRef = ref}>
				<Input placeholder={placeholder}
				       disabled={disabled}
				       onFocus={this.showSelect}
				       readOnly
				       value={textValue}
				       ref={(ref) => this.inputRef = ref}
				       suffix={suffix}/>
				<div className="overlay" style={style} hidden={!show}>
					<SimpleTable noSequence={!sequence}
					             checkBox={multiple}
					             rowsSelected={selectedRows}
					             loading={loading}
					             onSelectRow={this.rowOnChange}
					             data={filterData}
					             columns={columns}
					             heightY={300}
					             pageChange={this.pageChange}
					/>
				</div>
			</div>
		);
	}
}

function getX(obj) {
	var parObj = obj;
	var left = obj.offsetLeft;
	while (parObj = parObj.offsetParent) {
		left += parObj.offsetLeft;
	}
	return left;
}

function searchListByKey(data, searchParam, keys = []) {
	// return data.filter(item =>
	// 	keys.filter(key =>
	// 		item[key] === searchParam.keyword
	// 	).length
	// )

	let result = []
	let list
	let flag = true
	if (data.rows) {
		list = data.rows
	} else {
		list = data;
	}
	let excludeKey = [];
	if (keys.length === 0) {
		excludeKey = ['id', 'tenantCode']
	}
	for (let i = 0; i < list.length; i++) {
		let item = list[i]
		if (keys.length === 0) {
			keys = Object.keys(item)
		}
		for (let j = 0; j < keys.length; j++) {
			let key = keys[j]
			if (excludeKey.indexOf(key) !== -1) {
				continue;
			}
			let value = item[key];
			if (value && searchParam.keyword && !isEmpty(searchParam.keyword)) {
				flag = false
				if (typeof value === 'string' && typeof searchParam.keyword === 'string'
					&& value.toLowerCase().includes(searchParam.keyword.toLowerCase())) {
					result.push(item)
					break;
				}
				if (typeof value === 'string' && typeof searchParam.keyword == "object"
					&& value.toLowerCase().includes(searchParam.keyword.key.toLowerCase())) {
					result.push(item)
					break;
				}
			}
		}
	}
	return flag ? list : result;
}
/**
 * 判断为空
 */
const isEmpty = (value) => {
	return (value === null || value === undefined || value === '' || JSON.stringify(value) === '{}' || JSON.stringify(value) === '[]' || value.length === 0 || value === 'null' || value === 'NULL' || value === 'NAV')
};

const compare = (obj1, obj2) => JSON.stringify(obj1) === JSON.stringify(obj2);

export default SelectTable;


/**************************
 * 强制匹配数据库需要在rules里增加validator验证
 * 代码如下
 * validator: (rule, value, callback) => value === 'data match fail' ? callback(true) : callback(),
 message: '没有获取到对应值'
 * data match fail 是固定值
 *
 * 此外还需要配置forceMatch为true
 *
 */