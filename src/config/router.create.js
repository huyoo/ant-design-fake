/**
 * Router生成
 * create by huyoo ON 2019/1/9
 */
import {Route} from "react-router-dom"
import menu from "./menu.config";
import React from "react";

// const createRoute = (menu, i = '0') => {
//     let list = [];
//     menu.forEach((item, index) => {
//         if (item.routes){
//             list = list.concat(createRoute(item.routes, i+index+""));
//         }
//         // if(item.component){
//         //     list.push(<Route path={item.path} component={item.component} key={i+index}/>);
//         // }
//     });
// 	return list;
// };

const createRoute = (menu, i = '0') => {
	let route = [];

	console.log('menu', menu)
	menu.forEach((item, index) => {
		let list = [];
		if (item.routes) {
			list = list.concat(createRoute(item.routes, i + index + ""));
			list = [<item.component key={'menu' + i + index}>{list}</item.component>];
		}else {
			list.push(<Route path={item.path} component={item.component} key={'menu' + i + index}/>)
		}

		route = route.concat(list);
	});
	console.log(route)
	return route;
};

export default createRoute(menu);