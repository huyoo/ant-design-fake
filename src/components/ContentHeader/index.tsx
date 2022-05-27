import React from "react";
import {Layout, Space} from "antd";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import UserMenu from "./UserMenu";
import style from './style.less';

const prefixCls = 'content-header';

export interface ContentHeaderProp {
  collapsed: boolean
  handleMenuCollapse: () => void
}

const ContentHeader: React.FC<ContentHeaderProp> = (props) => {
  const {collapsed, handleMenuCollapse} = props;

  return (
    <Layout.Header className={style.contentHeader}>
      <span onClick={handleMenuCollapse}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </span>

      <div className={prefixCls+'-right'}>
        <Space >
          <UserMenu />
        </Space>
      </div>
    </Layout.Header>
  );
};

export default ContentHeader;
