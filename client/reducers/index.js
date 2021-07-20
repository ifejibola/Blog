// Combine reducers
import { combineReducers } from "redux";
import common from './common'
import articlesReducer from "./articles";

export default combineReducers({
    common,
    articlesReducer,
});