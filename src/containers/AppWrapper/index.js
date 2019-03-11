import PropTypes from 'prop-types';
import React, { Component } from 'react';

import AppWrapper from '../../components/AppWrapper';

class AppWrapperContainer extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
      PropTypes.string,
    ]),
  };

  render() {
    const { children } = this.props;

    return <AppWrapper>{children}</AppWrapper>;
  }
}

export default AppWrapperContainer;
