import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { basketActionsAsync } from '../flux-saga/bus/fetch/basket/saga/asyncActions';

import { types } from '../flux-saga/bus/fetch/basket/types';

import {
  isClient,
  isLoadingPage,
  getFetchingWithReselect,
} from '../core/functions';

export const withPageFetch = Enchanced => {
  const mapDispatchToProps = dispatch => {
    return {
      actions: bindActionCreators(
        {
          ...basketActionsAsync,
        },
        dispatch,
      ),
    };
  };

  const mapStateToProps = state => {
    return {
      location: state.router.location,
      fetching: getFetchingWithReselect(state),
    };
  };

  @compose(
    connect(
      mapStateToProps,
      mapDispatchToProps,
    ),
  )
  class withPageFetch extends Component {
    static propTypes = {
      actions: PropTypes.object,
      location: PropTypes.object,
      fetching: PropTypes.object,
    };

    constructor(props) {
      super(props);
      this.state = {
        pathname: '',
      };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
      return {
        pathname: nextProps.location.pathname,
        isRunFetch: nextProps.location.pathname !== prevState.pathname,
      };
    }

    getFetch = (fetch = () => null) => {
      const { isRunFetch } = this.state;
      if (isClient() && isRunFetch) {
        fetch();
      }
    };

    getFetchBasket = () => {
      const { actions } = this.props;
      this.getFetch(actions.setFetchBasketProductAsync);
    };

    render() {
      const {
        fetching: { isFetch, type },
      } = this.props;

      const isLoadingBasket = isLoadingPage(
        isFetch,
        type,
        types.SET_FETCH_BASKET_PRODUCTS_REQUEST,
      );

      return (
        <Enchanced
          isLoadingBasket={isLoadingBasket}
          getFetchBasket={this.getFetchBasket}
          {...this.props}
        />
      );
    }
  }

  return withPageFetch;
};
