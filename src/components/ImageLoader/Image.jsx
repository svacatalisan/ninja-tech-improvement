/**
 * Created by alexcatalisan on 13.11.2017.
 */
import { translate } from 'react-i18next';
import React from 'react';


class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSrc: this.props.primaryImageSrc || 'http://labs.google.com/ridefinder/images/mm_20_blue.png'
    };
    this.handleError = this.handleError.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.state.imageSrc = nextProps.primaryImageSrc;
  }
  handleError(error) {
    this.setState({ imageSrc: this.props.failOverImageSrc });
  }
  render() {
    const { t } = this.props;

    return (
      <img onError={this.handleError} src={this.state.imageSrc} alt={t(this.props.altText)} className="icon" />
    );
  }
}
export default translate('translations')(Image);

Image.propTypes = {
  altText: React.PropTypes.string.isRequired,
  primaryImageSrc: React.PropTypes.string.isRequired,
  failOverImageSrc: React.PropTypes.string.isRequired
};
