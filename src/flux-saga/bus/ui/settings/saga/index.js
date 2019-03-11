import { asyncTypes } from './asyncTypes';

import { callSettingsLanguageWorker } from './workers/settingsLanguage';

import { takeEvery } from 'redux-saga/effects';

export function* settingsWatchersSagas() {
  yield takeEvery(
    asyncTypes.SET_SETTINGS_LANGUAGE_STATE_ASYNC,
    callSettingsLanguageWorker,
  );
}
