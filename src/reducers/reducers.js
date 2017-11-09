/**
 * Created by alexcatalisan on 09.11.2017.
 */

import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import interactionReducer from './interactionReducer';
import errorReducer from './errorReducer';

export default function createReducer(asyncReducers) {
  return combineReducers({
    dataReducer,
    interactionReducer,
    errorReducer,
    ...asyncReducers
  });
}
