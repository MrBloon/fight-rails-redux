import { SET_SELECTED_CLASS } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case SET_SELECTED_CLASS:
      return action.payload;
    default:
      return state;
  }
}
