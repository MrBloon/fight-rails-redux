import { UPDATE_COMPUTER_HP } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case UPDATE_COMPUTER_HP:
      const copiedState = {
        ...state,
        "hit_points": action.payload
      };
      return copiedState
    default:
      return state;
  }
}

