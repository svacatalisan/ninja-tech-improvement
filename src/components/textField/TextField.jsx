/**
 * Created by alexcatalisan on 09.11.2017.
 */
import React, { Component } from 'react';
import { translate } from 'react-i18next';
import TextField from 'material-ui/TextField';

class TextFieldWrapper extends Component {
  constructor(props) {
    super(props);
    this.state={};
  }

  render() {
    return (
      <TextField
        {...this.props}
      />
    );
  }
}

export default translate('translations')(TextFieldWrapper);

