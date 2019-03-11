import { asyncTypes } from './asyncTypes';
import { callFetchEmitErrorWorker } from './workers/emitError';
import { callFetchStateWorker } from './workers/fetchState';

import { takeEvery } from 'redux-saga/effects';

export function* fetchWatchersSagas() {
  yield takeEvery(
    asyncTypes.SET_FETCH_EMIT_ERROR_ASYNC,
    callFetchEmitErrorWorker,
  );
  yield takeEvery(asyncTypes.SET_FETCH_STATE_ASYNC, callFetchStateWorker);
}
