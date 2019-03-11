import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Offer from '../../../components/AppWrapper/Offer';

class OfferContainer extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  handleClickStartChat = () => {};

  render() {
    const { className } = this.props;

    return (
      <Offer
        onClickStartChat={this.handleClickStartChat}
        className={className}
      />
    );
  }
}

export default OfferContainer;
