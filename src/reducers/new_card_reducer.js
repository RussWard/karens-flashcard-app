import { LOAD_FLASHCARD } from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case LOAD_FLASHCARD:
      return {
        word: action.payload.word,
        type: action.payload.type,
        def: action.payload.definition
      }
    default:
      return state;
  }
}
