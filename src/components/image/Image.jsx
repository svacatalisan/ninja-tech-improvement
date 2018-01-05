/**
 * Created by alexcatalisan on 13.11.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSrc: this.props.primaryImageSrc
    };
    this.handleError = this.handleError.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      imageSrc: nextProps.primaryImageSrc
    });
  }
  handleError(error) {
    this.setState({ imageSrc: this.props.fallBackSrc });
  }
  render() {
    const { t } = this.props;

    return (
      <img
        alt={t(this.props.altText)}
        className="icon"
        onError={this.handleError}
        src={this.state.imageSrc}
      />
    );
  }
}

Image.propTypes = {
  altText: PropTypes.string.isRequired,
  primaryImageSrc: PropTypes.string.isRequired,
  fallBackSrc: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  const { propsFromState } = ownProps;
  return createStateToPropsMapping(state, propsFromState);
}

const connectedComponent = connect(mapStateToProps)(Image);

export default translate('translations')(connectedComponent);
