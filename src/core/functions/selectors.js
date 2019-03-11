import { createSelector } from 'reselect';

export const getFetching = state => state.ui.fetch.fetching;

export const getFetchingWithReselect = createSelector(
  [getFetching],
  fetching => {
    return fetching;
  },
);
