import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Toolbar from '../../../components/AppWrapper/Toolbar';

class ToolbarContainer extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const { className } = this.props;

    return <Toolbar className={className} />;
  }
}

export default ToolbarContainer;
