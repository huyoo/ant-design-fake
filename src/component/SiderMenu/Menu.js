import React, {Component} from "react"
import {Menu, Icon} from "antd"
import {Link} from "react-router"
import menuData from "../../config/menu"

const {Item, SubMenu} = Menu;

//路径
const getItemPath = ({path, title}) => {
    return (<Link to={path}>{ title }</Link>)
};
//图标
const getIcon = icon => {
    return (<Icon type={icon} theme="outlined"/> )
};
//根据数据path和routes判断并生成子节点菜单和根节点菜单
const getSubMenuOrItem = item => {
    if(item.path){
        return (<Item key={item.key}>{ getItemPath(item) }</Item>)
    } else if(item.routes && item.routes instanceof Array) {
        return (
            <SubMenu key={item.key}
                     title={(item.icon?(<span>{getIcon(item.icon)}<span>{item.title}</span></span>):item.title)}>
                {createMenu(item.routes)}
            </SubMenu>
        )
    }

    return [];
};
//遍历菜单数据，生成组件
const createMenu = menuData => {
    if(!menuData){
        return [];
    }
    return menuData.map(item => {
        return getSubMenuOrItem(item)
    });
};

export default class BaseMenu extends Component{
    render(){
        return (
            <Menu theme="dark" mode="inline">
                {createMenu(menuData)}
            </Menu>
        )
    }
}