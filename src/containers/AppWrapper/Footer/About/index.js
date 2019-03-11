import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';

import About from '../../../../components/AppWrapper/Footer/About/index';

const mapStateToProps = state => {
  return {
    buyers: state.ui.footer.buyers,
    suppliers: state.ui.footer.suppliers,
    products: state.ui.footer.products,
  };
};

@compose(connect(mapStateToProps))
class AboutContainer extends Component {
  static propTypes = {
    className: PropTypes.string,
    buyers: PropTypes.number,
    suppliers: PropTypes.number,
    products: PropTypes.number,
  };

  render() {
    const { className, buyers, suppliers, products } = this.props;

    return (
      <About
        className={className}
        buyers={buyers}
        suppliers={suppliers}
        products={products}
      />
    );
  }
}

export default AboutContainer;
