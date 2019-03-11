import { eventChannel, END } from 'redux-saga';

import { statisticsActions } from '../../actions';
import { fetchActionsAsync } from '../../../../ui/fetch/saga/asyncActions';

import { types } from '../../types';

import { Api } from '../../../../../../core/rest-api/index';

import { put, call, select, take } from 'redux-saga/effects';

const fetchInterval = isFetch => {
  return eventChannel(emitter => {
    const interval = setInterval(() => {
      if (isFetch) {
        emitter(isFetch);
      } else {
        emitter(END);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });
};

export function* callFetchStatisticsWorker() {
  const intervalChanel = yield call(fetchInterval, true);
  while (true) {
    const isFetch = yield take(intervalChanel);
    if (isFetch) {
      try {
        yield put(statisticsActions.setFetchStatisticsRequest());
        yield put(
          fetchActionsAsync.setFetchStateAsync({
            isFetch: true,
            type: types.SET_FETCH_STATISTICS_REQUEST,
          }),
        );

        const token = yield select(state => state.fetch.user.token);

        const response = yield call(Api.statistics.getStatisticsUsers, token);
        const data = yield call([response, response.json]);

        yield put(statisticsActions.setFetchStatisticsSuccess(data));
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
  }
}
