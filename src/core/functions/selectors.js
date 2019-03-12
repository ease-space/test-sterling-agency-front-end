import { createSelector } from 'reselect';

export const getFetching = state => state.ui.fetch.fetching;

export const getFetchingWithReselect = createSelector(
  [getFetching],
  fetching => {
    return fetching;
  },
);

export const getOnlineMap = state => state.ui.statistics.onlineMap;

export const getOnlineMapWithReselect = createSelector(
  [getOnlineMap],
  fetching => {
    return fetching;
  },
);
