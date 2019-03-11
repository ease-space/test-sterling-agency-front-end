import { types } from './types';

export const initialState = (state = {}) => {
  const { token = '', user = {}, profile = {} } = state;
  return {
    token: token,
    user: user,
    profile: profile,
  };
};

export const userReducer = (state = initialState(), action) => {
  switch (action.type) {
    case types.SET_USER_STATE:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        profile: action.payload.profile,
      };
    default:
      return state;
  }
};
