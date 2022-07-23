import React from "react";
import {Layout, Space} from "antd";
import UserMenu from "./UserMenu";
import style from './style.less';
import SelectLang from "@/components/ContentHeader/SelectLang";

const prefixCls = 'content-header';

const ContentHeader: React.FC = () => {

  return (
    <Layout.Header className={style.contentHeader}>
      <div className={prefixCls+'-right'}>
        <Space >
          <UserMenu />
          <SelectLang />
        </Space>
      </div>
    </Layout.Header>
  );
};

export default ContentHeader;
