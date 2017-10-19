import { FETCH_WEBSTER } from '../actions/index';

export default (state = {}, action) => {
  console.log('Action recieved ', action)
  switch (action.type) {
    case FETCH_WEBSTER:
      return { ...state, ['websterDef']: action.payload.data }
    
    default:
      return state;
  }
}