import { asyncTypes } from './asyncTypes';

export const fetchActionsAsync = Object.freeze({
  setFetchEmitErrorAsync: ({ error = null, type = '' }) => ({
    type: asyncTypes.SET_FETCH_EMIT_ERROR_ASYNC,
    payload: { error, type },
  }),
  setFetchStateAsync: ({ isFetch = false, type = '' }) => ({
    type: asyncTypes.SET_FETCH_STATE_ASYNC,
    payload: { isFetch, type },
  }),
});
