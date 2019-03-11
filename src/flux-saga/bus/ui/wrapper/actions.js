import { types } from './types';

export const uiActions = Object.freeze({
  setOpenHeaderMobileMenuState: state => ({
    type: types.SET_OPEN_HEADER_MOBILE_MENU_STATE,
    payload: state,
  }),
});
