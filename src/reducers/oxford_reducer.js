import { FETCH_OXFORD } from '../actions/index';

export default (state = {}, action) => { 
  switch (action.type) {
    case FETCH_OXFORD:
      return { 
        defs: action.payload.data.defArray,
        type: action.payload.data.type,
        word: action.payload.data.word
      }
    
    default:
      return state;
  }
}