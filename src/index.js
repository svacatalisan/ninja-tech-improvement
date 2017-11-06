/* global window, document */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter as Router, Route } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { I18nextProvider } from 'react-i18next';
import i18n from './utils/i18n';

// Alex: here the routing creation should be applied
ReactDOM.render(
      <Router>
        <CookiesProvider>
          <I18nextProvider i18n={ i18n() }>
            <Route exact name='/' component={App}/>
          </I18nextProvider>
        </CookiesProvider>
      </Router>,
  document.getElementById('root'));
