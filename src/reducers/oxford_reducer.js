import { FETCH_OXFORD } from '../actions/index';

export default (state = {}, action) => {
  
  switch (action.type) {
    case FETCH_OXFORD:
      return { ...state, ['oxfordDef']: action.payload.data }
    
    default:
      return state;
  }
}