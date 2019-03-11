import { statisticsActions } from '../../actions';

import { put, select } from 'redux-saga/effects';

export function* callStatisticsOnlineMapWorker({ payload: countOnlineNew }) {
  const oldMap = yield select(state => state.ui.statistics.onlineMap);
  const currentTime = new Date().getTime();
  let newMap = [...oldMap, { time: currentTime, countOnline: countOnlineNew }];
  if (newMap.length > 120) {
    newMap.splice(0, 1);
  }
  yield put(statisticsActions.setStatisticsOnlineMap(newMap));
}
