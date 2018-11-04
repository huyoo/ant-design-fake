import React, { Component } from 'react';
import {Provider} from "react-redux"
import store from "./model/reducer/index"
import {Router, Route, browserHistory} from "react-router"
import Home from "./page/Home"
import ImgPage from "./page/ImgPage"
import BasicForm from "./page/form/BasicForm"
import TableList from "./page/list/TableList"
import './App.css';


export default class App extends Component {
  render() {
      return (
          <Provider store={store}>
              <Router history={browserHistory}>
                  <Route path="/" component={Home}/>
                  <Route path="/home" component={Home}/>
                  <Route path={"/form"}>
                      <Route path={"/form/basicForm"} component={BasicForm}/>
                  </Route>
                  <Route>
                      <Route path="/list/table-list" component={TableList}/>
                  </Route>
                  <Route path={"/carousel"} component={ImgPage}/>
              </Router>
          </Provider>
      )
  }
}
