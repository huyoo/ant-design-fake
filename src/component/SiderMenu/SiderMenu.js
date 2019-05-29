import React, {PureComponent} from "react"
import {Layout} from "antd"
import BaseMenu from "./BaseMenu"
import "./SideMenu.less"
import logo from "../../asset/logo.svg"

const {Sider} = Layout;

export default class SiderMenu extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            theme: "light",
            inlineCollapsed: false,
        }
    }
    render(){

        const {collapsed} = this.props;

        return (
            <Sider width={256} breakpoint="lg" collapsed={collapsed}>
                <div className='logo'>
                    <img src={logo} alt="logo"/>
                    <h1>Ant Design Pro</h1>
                </div>
                <BaseMenu />
            </Sider>
        )
    }
}