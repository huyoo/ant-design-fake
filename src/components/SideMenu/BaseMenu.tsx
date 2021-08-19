/**
 * @DECS:
 * @AUTH: hy
 * @DATE: 2021-08-17
 */
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Menu} from "antd";

const menuData = require("../../../config/route.config")

const {Item, SubMenu} = Menu;

function createMenu(menu, i = '0') {
  return menu.map((item, index) => {
    const {
        path,
        children,
        icon,
        name
      } = item,
      key = i + index + "";

    if (path && !children?.length) {
      return <Item key={key}> {getLink(item)}</Item>;
    } else if (children?.length) {

      // @ts-ignore
      return <SubMenu key={key} title={(icon ? (<span>{getIcon(icon)}<span>{name}</span></span>) : name)}>
        {createMenu(children, key)}
      </SubMenu>;
    }
    return null;
  }).filter(e => e);
}

//遍历菜单数据，生成组件
const formatter = menu => {
  if (!menu) return [];

  return menu.map(item => {
    if (!item.name && !item?.routes) return null;

    let result = {
      name: item.name,
      children: undefined,
      path: item.path
    };

    if (item.routes) {
      result.children = formatter(item.routes);
    }

    if (!item.name) {
      return result.children[0];
    }

    if (!result.children?.length) {
      delete result.children
    }

    return result;
  }).filter(Boolean)
};

//路径
const getLink = ({path, name}) => {
  return <Link to={path || null}>{name}</Link>
};
//图标
const getIcon = icon => {
  return null// <Icon type={icon} theme="outlined"/>
};

export interface BaseMenuProp {
}

const BaseMenu: React.FC<BaseMenuProp> = () => {
  const [path, setPath] = useState(['000', '00']);

  const handleClick = (ev) => {
    console.log('menuClick', ev);
    setPath(ev.keyPath)
  }

  return (
    <Menu theme="dark"
          mode="inline"
          defaultOpenKeys={path}
          selectedKeys={[path[0]]}
          onClick={handleClick}>
      {createMenu(formatter(menuData))}
    </Menu>
  )
}

export default BaseMenu;
