/**
 * @DECS: 基础布局
 * @AUTH: hy
 * @DATE: 2021-08-17
 */
import React, {useState} from "react";
import {Outlet} from "react-router-dom";
import {Layout as Lay} from "antd";
import Layout from "antd/lib/layout/layout";
import SiderMenu from "../components/SideMenu";
import ContentHeader from "../components/ContentHeader";
import Foot from "../components/Footer";

const {Content, Footer} = Lay;

export interface BasicLayoutProp {
}

const BasicLayout: React.FC<BasicLayoutProp> = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleMenu = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{flexDirection: 'inherit'}}>
      <SiderMenu collapsed={collapsed} />
      <Layout>
        <ContentHeader collapsed={collapsed} handleMenuCollapse={toggleMenu} />
        <Content>
          <Outlet />
        </Content>
        <Footer>
          <Foot />
        </Footer>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
