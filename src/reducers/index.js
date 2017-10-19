import { combineReducers } from 'redux';
import OxfordReducer from './oxford_reducer';
import WebsterReducer from './webster_reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  oxford: OxfordReducer,
  webster: WebsterReducer
});

export default rootReducer;