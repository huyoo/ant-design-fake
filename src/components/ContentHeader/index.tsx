import React from "react";
import {Layout, Space} from "antd";
import UserMenu from "./UserMenu";
import style from './style.less';

const prefixCls = 'content-header';

const ContentHeader: React.FC = () => {

  return (
    <Layout.Header className={style.contentHeader}>
      <div className={prefixCls+'-right'}>
        <Space >
          <UserMenu />
        </Space>
      </div>
    </Layout.Header>
  );
};

export default ContentHeader;
