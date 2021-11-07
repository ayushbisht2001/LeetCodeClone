import { combineReducers } from "redux";
import codeReducer from './codes.js';

const rootReducer = combineReducers({
    codes : codeReducer
})

export default rootReducer;
