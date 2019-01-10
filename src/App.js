import React, {Component} from 'react';
import {Provider} from "react-redux"
import store from "./model/reducer/index"
import './App.css';
import Route from "./config/router.config"
import {BrowserRouter, Switch,} from "react-router-dom"

export default class App extends Component {
  render() {
      return (
          <Provider store={store}>
              <BrowserRouter>
                  <Switch>
                      { Route }
                  </Switch>
              </BrowserRouter>
          </Provider>
      )
  }
}
