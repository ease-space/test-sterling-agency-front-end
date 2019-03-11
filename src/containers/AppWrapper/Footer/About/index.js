import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';

import About from '../../../../components/AppWrapper/Footer/About/index';

const mapStateToProps = state => {
  return {
    buyers: state.fetch.statistics.buyers,
    suppliers: state.fetch.statistics.suppliers,
    products: state.fetch.statistics.products,
    countOnline: state.fetch.statistics.countOnline,
  };
};

@compose(connect(mapStateToProps))
class AboutContainer extends Component {
  static propTypes = {
    className: PropTypes.string,
    buyers: PropTypes.number,
    suppliers: PropTypes.number,
    products: PropTypes.number,
    countOnline: PropTypes.number,
  };

  render() {
    const { className, buyers, suppliers, products, countOnline } = this.props;

    return (
      <About
        className={className}
        buyers={buyers}
        suppliers={suppliers}
        products={products}
        countOnline={countOnline}
      />
    );
  }
}

export default AboutContainer;
