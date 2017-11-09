/**
 * Created by alexcatalisan on 09.11.2017.
 */

import * as actionTypes from '../actions/actionTypes';

export default function errorReducer(state, action) {
  switch(action.type) {
    case actionTypes.SUBMIT:
      return {
        ...state,
        text: action.text
      };
      break;
    default:
      return state;
      break;
  }
}
