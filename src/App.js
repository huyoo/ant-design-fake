import React, {Component} from 'react';
import {Provider} from "react-redux"
import intl from "react-intl-universal"
import {BrowserRouter, Switch,} from "react-router-dom"
import {createStore} from "redux";
import combineReducer from "./CombineReducer"
import './App.css';
import zh_CN from "./locale/zh_CN";
import en_US from "./locale/en_US"
import BasicLayout from "./layout/BasicLayout";
import BasicForm from "./page/form/BasicForm/BasicForm";
import {Route} from "react-router";
import Exception403 from "./page/exception/403";
import Exception500 from "./page/exception/500";
import Exception404 from "./page/exception/404";
import Analysis from "./page/dashboard/Analysis";
import StepInfoForm from "./page/form/StepForm/Step1";
import StepConfirmForm from "./page/form/StepForm/Step2";
import StepResult from "./page/form/StepForm/Step3";
import AutoHeightTable from "./component/AutoHeightTable";
import Context from "./page/newFeature/Context";
import HooksComponent from "./page/newFeature/Hooks";
import TableList from "./page/list/TableList";
import ImgPage from "./page/ImgPage";

require("./mock");

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

							<Route component={AutoHeightTable} path='/component/auto-height-table'/>
							<Route component={ImgPage} path='/carousel'/>
						</BasicLayout>
					</Switch>
				</BrowserRouter>
			</Provider>
		)
	}
}