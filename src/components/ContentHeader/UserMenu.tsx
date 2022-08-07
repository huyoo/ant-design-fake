import React from "react";
import {Avatar, Dropdown, Menu} from "antd";
import {LogoutOutlined, SettingOutlined, UserOutlined} from "@ant-design/icons";
import style from './style.less';
import {useNavigate} from "react-router-dom";
import {useStores} from "@/stores";

const UserMenu: React.FC = () => {
  const {login} = useStores();
  const {userInfo} = login;

  const navigate = useNavigate();
  const handleLogout = () => {
    login.logout();
    navigate('/login');
  };

  const handleSelectMenu = (menuInfo) => {
    const operateFn = {
      3: handleLogout
    };

    operateFn[menuInfo.key]();
  };

  const menu = (
    <Menu className={style.headerMenu} onClick={handleSelectMenu}>
      <Menu.Item key="1">
        <UserOutlined />
        <span>个人中心</span>
      </Menu.Item>
      <Menu.Item key="2">
        <SettingOutlined />
        <span>个人设置</span>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">
        <LogoutOutlined />
        <span>退出登录</span>
      </Menu.Item>
    </Menu>
  );

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
