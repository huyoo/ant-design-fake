/**
 * @DECS:
 * @AUTH: hy
 * @DATE: 2021-08-17
 */
import React from "react";
import {Layout} from "antd";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";

const style = {
  zIndex: 9,
  boxShadow: "0 1px 3px rgba(0,21,41,.15)",
  backgroundColor: "white"
};

export interface ContentHeaderProp {
  collapsed: boolean
  handleMenuCollapse: () => void
}

const ContentHeader: React.FC<ContentHeaderProp> = (props) => {
  const {collapsed, handleMenuCollapse} = props;

  return (
    <Layout.Header style={style}>
      <span onClick={handleMenuCollapse}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </span>
    </Layout.Header>
  );
};

export default ContentHeader;
