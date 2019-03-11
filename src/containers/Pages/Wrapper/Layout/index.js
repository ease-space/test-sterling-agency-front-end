import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Layout from '../../../../components/Pages/Wrapper/Layout/index';

class LayoutContainer extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
      PropTypes.string,
    ]),
    className: PropTypes.string,
  };

  render() {
    const { children, className } = this.props;

    return <Layout className={className}>{children}</Layout>;
  }
}

export default LayoutContainer;
