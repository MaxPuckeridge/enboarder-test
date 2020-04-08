import { createStore, combineReducers, compose } from 'redux';
import rootReducer from './reducer';

const { NODE_ENV } = process.env;
const isDevelopment = NODE_ENV === 'development';

const composeEnhancers =
  isDevelopment && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true,
        traceLimit: 25,
      })
    : compose;

const store = createStore(rootReducer, composeEnhancers());

export default store;
