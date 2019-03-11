import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Wrapper from '../../../components/Pages/Wrapper';

class WrapperContainer extends Component {
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

    return <Wrapper className={className}>{children}</Wrapper>;
  }
}

export default WrapperContainer;
