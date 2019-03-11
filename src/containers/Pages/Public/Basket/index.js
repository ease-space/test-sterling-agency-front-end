import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Basket from '../../../../components/Pages/Public/Basket/index';

class BasketContainer extends Component {
  static propTypes = {
    getFetchBasket: PropTypes.func,
  };

  static defaultProps = {
    getFetchBasket: () => null,
  };

  componentDidMount() {
    const { getFetchBasket } = this.props;
    getFetchBasket();
  }

  render() {
    return <Basket />;
  }
}

export default BasketContainer;
