import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import promise from 'redux-promise';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(promise)
);

export default store;
