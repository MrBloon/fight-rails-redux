import { SET_FINAL_RESULT } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case SET_FINAL_RESULT:
      return action.payload;
    default:
      return state;
  }
}
