/**
 * Created by alexcatalisan on 09.11.2017.
 */

import actionTypes from '../actions/errorActions/actionTypes';

export default function errorReducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.ATTACH_ERROR:
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