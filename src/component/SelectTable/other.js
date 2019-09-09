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
import {Button, Col, Icon, Input, Row} from 'antd';
import {isEmpty} from "../../commons/utils/CommonUtils";
import SimpleTable from "./SimpleTable";

class SelectTable extends Component {
	params = null;
	value = '';

	constructor(props) {
		super(props);
		this.state = {
			pageInfo: {},
			searchValue: '',
			textValue: '',
			value: this.props.value ? this.props.value : '',
			loading: false,
			selectedRows: [],
			show: false,
			style: {},
			dataSource: [],
			filterData: []
		};
		this.params = props.params
	}

	//传入参数，级联操作
	componentWillReceiveProps(nextProps) {
		if (nextProps.value && typeof nextProps.value === 'string' && nextProps.value.indexOf(',') === -1) {
			if (this.state.value !== nextProps.value) {
				this.initValue(nextProps.value)
			}
		} else if (this.state.textValue && !nextProps.value) {
			if (this.state.searchValue || this.state.searchValue.length > 0) {
				this.getDataSource();
				this.setState({textValue: '', value: '', searchValue: ''})
			} else {
				this.setState({textValue: '', value: ''})
			}
		}

		if (nextProps.params &&
			this.props.params &&
			Object.values(nextProps.params).toString() !== Object.values(this.props.params).toString()) {
			this.params = nextProps.params;

			this.props.initValue ? this.getInitData() : this.getDataSource();

			if (Object.values(this.props.params)[0]) {
				this.setState({searchValue: '', pageInfo: {}}, () => {
					if (this.props.value === nextProps.value && !isEmpty(nextProps.value)) {
						if (this.props.onChange) {
							this.props.onChange('');
						}
					}
				})
			}
		}
	}

	componentDidUpdate() {
		if (this.state.show) {
			this.innerInput.input.focus()
		}
	}

	componentDidMount() {
		document.addEventListener('mousedown', this.handleClickOutside);
	}

	componentWillUnmount() {
		document.removeEventListener('mousedown', this.handleClickOutside);
	}

	handleClickOutside = (e) => {
		if (this.mainContent && !this.mainContent.contains(e.target)) {
			if (this.state.show) {
				this.setState({show: false})
			}
		}
	};


	componentWillMount() {
		if (!this.props.value) {
			this.setState({textValue: '', value: ''})
		}
		const {initValue} = this.props;
		if (initValue && !this.props.value) {
			this.getInitData()
		} else {
			this.getDataSource()
		}
	}

	initValue = async (value) => {
		if (value && !(this.state.defaultData)) {
			const {text, key, keyFieldType} = this.props.config;
			if (this.props.config.searchService) {
				let searchParam = {keyword: value};
				this.props.config.searchService(this.state.dataSource, searchParam, [key])
					.then(data => {
						if (data && data.length > 0) {
							this.setState({value: value, textValue: data[0][text]});
						}
					})
			} else {
				let searchParam = {};
				let fieldType = keyFieldType ? keyFieldType : "String";
				searchParam['Q_EQ_' + key + '__' + fieldType] = value;
				await this.props.config.dataService({...searchParam})
					.then(res => {

						let list = res.rows || res;

						let result = this.buildByColumns(list);
						if (result && result.length > 0) {
							let index = result.findIndex(item => item[key] === value);
							this.setState({
								value: value,
								textValue: index !== -1 ? result[index][text] : ""
							})
						}
					})
			}
		}
	};

	getInitData(value) {
		const {key, text} = this.props.config;
		this.props.config.dataService({...value, ...this.params, Q_EQ_frozen__bool: 0})
			.then((res) => {
				let list;
				if (res && res.rows) {
					list = res.rows;
				} else {
					list = res;
				}
				let result = this.buildByColumns(list);
				if (result && result.length > 0) {
					let textVal = '';
					if (text.includes('.')) {
						textVal = result[0][text.split('.')[0]][text.split('.')[1]]
					} else {
						textVal = result[0][text];
					}
					this.setState({
						dataSource: res,
						filterData: res,
						textValue: textVal,
						value: list[0][key]
					}, () => {
						if (this.props.onChange) {
							this.props.onChange(list[0][key], list[0]);
						}
						if (this.props.selectChange) {
							this.props.selectChange(list[0]);
						}
					})
				}
			});
	};

	getDataSource(value, pageInfo) {
		this.setState({loading: true});
		this.props.config.dataService({
			...value,
			...pageInfo,
			...this.params,
			Q_EQ_frozen__bool: 0
		})
			.then((res) => {
				this.setState({
					dataSource: res,
					filterData: res,
					loading: false
				});

				if (this.props.value && this.props.selectChange) {
					let list;
					if (res && res.rows) {
						list = res.rows;
					} else {
						list = res;
					}
					let index = list.findIndex(item => item.id === this.props.value);
					if (index !== -1) {
						this.props.selectChange(list[index]);
					}
				}
				this.initValue(this.props.value)
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
		const {key, text} = this.props.config;
		if (!this.props.multiple) {
			if (selectedRows.length > 0) {
				let textVal = ''
				if (text.includes('.')) {
					textVal = selectedRows[0][text.split('.')[0]][text.split('.')[1]]
				} else {
					textVal = selectedRows[0][text];
				}
				this.setState({
					show: false,
					textValue: textVal,
					value: selectedRows[0][key],
					selectedRows: []
				}, () => {
					if (this.props.onChange) {
						this.props.onChange(selectedRows[0][key], selectedRows[0]);
					}
				})
			}
		} else {
			let textValue = [], keyValue = [];
			for (let i = 0; i < selectedRows.length; i++) {
				textValue.push(selectedRows[i][text]);
				keyValue.push(selectedRows[i][key])
			}
			this.setState({textValue: textValue.toString(), value: keyValue, selectedRows}, () => {
				if (this.props.onChange) {
					this.props.onChange(keyValue, selectedRows[0]);
				}
			})
		}
		if (this.props.selectChange) {
			this.props.selectChange(selectedRows[0]);
		}
	};

	showSelect = (e) => {
		if (this.props.disabled) {
			return;
		}
		this.getDataSource();
		if (this.props.beforeSelect) {
			if (!this.props.beforeSelect(e))
				return
		}
		const style = {
			position: 'absolute',
			width: '400px',
			maxHeight: '300px',
			marginLeft: window.innerWidth - getX(this.searchInput.input) > 400 ? 0 : -(400 - this.searchInput.input.clientWidth),
			zIndex: 10
		};
		this.setState({show: !this.state.show, style: style})
	};

	clean = () => {
		this.setState({
			textValue: '',
			value: '',
			selectedRows: []
		}, () => {
			this.props.onChange && this.props.onChange('');
		})
	};

	buildByColumns = (list) => {
		const {columns} = this.props.config;
		for (let i = 0; i < list.length; i++) {
			let data = list[i];
			columns.map(item => {
				if (item['render']) {
					item.render(data[item['dataIndex']], data)
				}
			})
		}
		return list;
	};

	handleSure = () => {
		this.setState({show: false, selectedRows: []})
	};

	searchChange = (e) => {
		this.setState({searchValue: e.target.value})
	};

	render() {

		const {columns} = this.props.config;
		const {
				disabled,
				value,
				placeholder,
				sequence,
				multiple,
			} = this.props,
			{
				searchValue,
				textValue,
				style,
				show,
				selectedRows,
				loading,
				filterData
			} = this.state;

		const search = () => {
			return (<Input.Search
				key="TableSearchI"
				placeholder="请输入查询关键字"
				value={searchValue}
				onChange={this.searchChange}
				onSearch={value => this.handleSearch(value)}
				ref={(ref) => this.innerInput = ref}
				style={{marginRight: '5px'}}
				enterButton
			/>)
		};

		const suffix = !disabled && ([
			value && <Icon key="emptyClick"
			               type="close"
			               onClick={this.clean}/>,
			<Icon key="selectClict" type="down" onClick={this.showSelect}/>,
		]);

		return (
			<div id="searchTable" ref={(ref) => this.mainContent = ref}>
				<Input placeholder={placeholder}
				       disabled={disabled}
				       onFocus={this.showSelect}
				       readOnly
				       value={textValue}
				       ref={(ref) => this.searchInput = ref}
				       suffix={suffix}/>
				<div className="overlay"
				     style={style}
				     hidden={!show}>
					<Row style={{background: '#F3F8FC', padding: 5}}>
						<Col span={18} offset={6} style={{textAlign: 'right'}}>{search()}</Col>
						{multiple ? <Col span={6} offset={18} style={{textAlign: 'right'}}>
							<Button key="sure" icon="plus" onClick={this.handleSure}>确认</Button>
						</Col> : null}
					</Row>
					<SimpleTable
						noSequence={!sequence}
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

export default SelectTable;
