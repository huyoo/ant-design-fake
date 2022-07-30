import React from "react";
import {Dropdown, Menu} from "antd";
import {TranslationOutlined} from "@ant-design/icons";
import {useStores} from "@/stores";
import { observer } from "mobx-react";

const style = {fontSize: 20, padding: '0 4px', color: 'rgba(0, 0, 0, 0.85)'};
const menu = [
  {label: 'US English', key: 'en-US'},
  {label: 'CN 中文简体', key: 'zh-CN'},
];

const SelectLang: React.FC = () => {
  const {login} = useStores();

  const handleSelect = info => {
    login.updateLocale(info.key);
  };

  return (
    <Dropdown overlay={<Menu items={menu} selectable selectedKeys={[login.locale || 'zh-CN']} onSelect={handleSelect} />}>
      <div>
        <TranslationOutlined style={style} />
      </div>
    </Dropdown>

  );
};

export default observer(SelectLang);
