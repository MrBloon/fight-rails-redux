import { UPDATE_COMPUTER_HP } from '../actions';
import { SET_COMPUTER_HERO } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case SET_COMPUTER_HERO:
      return action.payload
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

