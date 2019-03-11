import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { routerMiddleware } from 'connected-react-router';

import rootReducer from '../bus/rootReducer';
import SagaManager from '../bus/sagaManager';

import { isClient } from '../../core/functions/common';
import { constants } from '../../../webpack/common/constants';
import { logger } from './logger/logger.client';

const client = isClient();
const development = constants.NODE_DEV;

export const configureStore = (history, initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();

  const middleware = [sagaMiddleware, routerMiddleware(history), thunk];

  if (development && client) {
    middleware.push(logger);
  }

  const composeDevTools = client && development ? composeWithDevTools : null;
  const composeEnhancers = composeDevTools ? composeDevTools : compose;
  const enhancer = composeEnhancers(applyMiddleware(...middleware));
  const store = createStore(rootReducer(history), initialState, enhancer);

  store.runSagas = () => SagaManager.runSagas(sagaMiddleware);
  store.close = () => store.dispatch(END);

  if (development && module.hot) {
    module.hot.accept('../bus/rootReducer.js', () => {
      const newRootReducer = require('../bus/rootReducer.js').default;
      store.replaceReducer(newRootReducer(history));
    });

    module.hot.accept('../bus/sagaManager.js', () => {
      SagaManager.cancelSagas(store);
      const newSagaManager = require('../bus/sagaManager.js').default;
      newSagaManager.runSagas(sagaMiddleware);
    });
  }

  return store;
};
