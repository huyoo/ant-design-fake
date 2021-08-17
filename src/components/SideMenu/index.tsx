/**
 * @DECS:
 * @AUTH: hy
 * @DATE: 2021-08-17
 */
import React from "react";
import {Layout} from "antd";
import logo from "../../assets/logo.svg"
import BaseMenu from "./BaseMenu";
import "./style.less"

export interface SideMenuProp {
  collapsed: boolean
}

const SideMenu: React.FC<SideMenuProp> = ({collapsed}) => {
  return (
    <Layout.Sider width={256} breakpoint="lg" collapsed={collapsed}>
      <div className='logo'>
        <img src={logo} alt="logo"/>
        <h1>Ant Design Pro</h1>
      </div>
      <BaseMenu/>
    </Layout.Sider>
  )
}

export default SideMenu;
