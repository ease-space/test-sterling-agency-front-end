import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { AppContainer } from 'react-hot-loader';
import RedBox from 'redbox-react';

import IntlProvider from '../containers/IntlProvider/index';
import App from '../containers/App';

import { configureStore } from '../flux-saga/store/index.js';
import { constants } from '../../webpack/common/constants';

const INITIAL_STATE = window.__INITIAL_STATE__;
delete window.__INITIAL_STATE__;

const browserHistory = createBrowserHistory();
const store = configureStore(browserHistory, INITIAL_STATE);
store.runSagas();

const reactRoot = window.document.getElementById('appMountPoint');

const render = Component => {
  try {
    ReactDOM.hydrate(
      <AppContainer>
        <Provider store={store}>
          <IntlProvider>
            <ConnectedRouter history={browserHistory}>
              <Component />
            </ConnectedRouter>
          </IntlProvider>
        </Provider>
      </AppContainer>,
      reactRoot,
    );
  } catch (error) {
    ReactDOM.render(<RedBox error={error} />, reactRoot);
  }
};

if (constants.NODE_DEV && module.hot) {
  module.hot.accept('../containers/App/index.js', () => {
    const App = require('../containers/App/index.js').default;
    render(App);
  });
}

render(App);
