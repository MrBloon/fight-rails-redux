import { DECREASE_GOLD_AMOUNT } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case DECREASE_GOLD_AMOUNT:
      return action.payload;
    default:
      return state;
  }
}
