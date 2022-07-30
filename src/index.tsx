import React, {ReactNode} from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter, Navigate, Route, Routes} from "react-router-dom";
import 'antd/dist/antd.css';
import {cloneDeep} from 'lodash';
import {Provider} from 'mobx-react';
import IntlControl from "@/IntlControl";
import stores from './stores';
import './index.css';

/** 生成路由 */
const routes = cloneDeep(require('../config/route.config'));

const routeLoad = (menuList) => {
  for (let i = 0; i < menuList.length; i++) {
    const item = menuList[i];

    if (item.component) {
      const path = item.component;

      // TODO 异步加载的配置暂时没找到更好的方案，后续再研究
      try {
        // @ts-ignore
        item.component = require(item.component + '.tsx').default;// __webpack_require__(item.component.replace('./', './src/') + '.tsx').default;
      } catch (e) {
        // @ts-ignore
        item.component = require(path + '/index.tsx').default;// __webpack_require__(path.replace('./', './src/') + '/index.tsx').default;
      }

      // if (!item.component) {
      //   // @ts-ignore
      //   item.component = require(item.component+ '/index.tsx').default;// __webpack_require__(path.replace('./', './src/') + '/index.tsx').default;
      // }
    }

    if (item.routes?.length) {
      routeLoad(item.routes);
    }
  }
};

const render = (menuList) => {
  let route: ReactNode[] = [];

  menuList.forEach((item, index) => {
    if (item.redirect) {
      route.push(<Route key={"redirect-" + index} path={item.path} element={<Navigate to={item.redirect} />} />);
      return;
    }

    if (item.routes?.length) {
      if (item.component) {
        const Page = item.component;

        route.push(<Route key={item.name + index} path={item.path} element={<Page />}>{render(item.routes)}</Route>);
        return;
      }
      route = route.concat(render(item.routes));
      return;
    }

    if (item.component && item.name) {
      const Page = item.component;
      route.push(<Route key={item.name} path={item.path} element={<Page />} />);
    }
  });

  return route as any;
};

routeLoad(routes);

/** 渲染 */
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<React.StrictMode>
  <Provider {...stores}>
    <IntlControl>
      <HashRouter>
        <Routes>
          {render(routes)}
        </Routes>
      </HashRouter>
    </IntlControl>
  </Provider>
</React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
