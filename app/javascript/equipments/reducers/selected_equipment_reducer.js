import { SET_SELECTED_EQUIPMENT } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case SET_SELECTED_EQUIPMENT:
      return action.payload;
    default:
      return state;
  }
}
