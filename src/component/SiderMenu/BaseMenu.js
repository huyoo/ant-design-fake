import React, {Component} from "react"
import {Icon, Menu} from "antd"
import {Link} from "react-router-dom"
import menuData from "../../config/menu"
import {connect} from "react-redux";

const {Item, SubMenu} = Menu;

@connect(state => ({
    path: state.menuPath
}))
class BaseMenu extends Component {
    handleClick = e => {
        this.props.dispatch({
            type: "CLICK",
            data: e.keyPath
        });
    };

    render() {
        const [current, ...path] = this.props.path;
        return (
            <Menu theme="dark"
                  mode="inline"
                  defaultOpenKeys={path}
                  selectedKeys={[current]}
                  onClick={this.handleClick}>
                {createMenu(formatter(menuData))}
            </Menu>
        )
    }
}

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
    return <Icon type={icon} theme="outlined"/>
};

export default BaseMenu;