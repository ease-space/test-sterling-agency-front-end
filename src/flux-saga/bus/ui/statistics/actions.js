import { types } from './types';

export const statisticsActions = Object.freeze({
  setStatisticsOnlineMap: state => ({
    type: types.SET_STATISTICS_ONLINE_MAP,
    payload: state,
  }),
});
