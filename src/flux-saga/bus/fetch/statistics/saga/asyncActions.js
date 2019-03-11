import { asyncTypes } from './asyncTypes';

export const statisticsActionsAsync = Object.freeze({
  setFetchStatisticsAsync: () => ({
    type: asyncTypes.SET_FETCH_STATISTICS_ASYNC,
  }),
});
