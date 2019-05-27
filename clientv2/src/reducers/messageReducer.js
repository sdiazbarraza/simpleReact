
import { FETCH_MESSAGE } from '../actions/types';
export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_MESSAGE:
      const message = action.payload;
      console.log('FETCH_MESSAGE');
      return { ...state,  message };
    default:
       return state;
  }
}
