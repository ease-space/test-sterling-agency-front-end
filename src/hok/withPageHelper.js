import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { intlShape, defineMessages, injectIntl } from 'react-intl';
import { curryRight } from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { constants } from '../core/constants/index';

import { uiActions } from '../flux-saga/bus/ui/wrapper/actions';
import { uiActionsAsync } from '../flux-saga/bus/ui/wrapper/saga/asyncActions';

export const withPageHelper = Enchanced => {
  const messages = defineMessages({
    home: {
      id: 'app.page.home',
      defaultMessage: 'Головна',
    },
    aboutProduct: {
      id: 'app.page.product',
      defaultMessage: 'Про продукт',
    },
    basket: {
      id: 'app.page.basket',
      defaultMessage: 'Кошик',
    },
    help: {
      id: 'app.page.help',
      defaultMessage: 'Допомога',
    },
    account: {
      id: 'app.page.account',
      defaultMessage: 'Аккаунт',
    },
    collection: {
      id: 'app.page.collection',
      defaultMessage: 'Колекція',
    },
    statistics: {
      id: 'app.page.statistics',
      defaultMessage: 'Статистика',
    },
  });

  const mapDispatchToProps = dispatch => {
    return {
      actions: bindActionCreators(
        {
          ...uiActions,
          ...uiActionsAsync,
        },
        dispatch,
      ),
    };
  };

  const mapStateToProps = state => {
    return {
      authUser: state.fetch.user,
      isOpenHeaderMobileMenu: state.ui.wrapper.isOpenHeaderMobileMenu,
      lastActionRouter: state.router.action,
    };
  };

  @compose(
    connect(
      mapStateToProps,
      mapDispatchToProps,
    ),
    curryRight(injectIntl),
  )
  class withPageHelper extends Component {
    static propTypes = {
      intl: intlShape,
      actions: PropTypes.object,
      authUser: PropTypes.object,
      isOpenDrawerMobile: PropTypes.bool,
      lastActionRouter: PropTypes.string,
    };

    getPageTitle = path => {
      const { formatMessage } = this.props.intl;

      switch (path) {
        case constants.PATCH_URL_HOME:
          return formatMessage(messages.home);

        case constants.PATCH_URL_PRODUCT:
          return formatMessage(messages.aboutProduct);

        case constants.PATCH_URL_BASKET:
          return formatMessage(messages.basket);

        case constants.PATCH_URL_HELP:
          return formatMessage(messages.help);

        case constants.PATCH_URL_ACCOUNT:
          return formatMessage(messages.account);

        case constants.PATCH_URL_COLLECTION:
          return formatMessage(messages.collection);

        case constants.PATCH_URL_STATISTICS:
          return formatMessage(messages.statistics);

        default:
          return '';
      }
    };

    handleCloseMobileHeaderMenu = () => {
      const { actions, isOpenDrawerMobile } = this.props;
      if (isOpenDrawerMobile) {
        actions.setOpenHeaderMobileMenuState(false);
      }
    };

    handleOnClickHome = () => {
      const { actions } = this.props;
      this.handleCloseMobileHeaderMenu();
      actions.setRouterToLinkAsync(constants.PATCH_URL_HOME);
    };

    handleOnClickAboutProduct = () => {
      const { actions } = this.props;
      this.handleCloseMobileHeaderMenu();
      actions.setRouterToLinkAsync(constants.PATCH_URL_PRODUCT);
    };

    handleOnClickBasket = () => {
      const { actions } = this.props;
      this.handleCloseMobileHeaderMenu();
      actions.setRouterToLinkAsync(constants.PATCH_URL_BASKET);
    };

    handleOnClickHelp = () => {
      const { actions } = this.props;
      this.handleCloseMobileHeaderMenu();
      actions.setRouterToLinkAsync(constants.PATCH_URL_HELP);
    };

    handleOnClickAccount = () => {
      const { actions } = this.props;
      this.handleCloseMobileHeaderMenu();
      actions.setRouterToLinkAsync(constants.PATCH_URL_ACCOUNT);
    };

    handleOnClickCollection = () => {
      const { actions } = this.props;
      this.handleCloseMobileHeaderMenu();
      actions.setRouterToLinkAsync(constants.PATCH_URL_COLLECTION);
    };

    handleOnClickStatistics = () => {
      const { actions } = this.props;
      this.handleCloseMobileHeaderMenu();
      actions.setRouterToLinkAsync(constants.PATCH_URL_STATISTICS);
    };

    handleClickBack = () => {
      const { actions, lastActionRouter } = this.props;
      if (lastActionRouter === 'POP') {
        actions.setRouterToLinkAsync(constants.PATCH_URL_HOME);
      } else {
        actions.goBack();
      }
    };

    render() {
      const { authUser } = this.props;

      return (
        <Enchanced
          authUser={authUser}
          getPageTitle={this.getPageTitle}
          onClickHome={this.handleOnClickHome}
          onClickAboutProduct={this.handleOnClickAboutProduct}
          onClickBasket={this.handleOnClickBasket}
          onClickHelp={this.handleOnClickHelp}
          onClickAccount={this.handleOnClickAccount}
          onClickCollection={this.handleOnClickCollection}
          onClickStatistics={this.handleOnClickStatistics}
          onClickBack={this.handleClickBack}
          {...this.props}
        />
      );
    }
  }

  return withPageHelper;
};
