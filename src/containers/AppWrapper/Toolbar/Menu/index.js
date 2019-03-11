import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Menu from '../../../../components/AppWrapper/Toolbar/Menu';

class MenuContainer extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const { className } = this.props;

    return <Menu className={className} />;
  }
}

export default MenuContainer;
