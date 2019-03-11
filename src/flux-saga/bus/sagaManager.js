import { constants } from '../../../webpack/common/constants';
import sagas from './rootSaga';

import { take, fork, cancel } from 'redux-saga/effects';

export const CANCEL_SAGAS_HMR = 'CANCEL_SAGAS_HMR';

const createAbortableSaga = saga => {
  if (constants.NODE_DEV) {
    return function* main() {
      const sagaTask = yield fork(saga);

      yield take(CANCEL_SAGAS_HMR);
      yield cancel(sagaTask);
    };
  } else {
    return saga;
  }
};

const SagaManager = {
  runSagas(sagaMiddleware) {
    return Promise.all(
      sagas.map(createAbortableSaga).map(saga => sagaMiddleware.run(saga).done),
    );
  },

  cancelSagas(store) {
    store.dispatch({
      type: CANCEL_SAGAS_HMR,
    });
  },
};

export default SagaManager;
