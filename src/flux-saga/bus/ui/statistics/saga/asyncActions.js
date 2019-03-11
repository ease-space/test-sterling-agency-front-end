import { asyncTypes } from './asyncTypes';

export const statisticsActionsAsync = Object.freeze({
  setStatisticsOnlineMapAsync: state => ({
    type: asyncTypes.SET_STATISTICS_ONLINE_MAP_ASYNC,
    payload: state,
  }),
});
