import { combineReducers } from 'redux';
import OxfordReducer from './oxford_reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  oxford: OxfordReducer
});

export default rootReducer;