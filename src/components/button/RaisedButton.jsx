/**
 * Created by alexcatalisan on 09.11.2017.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import RaisedButton from 'material-ui/RaisedButton';
import { createStateToPropsMapping } from '../../utils/utilities';

class RaisedButtonWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <RaisedButton
        {...this.props}
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { propsFromState } = ownProps;
  return createStateToPropsMapping(state, propsFromState);
}

const connectedComponent = connect(mapStateToProps)(RaisedButtonWrapper);

export default translate('translations')(connectedComponent);

