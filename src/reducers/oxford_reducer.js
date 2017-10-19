import { FETCH_OXFORD } from '../actions/index';

export default (state = {}, action) => {
  console.log('Action recieved ', action)
  switch (action.type) {
    case FETCH_OXFORD:
      return { ...state, ['oxfordDef']: action.payload.data }
    
    default:
      return state;
  }
}