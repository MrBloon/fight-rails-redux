import { UPDATE_PLAYER_HP } from '../actions';
import { SET_PLAYER_HERO } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case SET_PLAYER_HERO:
      return action.payload;
    case UPDATE_PLAYER_HP:
      const copiedState = {
        ...state,
        "hit_points": action.payload
      };
      return copiedState
    default:
      return state;
  }
}
