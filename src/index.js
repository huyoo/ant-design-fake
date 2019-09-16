import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {ConfigProvider} from "antd";
import locale from "antd/lib/locale-provider/zh_CN"

ReactDOM.render(
	<ConfigProvider  locale={locale}>
		<App />
	</ConfigProvider>, document.getElementById('root'));
registerServiceWorker();
