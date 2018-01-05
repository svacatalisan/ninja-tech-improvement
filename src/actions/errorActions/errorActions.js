/**
 * Created by alexcatalisan on 09.11.2017.
 */

import actionTypes from './actionTypes';

let nextTodoId = 0;

export const submit = (payload) => ({
  type: actionTypes.SUBMIT,
  id: nextTodoId,
  text: 'Alex'
});
