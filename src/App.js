import React, {Component} from 'react';
import {Provider} from "react-redux"
import intl from "react-intl-universal"
import Route from "./config/router.config"
import {BrowserRouter, Switch,} from "react-router-dom"
import {createStore} from "redux";
import combineReducer from "./model/reducer/index"
import './App.css';
import zh_CN from "./locale/zh_CN";
import en_US from "./locale/en_US"

require("./mock");

let store = createStore(combineReducer);

export default class App extends Component {
    componentDidMount(){
        intl.init({
            currentLocale: 'zh_CN',
            locales: {
                "en_US": en_US,
                "zh_CN": zh_CN,
            }
        })
    }
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        {Route}
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}