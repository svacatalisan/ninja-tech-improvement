/**
 * Created by alexcatalisan on 09.11.2017.
 */

import actionTypes from './actionTypes';

let nextTodoId = 0;

export const attachErrorsOnField = (payload) => ({
    type: actionTypes.ATTACH_ERROR,
    id: nextTodoId,
    text: 'Alex'
});