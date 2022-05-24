import React, {ReactNode} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './index.css';
import 'antd/dist/antd.css';
import {cloneDeep} from 'lodash';
import Login from "./pages/Login";
import BasicLayout from "./layouts/BasicLayout";
import Exception403 from "./pages/exception/Exception403";

const routes = cloneDeep(require('../config/route.config'));

function routeLoad(menuList) {
  for (let i = 0; i < menuList.length; i++) {
    const item = menuList[i];

    if (item.component) {
      // TODO 异步加载的配置暂时没找到更好的方案，后续再研究
      // @ts-ignore
      item.component = __webpack_require__(item.component.replace('./', './src/') + '.tsx').default;
    }

    if (item.routes?.length) {
      routeLoad(item.routes);
    }
  }
}

const render = (menuList) => {
  let route: ReactNode[] = [];

  menuList.forEach((item, index) => {
    if (item.routes?.length) {
      if (item.component) {
        const Page = item.component;

        // route.push(<Page>{render(item.routes)}</Page>);

        route.push(<Route key={index} path={item.path} element={<Page />}>{render(item.routes)}</Route>);
        return;
      }
      route = route.concat(render(item.routes));
      return;
    }

    if (item.component && item.name) {
      route.push(<Route key={item.name} path={item.path} element={item.component} />);
    }
  });

  return route as any;
};

routeLoad(routes);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<React.StrictMode>
  <BrowserRouter>
    <Routes>
      {/*{render(routes)}*/}
      <Route path="login" element={<Login />} />
      <Route path="/">
        <>
          <Route path="/exception/403" element={<Exception403 />} />
        </>
      </Route>
    </Routes>
  </BrowserRouter>
</React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
