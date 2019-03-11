import { statisticsActions } from '../../actions';
import { fetchActionsAsync } from '../../../../ui/fetch/saga/asyncActions';

import { types } from '../../types';

import { put, delay } from 'redux-saga/effects';

export function* callFetchStatisticsWorker() {
  try {
    yield put(statisticsActions.setFetchStatisticsRequest());
    yield put(
      fetchActionsAsync.setFetchStateAsync({
        isFetch: true,
        type: types.SET_FETCH_STATISTICS_REQUEST,
      }),
    );

    console.log('FETCH STATISTICS START');

    yield delay(1000);

    console.log('FETCH STATISTICS COMPLETE');

    yield put(
      statisticsActions.setFetchStatisticsSuccess({ count_online: 965 }),
    );
  } catch (error) {
    yield put(statisticsActions.setFetchStatisticsError());
    yield put(
      fetchActionsAsync.setFetchEmitErrorAsync({
        error: error,
        type: types.SET_FETCH_STATISTICS_REQUEST,
      }),
    );
  } finally {
    yield put(
      fetchActionsAsync.setFetchStateAsync({
        type: types.SET_FETCH_STATISTICS_REQUEST,
      }),
    );
  }
}
