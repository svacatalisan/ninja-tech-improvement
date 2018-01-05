/**
 * Created by alexcatalisan on 09.11.2017.
 */

import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import configureReducers from '../reducers/reducers';

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);

export default function configureStore(reducerRegistry) {
    const rootReducer = configureReducers(reducerRegistry.getReducers());
    const store = createStoreWithMiddleware(rootReducer);

    // Reconfigure the store's reducer when the reducer registry is changed - we
    // depend on this for loading reducers via code splitting and for hot
    // reloading reducer modules.
    reducerRegistry.setChangeListener((reducers) => {
        store.replaceReducer(configureReducers(reducers))
    });

    return store;
};