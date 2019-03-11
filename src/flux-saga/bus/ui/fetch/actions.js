import { types } from './types';

export const fetchActions = Object.freeze({
  setFetchEmitErrorState: (error = '') => ({
    type: types.SET_FETCH_EMIT_ERROR_STATE,
    payload: error,
    error: true,
  }),
  setFetchState: ({ isFetch = false, type = '' }) => ({
    type: types.SET_FETCH_STATE,
    payload: { isFetch, type },
  }),
});
