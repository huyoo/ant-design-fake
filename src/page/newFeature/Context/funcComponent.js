/**
 * 函数式组件使用 Context
 * create by hy ON 2019/5/29
 */
import React from 'react';
import RouterContext from "./RouterContext";

function FnContext(){
	return <RouterContext.Consumer>
			{(context) => {
				return <div>{context}</div>
			}}
		</RouterContext.Consumer>
}

export default FnContext;