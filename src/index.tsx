import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import BasicLayout from './layouts/BasicLayout';
import {Exception403, Exception404, Exception500} from "./pages/exception"
import './index.css';
import 'antd/dist/antd.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <BasicLayout>
          <Route path='/exception/403'>
            <Exception403/>
          </Route>
          <Route path='/exception/404'>
            <Exception404/>
          </Route>
          <Route path='/exception/500'>
            <Exception500/>
          </Route>
        </BasicLayout>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
