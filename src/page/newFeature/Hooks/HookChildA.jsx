/**
 *
 * create by hy ON 2019/5/30
 */
import React, {Component} from "react"
import {Select} from "antd"
import ComponentHoc from "./ComponentHoc";

const {Option} = Select;

@ComponentHoc
class HookChildA extends Component {
	render() {
		const {selectList, onClick} = this.props;

		return <Select style={{width: 100, margin: '0 10px'}} onChange={onClick}>
					{selectList.map((item, index) => <Option key={index} value={item.key}>{item.name}</Option>)}
				</Select>
	}
}

export default HookChildA;