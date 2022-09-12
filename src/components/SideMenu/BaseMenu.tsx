import React, {useEffect, useMemo, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {Menu} from "antd";
import {Icon} from "@ant-design/compatible";
import {useIntl} from "react-intl";
import {observer} from "mobx-react";
import {useStores} from "@/stores";

const menuData = require("../../../config/route.config");

// 图标
const getIcon = (icon:string) => {
  // @ts-ignore
  return <Icon type={icon} />;
};

// 查找当前页面对应的展开路径
let initSelectedKeyPath = [];
const findMenuPath = (menuList, currentRoute) => {
  for (const menuElement of menuList) {
    if (menuElement.path === currentRoute) {
      initSelectedKeyPath.unshift(menuElement.key);
      return true;
    }

    if (menuElement.children) {
      initSelectedKeyPath.unshift(menuElement.key);

      if (findMenuPath(menuElement.children, currentRoute)){
        return true;
      }

      initSelectedKeyPath.shift();
    }
  }

  return false;
};

type BaseMenuProps = {
  collapsed: Boolean
}

const BaseMenu: React.FC<BaseMenuProps> = ({collapsed}) => {
  const [path, setPath] = useState([]);

  const intl = useIntl();
  const {login: {locale, userInfo}} = useStores();
  const menu = useMemo(() => {

    //遍历菜单数据，生成组件
    const formatter = menuList => {
      if (!menuList) {
        return [];
      }

      return menuList.map(item => {
        if (!item.name && !item?.routes || item.hideInMenu) {
          return null;
        }

        // 判断登录用户角色是否允许查看页面
        if (item?.authority?.length && !item.authority.includes(userInfo.role)){
          return null;
        }

        let result = {
          name: item.name,
          label: item.name && intl.formatMessage({id: item.name}, item.name),
          children: undefined,
          path: item.path,
          icon: item.icon && getIcon(item.icon),
          key: item.path,
        };

        if (item.routes) {
          result.children = formatter(item.routes);

          if (!result.children?.length) {
            return null;
          }
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

    return formatter(menuData);
  }, [locale, userInfo]);

  const location = useLocation();
  useEffect(() => {
    initSelectedKeyPath = [];
    findMenuPath(menu, location.pathname);
    setPath(initSelectedKeyPath);
  }, [collapsed]);

  const navigate = useNavigate();
  const handleClick = ev => {
    setPath(ev.keyPath);
    navigate(ev.key);
  };

  const handleOpen = keyPath => {
    setPath(keyPath);
  };

  return (
    <Menu
      theme="dark"
      mode="inline"
      openKeys={path}
      selectedKeys={[path[0]]}
      onClick={handleClick}
      onOpenChange={handleOpen}
      items={menu}
    />
  );
};

export default observer(BaseMenu);
