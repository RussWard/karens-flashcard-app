import { GET_FLASHCARDS } from '../actions';

export default (state = {}, action) => {
  console.log('action recieved =====> ', action)
  switch (action.type) {
    case GET_FLASHCARDS:
      return { ...action.payload.data }
    default: 
      return state;
  }
}