import { asyncTypes } from './asyncTypes';
import { callRouterLinkWorker } from './workers/routerLink';

import { takeEvery } from 'redux-saga/effects';

export function* wrapperWatchersSagas() {
  yield takeEvery(asyncTypes.SET_ROUTER_LINK_STATE_ASYNC, callRouterLinkWorker);
}
