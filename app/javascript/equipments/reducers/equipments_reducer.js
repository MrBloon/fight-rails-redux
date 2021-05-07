import { INCREASE_EQUIPMENT_QUANTITY } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case INCREASE_EQUIPMENT_QUANTITY:
      const copiedState = state.slice(0);
      return copiedState
    default:
      return state;
  }
}
