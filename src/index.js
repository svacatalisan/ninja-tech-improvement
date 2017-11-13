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
import configureStore from './utils/store';

const store = configureStore({});
window.dispatch = store.dispatch;
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <CookiesProvider>
        <I18nextProvider i18n={ i18n() }>
          <MuiThemeProvider>
            <Route exact name='/' component={App}/>
          </MuiThemeProvider>
        </I18nextProvider>
      </CookiesProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
);
