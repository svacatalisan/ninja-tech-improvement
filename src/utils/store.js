/**
 * Created by alexcatalisan on 09.11.2017.
 */

import { createStore } from 'redux';
import createReducer from '../reducers/reducers';

//Init global store based on initial state and set reducers */
export default function configureStore(initialState) {
  const store = createStore(createReducer(), initialState);
  store.asyncReducers = {};
  return store;
}

/* if there will be the case to add reducers by the flow */
export function injectAsyncReducer(store, name, asyncReducer) {
  store.asyncReducers[name] = asyncReducer;
  store.replaceReducer(createReducer(store.asyncReducers));
}
