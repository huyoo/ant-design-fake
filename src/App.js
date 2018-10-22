import React, { Component } from 'react';
// import {Provider} from "react-redux"
import {Router, Route, browserHistory} from "react-router"
import Home from "./page/home"
import ImgPage from "./page/imgPage"
import './App.css';

class App extends Component {
  render() {
      return (
              <Router history={browserHistory}>
                  <Route path="/" component={Home}/>
                  <Route path={"/carousel"} component={ImgPage}/>
                  <Route path={"/head"} component={Home}/>
                  {/*<Route path="/login" component={}/>*/}
                  {/*<Route path="*" component={}/>*/}
              </Router>
      )
  }
}

export default App;
