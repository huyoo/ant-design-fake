import {createStore, combineReducers} from "redux"
import {add} from "../action/FormAction"


const initialList = (state = {}, action) => state;

export default createStore(combineReducers({
    formState: add,
    list: initialList
}));