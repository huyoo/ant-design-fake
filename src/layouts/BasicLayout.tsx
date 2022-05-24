/**
 * @DECS:
 * @AUTH: hy
 * @DATE: 2021-08-17
 */
import React, {useState} from "react";
import SiderMenu from "../components/SideMenu";
import ContentHeader from "../components/ContentHeader";
import Foot from "../components/Footer";
import Layout from "antd/lib/layout/layout";
import {Layout as Lay} from "antd";

const {Content, Footer} = Lay;

export interface BasicLayoutProp {
  children?: React.ReactNode
}

const BasicLayout: React.FC<BasicLayoutProp> = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleMenu = () => {
    setCollapsed(!collapsed);
  };

  console.log(props.children);

  return (
    <Layout style={{flexDirection: 'inherit'}}>
      <SiderMenu collapsed={collapsed} />
      <Layout>
        <ContentHeader collapsed={collapsed} handleMenuCollapse={toggleMenu} />
        <Content>{props.children}</Content>
        <Footer>
          <Foot />
        </Footer>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
