/**
 * Created by alexcatalisan on 09.11.2017.
 */

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createReducer from '../reducers/reducers';

//Init global store based on initial state and set reducers */
export default function configureStore(initialState) {
  const store = createStore(createReducer(), applyMiddleware(thunk, logger));
  store.asyncReducers = {};
  return store;
}

/* if there will be the case to add reducers by the flow */
export function injectAsyncReducer(store, namespace, name, asyncReducer) {
  store.asyncReducers[namespace][name] = asyncReducer;
  store.replaceReducer(createReducer(store.asyncReducers));
}
