import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { withCookies } from 'react-cookie';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const { cookies, i18n } = this.props;
    i18n.changeLanguage('en');
  }

  render() {
    const { t } = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {t('advice')}
        </p>
      </div>
    );
  }
}

export default withCookies(translate('translations')(App));
