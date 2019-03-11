import { types } from './types';

export const initialState = {
  onlineMap: [],
};

export const statisticsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_STATISTICS_ONLINE_MAP:
      return {
        ...state,
        onlineMap: action.payload,
      };
    default:
      return state;
  }
};
