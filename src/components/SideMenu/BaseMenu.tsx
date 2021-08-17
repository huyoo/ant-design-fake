/**
 * @DECS:
 * @AUTH: hy
 * @DATE: 2021-08-17
 */
import React, {useState} from "react";
import {Link} from "react-router-dom";
import { Menu} from "antd";
import menuData from "../../config/menu.config"

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

        if (path) {
            return <Item key={key}> {getLink(item)}</Item>;
        } else if (children) {

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
        const {
            path,
            hideInMenu,
            hideChildInMenu,
            routes,
            name
        } = item;
        if (!name || hideInMenu || (!path && !routes))
            return null;

        let result = {
            ...item
        };
        if (!hideChildInMenu && routes) {
            result.children = formatter(routes);
        }
        delete result.routes;
        delete result.component;

        return result;
    }).filter(e => e);
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
        console.log('menuClick',ev);
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