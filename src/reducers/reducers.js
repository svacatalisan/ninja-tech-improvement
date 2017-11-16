/**
 * Created by alexcatalisan on 09.11.2017.
 */
import { combineReducers } from 'redux';

export default function configureReducers(asyncReducers) {
  return combineReducers({
    ...asyncReducers
  });
}
