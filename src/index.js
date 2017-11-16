/* global window, document */

import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import { I18nextProvider } from 'react-i18next';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { HashRouter as Router, Route } from 'react-router-dom';

import i18n from './utils/i18n';
import App from './App';
import configureStore from './utils/configureStore';
import ReducerRegistry from './reducers/ReducerRegistry';
import { coreReducers } from './reducers/index';

window.reducerRegistry = new ReducerRegistry(coreReducers);

const store = configureStore(window.reducerRegistry);
ReactDOM.render(
  <CookiesProvider>
    <I18nextProvider i18n={ i18n() }>
      <Provider store={store}>
        <Router>
          <MuiThemeProvider>
            <Route exact name='/' component={App}/>
          </MuiThemeProvider>
        </Router>
      </Provider>
    </I18nextProvider>
  </CookiesProvider>,
  document.getElementById('root')
);
