import { asyncTypes } from './asyncTypes';
import { callStatisticsOnlineMapWorker } from './workers/statisticsOnlineMap';

import { takeEvery } from 'redux-saga/effects';

export function* statisticsWatchersSagas() {
  yield takeEvery(
    asyncTypes.SET_STATISTICS_ONLINE_MAP_ASYNC,
    callStatisticsOnlineMapWorker,
  );
}
