import { fetchActions } from '../../actions';

import { put } from 'redux-saga/effects';

export function* callFetchEmitErrorWorker({ payload: state }) {
  yield put(
    fetchActions.setFetchEmitErrorState({
      error: state,
    }),
  );
}
