/**
 * Created by alexcatalisan on 09.11.2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { translate } from 'react-i18next';
import TextField from 'material-ui/TextField';
import { createStateToPropsMapping } from '../../utils/utilities';

class TextFieldWrapper extends Component {
  constructor(props) {
    super(props);
    this.state={};
    console.log('propsTotal', props)
  }

  render() {
    return (
      <TextField
        {...this.props}
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { propsFromState } = ownProps;
  return createStateToPropsMapping(state, propsFromState);
}

const connectedComponent = connect(mapStateToProps)(TextFieldWrapper);

export default translate('translations')(connectedComponent);

