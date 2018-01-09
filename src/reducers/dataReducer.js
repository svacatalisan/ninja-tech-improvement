/**
 * Created by alexcatalisan on 09.11.2017.
 */

import actionTypes from '../actions/dataActions/actionTypes';

const defaultState = {
    test2: {
        tesT: 'tst'
    }
};

export default function dataReducer(state = defaultState, action) {
    switch (action.type) {
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