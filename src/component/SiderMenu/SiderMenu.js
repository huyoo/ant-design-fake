import React, {PureComponent} from "react"
import {Layout} from "antd"
import BaseMenu from "./Menu"
import "antd/dist/antd.css"
import "./SiderMenu.css"
import logo from "../../asset/logo.svg"

const {Sider} = Layout;

export default class SiderMenu extends PureComponent{
    render(){
        return (
            <Sider className="menu" width={256} breakpoint="lg">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                    <h1>高仿 Antd Pro</h1>
                </div>
                <BaseMenu/>
            </Sider>
        )
    }
}