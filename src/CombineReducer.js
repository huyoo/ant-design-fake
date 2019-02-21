/**
 * create by huyoo ON 2019/2/21
 */

import {combineReducers} from "redux"
import stepForm from "./page/form/StepForm/model/Action"
import form from "./page/form/BasicForm/model/FormAction"
import menuPath from './component/SiderMenu/model/MenuAction'


export default combineReducers({
    stepForm, form, menuPath
});