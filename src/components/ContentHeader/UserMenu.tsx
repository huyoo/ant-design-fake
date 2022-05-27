import React from "react";
import {Avatar, Dropdown, Menu} from "antd";
import {LogoutOutlined, SettingOutlined, UserOutlined} from "@ant-design/icons";
import style from './style.less';
import { Link } from "react-router-dom";

export interface UserMenuProp {
}

const UserMenu: React.FC<UserMenuProp> = () => {

  // const handleLogout;

  const menu = (
    <Menu className={style.headerMenu}>
      <Menu.Item>
        <UserOutlined />
        <span>个人中心</span>
      </Menu.Item>
      <Menu.Item>
        <SettingOutlined />
        <span>个人设置</span>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <Link to={'/login'}>
          <LogoutOutlined />
          <span>退出登录</span>
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <span>
        <Avatar size={24} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <span>Username</span>
      </span>
    </Dropdown>
  );
};

export default UserMenu;
