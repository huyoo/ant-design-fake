import React, { Component } from 'react';
import Head from './component/head/head.js'
import Foot from './component/foot/foot'
// import Carousel  from "./component/carousel/carousel"
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
      return (
          <div>
              <Head/>
              {/*<Carousel/>*/}
              <Foot/>
          </div>
      )
  }
}

export default App;
