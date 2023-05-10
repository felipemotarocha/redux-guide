import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const store = createStore(rootReducer, applyMiddleware(logger));

export { store }
