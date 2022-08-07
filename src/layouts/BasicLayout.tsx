import React, {useState} from "react";
import {Outlet} from "react-router-dom";
import {Layout} from "antd";
import SiderMenu from "../components/SideMenu";
import ContentHeader from "../components/ContentHeader";
import Foot from "../components/Footer";

const {Content, Footer} = Layout;

export interface BasicLayoutProp {
}

const BasicLayout: React.FC<BasicLayoutProp> = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleMenu = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{flexDirection: 'inherit'}}>
      <Layout.Sider width={256} collapsed={collapsed} />
      <SiderMenu collapsed={collapsed} handleMenuCollapse={toggleMenu} />
      <Layout>
        <ContentHeader />
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
