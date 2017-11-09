/**
 * Created by alexcatalisan on 09.11.2017.
 */

/**
 * Created by alexcatalisan on 09.11.2017.
 */
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class RaisedButton extends Component {
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
      <RaisedButton
        label="Default Button"
      />
    );
  }
}

export default translate('translations')(RaisedButton);

