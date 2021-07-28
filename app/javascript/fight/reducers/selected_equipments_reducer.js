import { SET_SELECTED_EQUIPMENT_LIST } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case SET_SELECTED_EQUIPMENT_LIST:
      const copiedState = state.slice(0);
      copiedState.push(action.payload);
      return copiedState;
    default:
      return state;
  }
}
