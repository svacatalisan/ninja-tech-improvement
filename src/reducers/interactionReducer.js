/**
 * Created by alexcatalisan on 09.11.2017.
 */

import actionTypes from '../actions/interactionsActions/actionTypes';

export default function interactionReducer(state = {}, action) {
    switch (action.type) {
        case actionTypes.TOGGLE_COMPONENT:
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