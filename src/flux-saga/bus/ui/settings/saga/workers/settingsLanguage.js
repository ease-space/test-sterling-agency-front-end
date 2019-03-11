import { settingsActions } from '../../actions';

import { setSettings } from '../../../../../../core/functions/index';

import { put, call, select } from 'redux-saga/effects';

export function* callSettingsLanguageWorker({ payload: state }) {
  const stateOld = yield select(store => store.settings);
  const stateNew = yield call(() => ({
    ...stateOld,
    language: state,
  }));
  yield call(setSettings, JSON.stringify(stateNew));
  yield put(settingsActions.setLanguageState(state));
}
