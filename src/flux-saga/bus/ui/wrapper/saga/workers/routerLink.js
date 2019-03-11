import { push } from 'connected-react-router';

import { put } from 'redux-saga/effects';

export function* callRouterLinkWorker({ payload: link }) {
  yield put(push(link));
}
