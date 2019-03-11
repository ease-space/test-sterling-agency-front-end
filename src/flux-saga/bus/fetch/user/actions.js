import { types } from './types';

export const userActions = Object.freeze({
  setUserState: state => ({
    type: types.SET_USER_STATE,
    payload: state,
  }),
});
