/* global window, document */

import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { I18nextProvider } from 'react-i18next';
import i18n from './utils/i18n';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './utils/store';

const store = configureStore({});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <CookiesProvider>
        <I18nextProvider i18n={ i18n() }>
          <Route exact name='/' component={App}/>
        </I18nextProvider>
      </CookiesProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
);
