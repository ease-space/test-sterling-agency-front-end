import React, { Component } from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { Route, Switch, Redirect } from 'react-router-dom';

import Loadable from '../../containers/Pages/Loadable';

import { isAuthenticatedInterface } from '../../core/functions';
import { constants } from '../../core/constants/index';

import { withPageFetch } from '../../hok/withPageFetch';

@compose(withPageFetch)
class Routes extends Component {
  static propTypes = {
    isLoadingBasket: PropTypes.bool,
    getFetchBasket: PropTypes.func,
    authUser: PropTypes.object.isRequired,
  };

  render() {
    const { authUser, isLoadingBasket, getFetchBasket } = this.props;

    const home = import('../../containers/Pages/Public/Home');
    const product = import('../../containers/Pages/Public/Product');
    const currentProduct = import('../../containers/Pages/Public/Product/Current');
    const basket = import('../../containers/Pages/Public/Basket');
    const help = import('../../containers/Pages/Public/Help');
    const collection = import('../../containers/Pages/Public/Collection');
    const account = import('../../containers/Pages/Private/Account');

    const Page = props => {
      const { dynamicImport, isLoading } = props;

      return (
        <Loadable
          isLoading={isLoading}
          dynamicImport={dynamicImport}
          {...props}
        />
      );
    };

    return (
      <Switch>
        <Route
          exact
          path={constants.PATCH_URL_HOME}
          component={props => <Page dynamicImport={home} {...props} />}
        />

        <Route
          exact
          path={constants.PATCH_URL_PRODUCT}
          component={props => <Page dynamicImport={product} {...props} />}
        />

        <Route
          path={constants.PATCH_URL_CURRENT_PRODUCT}
          component={props => (
            <Page dynamicImport={currentProduct} {...props} />
          )}
        />

        <Route
          exact
          path={constants.PATCH_URL_BASKET}
          render={props => (
            <Page
              isLoading={isLoadingBasket}
              getFetchBasket={getFetchBasket}
              dynamicImport={basket}
              {...props}
            />
          )}
        />

        <Route
          exact
          path={constants.PATCH_URL_HELP}
          component={props => <Page dynamicImport={help} {...props} />}
        />

        <Route
          exact
          path={constants.PATCH_URL_COLLECTION}
          component={props => <Page dynamicImport={collection} {...props} />}
        />

        {isAuthenticatedInterface(authUser) && (
          <Route
            exact
            path={constants.PATCH_URL_ACCOUNT}
            component={props => <Page dynamicImport={account} {...props} />}
          />
        )}

        <Redirect to={constants.PATCH_URL_HOME} />
      </Switch>
    );
  }
}

export default Routes;
