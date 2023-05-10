import { combineReducers } from 'redux';

import { userReducer } from './user/reducer';
import { cartReducer } from './cart/reducer';

const rootReducer = combineReducers({
    userReducer,
    cartReducer,
});

export default rootReducer;
