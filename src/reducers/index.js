import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import OxfordReducer from './oxford_reducer';
import WebsterReducer from './webster_reducer';
import NewCardReducer from './new_card_reducer';
import GetFlashcardsReducer from './get_flashcards_reducer';

const rootReducer = combineReducers({
  oxford: OxfordReducer,
  webster: WebsterReducer,
  newCard: NewCardReducer,
  flashcards: GetFlashcardsReducer,
  form: formReducer
});

export default rootReducer;