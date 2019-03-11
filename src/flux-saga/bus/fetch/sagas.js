import { basketWatchersSagas } from '../fetch/basket/saga/index';
import { statisticsWatchersSagas } from '../fetch/statistics/saga/index';

export const fetchWatchersSagas = [
  basketWatchersSagas,
  statisticsWatchersSagas,
];
