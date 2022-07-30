import React from "react";
import {Layout} from "antd";
import logo from "../../assets/logo.svg";
import BaseMenu from "./BaseMenu";
import style from "./style.less";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";

export interface SideMenuProp {
  collapsed: boolean
  handleMenuCollapse: () => void
}

const SideMenu: React.FC<SideMenuProp> = (props) => {
  const {collapsed, handleMenuCollapse} = props;

  return (
    <Layout.Sider width={256} breakpoint="lg" collapsed={collapsed} className={style.SideMenu}>
      <div className="logo">
        <img src={logo} alt="logo" />
        <h1>Ant Design Fake</h1>
      </div>
      <BaseMenu />

      <div className="sider-link" onClick={handleMenuCollapse}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
    </Layout.Sider>
  );
};

export default SideMenu;
