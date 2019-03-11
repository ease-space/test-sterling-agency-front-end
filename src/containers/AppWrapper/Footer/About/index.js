import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';

import About from '../../../../components/AppWrapper/Footer/About/index';

const mapStateToProps = state => {
  return {
    buyers: state.ui.statistics.buyers,
    suppliers: state.ui.statistics.suppliers,
    products: state.ui.statistics.products,
    online: state.ui.statistics.online,
  };
};

@compose(connect(mapStateToProps))
class AboutContainer extends Component {
  static propTypes = {
    className: PropTypes.string,
    buyers: PropTypes.number,
    suppliers: PropTypes.number,
    products: PropTypes.number,
    online: PropTypes.number,
  };

  render() {
    const { className, buyers, suppliers, products, online } = this.props;

    return (
      <About
        className={className}
        buyers={buyers}
        suppliers={suppliers}
        products={products}
        online={online}
      />
    );
  }
}

export default AboutContainer;
