import React, {Component} from "react"
import {Menu} from "antd"
import {Link} from "react-router"

export default class BaseMenu extends Component{
    render(){
        return (
            <Menu theme={"dark"} mode={"inline"} inlineCollapsed={false}>
                <Menu.Item key={"1"}>
                    <Link to={"/carousel"}>轮播图</Link>
                </Menu.Item>
                <Menu.SubMenu title={"菜单栏"}>
                    <Menu.Item key={"2"}>
                        <Link to={"/head"}>顶部栏</Link>
                    </Menu.Item>
                    <Menu.Item>子菜单</Menu.Item>
                </Menu.SubMenu>
            </Menu>
        )
    }
}