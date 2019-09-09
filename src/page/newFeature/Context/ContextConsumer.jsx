/**
 * 标准自状态组件使用context
 * create by hy ON 2019/5/29
 */
import React, {Component} from "react"
import {Spin} from "antd"
import RouterContext from "./RouterContext";

class ContextConsumer extends Component {

	static contextType = RouterContext;

	render() {
		console.log(this.context);
		return (
			<Spin spinning={false}>
				<div style={{color: this.context, fontSize: '40px'}}>{this.context}</div>
			</Spin>
		)
	}
}

export default ContextConsumer;