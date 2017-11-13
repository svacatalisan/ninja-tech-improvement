/**
 * Created by alexcatalisan on 09.11.2017.
 */

/**
 * Created by alexcatalisan on 09.11.2017.
 */
import React, { Component } from 'react';
import { translate } from 'react-i18next';
import RaisedButton from 'material-ui/RaisedButton';

class RaisedButtonWrapper extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const style = {
      margin: 12
    };
    return (
      <RaisedButton label="Default" style={style} />
    );
  }
}

export default translate('translations')(RaisedButtonWrapper);

