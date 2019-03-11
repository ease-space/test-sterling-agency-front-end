import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Other from '../../../../components/AppWrapper/Footer/Other/index';

class OtherContainer extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const { className } = this.props;

    return <Other className={className} />;
  }
}

export default OtherContainer;
