import React, { Component } from 'react';
// import {Provider} from "react-redux"
import {Router, Route, browserHistory} from "react-router"
import Home from "./page/Home"
import ImgPage from "./page/ImgPage"
import BasicForm from "./page/form/BasicForm"
import './App.css';

class App extends Component {
  render() {
      return (
              <Router history={browserHistory}>
                  <Route path="/" component={Home}/>
                  <Route path="/home" component={Home}/>
                  <Route path={"/form"}>
                      <Route path={"/form/basicForm"} component={BasicForm}/>
                  </Route>
                  <Route path={"/carousel"} component={ImgPage}/>
              </Router>
      )
  }
}

export default App;
