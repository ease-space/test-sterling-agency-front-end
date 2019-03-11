import { types } from './types';

export const statisticsActions = Object.freeze({
  setFetchStatisticsRequest: () => ({
    type: types.SET_FETCH_STATISTICS_REQUEST,
  }),
  setFetchStatisticsSuccess: state => ({
    type: types.SET_FETCH_STATISTICS_SUCCESS,
    payload: state,
  }),
  setFetchStatisticsError: () => ({
    type: types.SET_FETCH_STATISTICS_ERROR,
  }),
});
