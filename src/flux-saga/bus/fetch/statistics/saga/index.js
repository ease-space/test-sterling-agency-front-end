import { asyncTypes } from './asyncTypes';
import { callFetchStatisticsWorker } from './workers/fetchStatistics';

import { takeEvery } from 'redux-saga/effects';

export function* statisticsWatchersSagas() {
  yield takeEvery(
    asyncTypes.SET_FETCH_STATISTICS_ASYNC,
    callFetchStatisticsWorker,
  );
}
