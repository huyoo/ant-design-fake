/**
 * Router生成
 * create by huyu_ ON 2019/1/9
 */
import {Route} from "react-router-dom"
import menu from "./menu";
import React from "react";

const createRoute = (menu, i = '0') => {
    let list = [];
    menu.forEach((item, index) => {
        if (item.routes){
            list = list.concat(createRoute(item.routes, i+index+""));
        }
        if(item.component){
            list.push(<Route path={item.path} component={item.component} key={i+index}/>);
        }
    });
    return list;
};

export default createRoute(menu);