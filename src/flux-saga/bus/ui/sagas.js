import { wrapperWatchersSagas } from '../ui/wrapper/saga/index';
import { settingsWatchersSagas } from '../ui/settings/saga/index';
import { fetchWatchersSagas } from '../ui/fetch/saga/index';

export const uiWatchersSagas = [
  wrapperWatchersSagas,
  settingsWatchersSagas,
  fetchWatchersSagas,
];
