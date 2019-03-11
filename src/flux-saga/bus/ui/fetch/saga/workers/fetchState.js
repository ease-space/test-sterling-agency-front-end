import { fetchActions } from '../../actions';

import { put, select } from 'redux-saga/effects';

export function* callFetchStateWorker({ payload: state }) {
  const oldFetching = yield select(state => state.ui.fetch.fetching);
  const { isFetch: isFetchOld, type: typeOld } = oldFetching;
  const { isFetch, type } = state;
  if (typeOld.length > 0) {
    if (typeOld === type && !isFetchOld === isFetch) {
      yield put(fetchActions.setFetchState({ isFetch, type: '' }));
    }
  } else {
    yield put(fetchActions.setFetchState({ isFetch, type }));
  }
}
