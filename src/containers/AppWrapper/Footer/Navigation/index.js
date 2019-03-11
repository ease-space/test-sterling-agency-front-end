import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Navigation from '../../../../components/AppWrapper/Footer/Navigation/index';

class NavigationContainer extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const { className } = this.props;

    return <Navigation onClickLink className={className} />;
  }
}

export default NavigationContainer;
