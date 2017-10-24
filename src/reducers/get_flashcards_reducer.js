import { GET_FLASHCARDS } from '../actions';

export default (state = null, action) => {
  switch (action.type) {
    case GET_FLASHCARDS:
      return [ ...action.payload.data ]
    default: 
      return state;
  }
}