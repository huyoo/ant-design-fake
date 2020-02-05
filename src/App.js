import React, {Component, lazy, Suspense} from 'react';
import {Provider} from "react-redux"
import {Route} from "react-router";
import intl from "react-intl-universal"
import {BrowserRouter, Switch,} from "react-router-dom"
import {createStore} from "redux";
import {Spin} from "antd";
import 'moment/locale/zh-cn';
import combineReducer from "./CombineReducer"
import './App.css';
import zh_CN from "./locale/zh_CN";
import en_US from "./locale/en_US";
import {Exception403, Exception404, Exception500} from "./page/exception";
import BasicLayout from "./layout/BasicLayout";

const BasicForm = lazy(() => import('./page/form/BasicForm/BasicForm'));
const Analysis = lazy(() => import('./page/dashboard/Analysis'));
const StepInfoForm = lazy(() => import("./page/form/StepForm/Step1"));
const StepConfirmForm = lazy(() => import("./page/form/StepForm/Step2"));
const StepResult = lazy(() => import("./page/form/StepForm/Step3"));
const Context = lazy(() => import("./page/newFeature/Context"));
const HooksComponent = lazy(() => import("./page/newFeature/Hooks"));
const TableList = lazy(() => import("./page/list/TableList"));
const Carousel = lazy(() => import("./page/demo/carousel/Carousel"));
const AutoTable = lazy(() => import("./page/component/AutoTable"));
const Game = lazy(() => import("./page/demo/game/game"));

if (process.env.REACT_APP_SERVICE === 'local') {
    require("./mock");
}

let store = createStore(combineReducer);

export default class App extends Component {
    componentDidMount() {

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
                        <BasicLayout>
	                        <Suspense fallback={<Spin spinning/>}>
                            <Route component={Analysis} path='/dashboard/analysis'/>

                            <Route component={BasicForm} path='/form/basic-form'/>
                            <Route component={StepInfoForm} path='/form/step-form/info'/>
                            <Route component={StepConfirmForm} path='/form/step-form/confirm'/>
                            <Route component={StepResult} path='/form/step-form/result'/>

                            <Route component={TableList} path='/list/table-list'/>

                            <Route component={Exception403} path='/exception/403'/>
                            <Route component={Exception404} path='/exception/404'/>
                            <Route component={Exception500} path='/exception/500'/>

                            <Route component={Context} path='/feature/context'/>
                            <Route component={HooksComponent} path='/feature/hooks'/>

                            <Route component={AutoTable} path='/component/auto-height-table'/>
                            <Route component={Carousel} path='/demo/carousel'/>
                            <Route component={Game} path='/demo/game'/>
	                        </Suspense>
                        </BasicLayout>
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}
