/**
 * decs: context测试
 * author: hy
 * time: 2019/5/29
 */
import React, {Component} from "react"
import ContextConsumer from "./ContextConsumer";
import {Button} from "antd";
import RouterContext from "./RouterContext";
import FnContext from "./funcComponent";

class Context extends Component {
	state = {
		count: 0,
		color: "#80354d"
	};

	toggleColor = () => {
		let count = this.state.count + 6;
		count = count > 251 ? 0 : count;
		this.setState({
			count: count,
			color: `rgba(${count}, ${count / 2}, ${(count * 2) > 251 ? 251 : (count * 2)}, .8)`,
		})
	};

	render() {
		const {color} = this.state;
		return (
			<RouterContext.Provider value={color}>
				<div style={{textAlign: 'center'}}>
					<ContextConsumer/>
					<FnContext/>
					<Button type='primary' onClick={this.toggleColor}>点击切换配色</Button>
				</div>
			</RouterContext.Provider>
		)
	}
}

export default Context;