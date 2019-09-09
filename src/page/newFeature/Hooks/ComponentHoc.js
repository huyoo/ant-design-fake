/**
 * create by hy ON 2019/5/30
 */
import React, {Component} from "react";
import axios from "axios";
import {message} from "antd";

const ComponentHoc = WrappedComponent => {
	return class extends Component {
		state = {
			data: []
		};
		componentDidMount() {
			axios.post("/api/list-page")
				.then(re => re.data)
				.then(re => {
					this.setState({
						data: re.data,
					})
				})
				.catch(() => { message.error("获取数据异常") })
		}

		render(){
			const {data} = this.state;
			return <WrappedComponent selectList={data}  {...this.props}/>
		}
	}
};

export default ComponentHoc;