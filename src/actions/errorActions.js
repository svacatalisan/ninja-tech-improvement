/**
 * Created by alexcatalisan on 09.11.2017.
 */

import * as Type from './actionTypes';

let nextTodoId = 0;

export const submit = (payload) => ({
  type: Type.SUBMIT,
  id: nextTodoId,
  text: 'Alex'
});
