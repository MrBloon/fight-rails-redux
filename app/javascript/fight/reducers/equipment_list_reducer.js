import { UPDATE_EQUIPMENT_LIST } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case UPDATE_EQUIPMENT_LIST:
      const copiedState = state.filter(function(value, index, state){
        return value.id != action.payload.id
      });
      return copiedState;
    default:
      return state;
  }
}
