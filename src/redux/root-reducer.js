import { combineReducers } from "redux";

import userReducer from "./user/reducer";

const rootReducer = combineReducers({ userReducer });

export default rootReducer;
