import React, {useCallback, useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import {Layout} from "antd";
import SiderMenu from "../components/SideMenu";
import ContentHeader from "../components/ContentHeader";
import Foot from "../components/Footer";

const {Content, Footer} = Layout;

const BasicLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const windowListener = useCallback(() => {
    if (collapsed) {return;}

    const windowWidth = document.body.clientWidth;
    setCollapsed(windowWidth <= 994);
  }, [collapsed]);

  useEffect(() => {
    window.addEventListener('resize', windowListener);

    return () => {
      window.removeEventListener('resize', windowListener);
    };
  }, []);

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
