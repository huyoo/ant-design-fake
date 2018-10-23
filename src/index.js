import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {LocaleProvider} from "antd"
import locale from "antd/lib/locale-provider/zh_CN"
import 'moment/locale/zh-cn';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <LocaleProvider locale={locale}>
        <App />
    </LocaleProvider>, document.getElementById('root'));
registerServiceWorker();
