import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {ConfigProvider} from "antd"
import locale from "antd/lib/locale-provider/zh_CN"
import 'moment/locale/zh-cn';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <ConfigProvider  locale={locale}>
        <App/>
    </ConfigProvider>, document.getElementById('root'));
registerServiceWorker();
