import React, {ReactNode, Suspense} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './index.css';
import 'antd/dist/antd.css';
import {cloneDeep} from 'lodash';

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

function render(menuList) {

  let route: ReactNode[] = [];

  menuList.forEach((item, index) => {
    if (item.routes?.length) {
      if (item.component) {
        const Page = item.component;

        route.push(<Page>{render(item.routes)}</Page>);
        return;
      }
      route = route.concat(render(item.routes));
      return;
    }

    if (item.component && item.name) {
      route.push(<Route key={item.name} path={item.path} component={item.component} />);
    }
  });

  return route;
}

routeLoad(routes);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Suspense fallback={<div>加载中</div>}>
          {render(routes)}
        </Suspense>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
