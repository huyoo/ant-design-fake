import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Menu} from "antd";
import {Icon} from "@ant-design/compatible";

const menuData = require("../../../config/route.config");

const {Item, SubMenu} = Menu;

const createMenu = (menu, i = '0') => {
  return menu.map((item, index) => {
    const {
      path,
      children,
      icon,
      name
    } = item;
    const key = i + index + "";

    if (path && !children?.length) {
      return <Item key={key}> {getLink(item)}</Item>;
    } else if (children?.length) {
      return (
        <SubMenu key={key} icon={icon && getIcon(icon)} title={name}>
          {createMenu(children, key)}
        </SubMenu>
      );
    }
    return null;
  }).filter(e => e);
};

//遍历菜单数据，生成组件
const formatter = menu => {
  if (!menu) {
    return [];
  }

  return menu.map(item => {
    if (!item.name && !item?.routes || item.hideInMenu) {
      return null;
    }

    let result = {
      name: item.name,
      children: undefined,
      path: item.path,
      icon: item.icon
    };

    if (item.routes) {
      result.children = formatter(item.routes);
    }

    if (!item.name) {
      return result.children;
    }

    if (!result.children?.length) {
      delete result.children;
    }

    return result;
  }).filter(Boolean).flat(1);
};

//路径
const getLink = ({path, name}) => {
  return <Link to={path || null}>{name}</Link>;
};

// 图标
const getIcon = (icon:string) => {
  // @ts-ignore
  return <Icon type={icon} />;
};

const BaseMenu: React.FC = () => {
  const [path, setPath] = useState(['000', '00']);

  const handleClick = (ev) => {
    setPath(ev.keyPath);
  };

  return (
    <Menu theme="dark"
      mode="inline"
      defaultOpenKeys={path}
      selectedKeys={[path[0]]}
      onClick={handleClick}
    >
      {createMenu(formatter(menuData))}
    </Menu>
  );
};

export default BaseMenu;
