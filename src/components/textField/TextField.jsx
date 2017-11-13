/**
 * Created by alexcatalisan on 09.11.2017.
 */
import React, { Component } from 'react';
import { translate } from 'react-i18next';
import TextField from 'material-ui/TextField';

class TextFieldWrapper extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    // check if component needs data to render
    // for example in view mode to populate it with data
  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    return (
      <TextField
        hintText="Demo Purpose"
        floatingLabelText="Demo Purpose"
      />
    );
  }
}

export default translate('translations')(TextFieldWrapper);

