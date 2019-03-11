import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CurrentProduct from '../../../../../components/Pages/Public/Product/Current/index';

class CurrentProductContainer extends Component {
  static propTypes = {
    match: PropTypes.object,
  };

  render() {
    return <CurrentProduct />;
  }
}

export default CurrentProductContainer;
