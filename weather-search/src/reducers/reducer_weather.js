import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // This is the same as return state.concat([action.payload.data]);
      return [action.payload.data, ...state];
    default:
      return state;
  }
}
