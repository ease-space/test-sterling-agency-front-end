import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Footer from '../../../components/AppWrapper/Footer/index';

class FooterContainer extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    const { className } = this.props;

    return <Footer className={className} />;
  }
}

export default FooterContainer;
