/**
 * Created by alexcatalisan on 09.11.2017.
 */

import actionTypes from './actionTypes';

let nextTodoId = 0;

export const toggleComponent = (payload) => ({
    type: actionTypes.TOGGLE_COMPONENT,
    id: nextTodoId,
    text: 'Alex'
});