import { types } from './types';

export const initialState = {
  fetching: {
    isFetch: false,
    type: '',
  },
  error: {
    type: '',
    error: '',
  },
};

export const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_FETCH_STATE:
      return {
        ...state,
        fetching: action.payload,
      };
    case types.SET_FETCH_EMIT_ERROR_STATE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
