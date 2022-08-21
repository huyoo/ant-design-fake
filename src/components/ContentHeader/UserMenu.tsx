import React, {useMemo} from "react";
import {Avatar, Dropdown, Menu} from "antd";
import {LogoutOutlined, SettingOutlined, UserOutlined} from "@ant-design/icons";
import style from './style.less';
import {useNavigate} from "react-router-dom";
import {useStores} from "@/stores";
import {ItemType} from "antd/lib/menu/hooks/useItems";

const menuOptions:ItemType[] = [
  {
    key: '1',
    label: '个人中心',
    icon: <UserOutlined />
  }, {
    key: '2',
    label: '个人设置',
    icon: <SettingOutlined />
  }, {
    type: 'divider',
  },
  {
    key: '3',
    label: '退出登录',
    icon: <LogoutOutlined />
  }
];

const UserMenu: React.FC = () => {
  const {login} = useStores();
  const {userInfo, locale} = login;

  const navigate = useNavigate();
  const handleLogout = () => {
    login.logout();
    navigate('/login');
  };

  const handleSelectMenu = (menuInfo) => {
    const operateFn = {
      3: handleLogout
    };

    operateFn[menuInfo.key]?.();
  };

  const menu = useMemo(() => {
    return <Menu className={style.headerMenu} items={menuOptions} onClick={handleSelectMenu} />;
  }, [locale]);

  return (
    <Dropdown overlay={menu}>
      <span>
        <Avatar size={24} src={userInfo.avatar} />
        <span>{userInfo.name}</span>
      </span>
    </Dropdown>
  );
};

export default UserMenu;
