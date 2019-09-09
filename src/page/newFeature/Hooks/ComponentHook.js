/**
 * create by hy ON 2019/5/30
 */
import React, {useEffect, useState} from "react";
import axios from "axios";
import {message} from "antd";
import HookChildB from "./HookChildB";

function ComponentHook(props) {
	const [list, setList] = useState([]);
	const load = true;

	function server() {
		 axios.post("/api/list-page")
			.then(re => re.data)
			.then(re => {
				setList(re.data);
			})
			.catch(() => {
				message.error("获取数据异常")
			});
	}

	useEffect(() => {
		server();
	}, [load]);

	return <HookChildB selectList={list} onClick={props.onClick}/>
}

export default ComponentHook;