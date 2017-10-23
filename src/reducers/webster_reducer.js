import { FETCH_WEBSTER } from '../actions/index';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_WEBSTER:
      return { 
        defs: action.payload.data.defArray,
        type: action.payload.data.type,
        word: action.payload.data.word
      }
    
    default:
      return state;
  }
}